"use client"
import {useEffect, useMemo, useState} from "react";
import {ConnectionProvider, useWallet, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletAdapterNetwork} from '@solana/wallet-adapter-base';
import {SolflareWalletAdapter} from '@solana/wallet-adapter-wallets';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import {clusterApiUrl} from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function AppWalletProvider({children}: { children: React.ReactNode; }) {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new SolflareWalletAdapter()], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
