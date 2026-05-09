import { test, expect } from "@playwright/test"

test.describe("Onboarding / Home page", () => {
    test("should show home page with site name and CTA", async ({ page }) => {
        await page.goto("/")
        await expect(page.locator("h1")).toContainText("Kazoo")
        await expect(page.locator("text=Get Started")).toBeVisible()
        await expect(page.getByRole("main").locator("text=GitHub")).toBeVisible()
    })

    test("should navigate to signup from Get Started", async ({ page }) => {
        await page.goto("/")
        await page.click("text=Get Started")
        await expect(page).toHaveURL("/signup")
    })

    test("should show navigation links", async ({ page }) => {
        await page.goto("/")
        await expect(page.locator("text=Dashboard")).toBeVisible()
        await expect(page.locator("text=Settings")).toBeVisible()
    })
})
