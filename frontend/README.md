# Rewardify
Rewardify is a Chrome extension that allows fans to tip their favorite YouTube creators on-chain while creating a reward pool. A portion of donations is redistributed to top viewers based on watch time, gamifying engagement and incentivizing both fans and creators. Built on Monad for fast, low-fee transactions.

## Features
- **Chrome Extension Integration**: Adds a tip button directly on YouTube channels.
- **Wallet Connection**: Fans and creators connect their Monad wallets to interact with the platform.
- **Reward Pool**: Donations are collected in a pool, distributed to creators and top fans.
- **Leaderboard**: Fans can view top contributors **based** on watch time and rewards.
- **Watch-Time Tracking**: Extension tracks valid watch time to calculate engagement.
- **Simple, Clean UI**: Modern design with organic shapes, rounded edges, and intuitive navigation.


## Installation
1. Clone the repository:

```bash
git clone <repository-url>
```
2. Open Chrome and navigate to **`chrome://extensions/`**.
3. Enable **`Developer Mode`**.
4. Click **`Load unpacked`** and select the cloned repository folder.
5. The Rewardify extension icon should appear in your toolbar.

## Usage
### For Creators:
1. Open your YouTube channel page.
2. Click the Rewardify extension icon.
3. Click **Connect Wallet / Create Pool** to link your wallet.
4. Fans can now tip your channel via the extension, and the reward pool will track top viewers.

### For Fans:
1. Open any YouTube channel page.
2. Click the Rewardify extension icon.
3. Connect your wallet.
4. Tip the creator using the tip button. Your watch time will be tracked for leaderboard rewards.

## Tech Stack
- **Frontend**: Chrome Extension (HTML, CSS, JavaScript)
- **Blockchain**: Solidity smart contracts on Monad

---

## How It Works
1. Creator links wallet → creates reward pool.
2. Fans connect wallets → watch videos and tip.
3. Extension tracks watch time and tips.
4. At the end of each cycle, the pool is distributed:  
   - 90% to creator  
   - 10% split to top viewers based on watch time
 - update