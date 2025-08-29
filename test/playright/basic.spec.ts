import basicSetup from "../wallet-setup/basic.setup"
import { testWithSynpress } from "@synthetixio/synpress"
import { MetaMask, metaMaskFixtures } from "@synthetixio/synpress/playwright"
// import { test, expect } from "@playwright/test" we will use test from synpress instead

// Create a test instance with Synpress and MetaMask fixtures
const test = testWithSynpress(metaMaskFixtures(basicSetup))

// Extract expect function from test
const { expect } = test

test("has title", async ({ page }) => {
    await page.goto("/")

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/TSender/)
})

test("Should show the airdrop form when connected, otherwise, not", async ({
    page,
    context,
    metamaskPage,
    extensionId,
}) => {
    // check we see "please connect wallet" when not connected
    await page.goto("/")
    await expect(page.getByText("Please connect")).toBeVisible()

    // click connect button
    const metamask = new MetaMask(context, metamaskPage, basicSetup.walletPassword, extensionId)
    await page.getByTestId("rk-connect-button").click()
    await page
        .getByTestId("rk-wallet-option-io.metamask")
        .waitFor({ state: "visible", timeout: 30000 })
    await page.getByTestId("rk-wallet-option-io.metamask").click()

    // Connect MetaMask to the dapp
    await metamask.connectToDapp()

    const customNetwork = {
        name: "Anvil",
        chainId: 31337,
        rpcUrl: "http://127.0.0.1:8545",
        symbol: "ETH",
    }
    await metamask.addNetwork(customNetwork)

    // Wait for connection and check that the airdrop form appears
    await expect(page.getByText("Token Address")).toBeVisible()
})
