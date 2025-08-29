# Contributing

Thanks for wanting to contribute to the project! Here are some guidelines to help you get started.

# Getting Started

## Dev Requirements

- [anvil](https://book.getfoundry.sh/anvil/)
    - You'll know you've installed it right if you can run `anvil --version` and get a response like `anvil 0.3.0 (5a8bd89 2024-12-20T08:45:53.195623000Z)`
- [nvm](https://github.com/nvm-sh/nvm)
    - You'll know you've installed it right if you can run `nvm --version` and get a response like `0.39.0`

# Tests

```bash
pnpm test:unit # unit tests
pnpm test:e2e # e2e tests
pnpm test:e2e-ui # e2e tests with ui
```
**Note:** To run tests from the `e2e` folder, you can change the `testDir` in `playwright.config.ts` from `'./test'` to `'./e2e'`.

# Anvil Setup

After cloning the repo, and following the `#setup` section from the [README.md](../README.md), you can run the following commands to start the project:

```bash
nvm use # This will setup the correct node version
pnpm run anvil # This will start a locally running anvil server, with TSender deployed
```

## tsender-deployed.json

The `tsender-deployed.json` object is a starting state for testing and working with the UI.

- TSender: `0x5FbDB2315678afecb367f032d93F642f64180aa3`
- Mock token address: `0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512` (can use the `mint` or `mintTo` function)
- The anvil1 default address (`0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`) with private key `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80` has some tokens already minted.

```solidity
    uint256 MINT_AMOUNT = 1e18;

    function mint() external {
        _mint(msg.sender, MINT_AMOUNT);
    }

    function mintTo(address to, uint256 amount) external {
        _mint(to, amount);
    }
```
