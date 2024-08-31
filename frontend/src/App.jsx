import React, {useState, FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { Balance } from './Balance';
import { SigningMessage } from './SigningMessage';
import { SendSol } from './SendSol';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/fAl8YRBTL4ySh0Yc-OcBfZD_N0XL-Nrt'}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton>
                      <Airdrop></Airdrop>
                      <Balance></Balance>
                      <SigningMessage></SigningMessage>
                      <SendSol></SendSol>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
