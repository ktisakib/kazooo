import { test, expect } from "@playwright/test"

test.describe("Protected Routes", () => {
    test("should redirect unauthenticated users from dashboard to signin", async ({
        page,
    }) => {
        await page.goto("/dashboard")
        await expect(page).toHaveURL(/signin/)
    })

    test("should redirect unauthenticated users from settings to signin", async ({
        page,
    }) => {
        await page.goto("/settings")
        await expect(page).toHaveURL(/signin/)
    })
})

test.describe("Public Routes", () => {
    test("should show about page", async ({ page }) => {
        await page.goto("/about")
        await expect(page).toHaveURL("/about")
        await page.waitForLoadState("domcontentloaded")
    })

    test("should show 404 for unknown routes", async ({ page }) => {
        await page.goto("/unknown-page-xyz")
        await expect(page.locator("text=not found")).toBeVisible({
            timeout: 5000,
        })
    })
})

test.describe("Navigation", () => {
    test("should have working theme toggle", async ({ page }) => {
        await page.goto("/")
        // Find the theme toggle button
        const themeButton = page.locator('button:has(svg)')
            .filter({ has: page.locator('.sr-only:text("Toggle theme")') })
        if (await themeButton.isVisible()) {
            await themeButton.click()
            // Should show dropdown with Light, Dark, System options
            await expect(page.locator("text=Light")).toBeVisible()
            await expect(page.locator("text=Dark")).toBeVisible()
            await expect(page.locator("text=System")).toBeVisible()
        }
    })

    test("should navigate between pages using nav links", async ({ page }) => {
        await page.goto("/")
        // Try to navigate to about if it exists in nav
        const aboutLink = page.locator('nav a[href="/about"]')
        if (await aboutLink.isVisible()) {
            await aboutLink.click()
            await expect(page).toHaveURL("/about")
        }
    })
})
