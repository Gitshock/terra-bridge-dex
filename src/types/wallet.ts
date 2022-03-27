import { isBrowser, isChrome, isEdgeChromium } from 'react-device-detect'

export enum WalletEnum {
  TerraExtension = 'TerraExtension',
  Binance = 'Binance',
  MetaMask = 'MetaMask',
  TerraWalletConnect = 'TerraWalletConnect',
  WalletConnect = 'WalletConnect',
  CoinbaseWallet = 'CoinbaseWallet',
  Keplr = 'Keplr',
}

export const WalletTitle: Record<WalletEnum, string> = {
  TerraExtension: 'Gitshock Web3.js (Extension)',
  TerraWalletConnect: 'Gitshock Dapps (Mobile)',
  Binance: 'Binance Chain Wallet',
  MetaMask: 'MetaMask',
  WalletConnect: 'WalletConnect',
  CoinbaseWallet: 'Coinbase Wallet',
  Keplr: 'Keplr (Extension)',
}

export const WalletSupportBrowser: Record<
  WalletEnum,
  { isSupport: boolean; errorMessage: string }
> = {
  TerraExtension: {
    isSupport: isBrowser && (isChrome || isEdgeChromium),
    errorMessage: 'Available for desktop Chrome.',
  },
  // support all browser
  TerraWalletConnect: {
    isSupport: true,
    errorMessage: '',
  },
  Binance: {
    isSupport: isBrowser && (isChrome || isEdgeChromium),
    errorMessage: 'Available for desktop Chrome.',
  },
  MetaMask: {
    isSupport: isBrowser && (isChrome || isEdgeChromium),
    errorMessage: 'Available for desktop Chrome.',
  },
  // support all browser
  WalletConnect: { isSupport: true, errorMessage: '' },
  CoinbaseWallet: {
    isSupport: isBrowser,
    errorMessage: 'Available for desktop browsers.',
  },
  Keplr: {
    isSupport: isBrowser && (isChrome || isEdgeChromium),
    errorMessage: 'Available for desktop Chrome.',
  },
}
