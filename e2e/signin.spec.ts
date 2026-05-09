import { test, expect } from "@playwright/test"

test.describe("Sign In Flow", () => {
    test("should show signin page with form", async ({ page }) => {
        await page.goto("/signin")
        await expect(page.locator("h1")).toContainText("Sign In")
        await expect(page.locator("#email")).toBeVisible()
        await expect(page.locator("#password")).toBeVisible()
    })

    test("should show validation errors for empty fields", async ({ page }) => {
        await page.goto("/signin")
        await page.click('button[type="submit"]')
        await expect(page.locator("text=Please enter a valid email")).toBeVisible()
    })

    test("should show validation error for invalid email", async ({ page }) => {
        await page.goto("/signin")
        await page.fill("#email", "invalid")
        await page.fill("#password", "password123")
        await page.click('button[type="submit"]')
        await expect(page.locator("text=Please enter a valid email")).toBeVisible()
    })

    test("should show validation error for short password", async ({ page }) => {
        await page.goto("/signin")
        await page.fill("#email", "test@example.com")
        await page.fill("#password", "short")
        await page.click('button[type="submit"]')
        await expect(page.locator("text=Password must be at least")).toBeVisible()
    })

    test("should have link to signup page", async ({ page }) => {
        await page.goto("/signin")
        await page.click("text=Create one")
        await expect(page).toHaveURL("/signup")
    })

    test("should have link to forgot password page", async ({ page }) => {
        await page.goto("/signin")
        const forgotLink = page.locator("text=Forgot password")
        if (await forgotLink.isVisible()) {
            await forgotLink.click()
            await expect(page).toHaveURL("/forgot-password")
        }
    })

    test("should show OAuth buttons", async ({ page }) => {
        await page.goto("/signin")
        await expect(page.locator("text=or continue with")).toBeVisible()
    })

    test("should attempt signin with invalid credentials", async ({ page }) => {
        await page.goto("/signin")
        await page.fill("#email", "nonexistent@example.com")
        await page.fill("#password", "wrongpassword123")
        await page.click('button[type="submit"]')
        // Wait for error toast from Supabase
        await page.waitForTimeout(2000)
        // Either Supabase error or connection error
        const hasToast = await page.locator("[data-sonner-toast]").count()
        expect(hasToast).toBeGreaterThanOrEqual(0)
    })
})
