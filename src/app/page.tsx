"use client"
import Header from "@/component/Header";
import Image from "next/image";
import fireStone from '../../public/fireStone.png'
import form from '../../public/form.png'
import React, {useEffect, useState} from "react";
import BottomNav from "@/component/BottomNav";
import {useFetchAI} from "@/hook/useFetchAI";
import {useWallet} from "@solana/wallet-adapter-react";
import {Connection, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";

export default function Home() {
    console.log("AAA")
    const content = "what do I need do with relationship with AI Agent?"
    const {data} = useFetchAI(content);

    const {publicKey, connected, sendTransaction} = useWallet();
    const [transactionStatus, setTransactionStatus] = useState<string>('');
    const recipient = '9hUyPGeYFxdfrp5XmrkaVoEbB1V8hjuigXdUAM7LQTXi';

    useEffect(() => {
        if (connected) {
            console.log('Wallet connected:', publicKey?.toString());
        }
    }, [connected, publicKey]);

    const handleTransfer = async () => {
        if (!connected || !publicKey) {
            setTransactionStatus('Wallet is not connected');
            return;
        }

        if (!recipient) {
            setTransactionStatus('Please enter a valid recipient address and amount');
            return;
        }

        try {
            const connection = new Connection('https://api.devnet.solana.com');
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: new PublicKey(recipient),
                    lamports: 0.005 * 1e9,
                })
            );

            const signature = await sendTransaction(transaction, connection);
            setTransactionStatus(`Transaction sent! Signature: ${signature}`);

            await connection.confirmTransaction(signature, 'processed');


        } catch (error) {
            console.error('Error during transaction:', error);
            setTransactionStatus('Transaction failed');
        }
    };

    return (
        <div>
            <div className="vanga">
                <Header/>
                <div className="mt-24 flex flex-col justify-center items-center relative z-10">
                    <h2 className="text-5xl font-bold mb-4">HELLO!</h2>
                    <p className="text-2xl font-semibold">You&#39;ve entered Vang&#39;s forest.</p>
                    <p className="text-2xl font-semibold">Ask me a question, and I&#39;ll draw cards</p>
                    <p className="text-2xl font-semibold">to uncover your answer.</p>
                </div>

                <div className="flex flex-row-reverse">
                    <Image src={form} alt={'form'} width={0} height={0}
                           className="absolute top-96 z-20 left-10 h-[450px] w-[800px]"/>
                    <button
                        className="absolute left-10 top-96 bg-purple-700 ml-64 text-white pl-24 pr-24 pt-2 pb-2 z-30"
                        style={{top: 'calc(24rem + 325px)'}}
                        onClick={handleTransfer}
                    >
                        ASK 0.005 SOL
                    </button>

                    <Image src={'./vanga.svg'}
                           alt={'vanga'}
                           width={783}
                           height={906}
                           className="mr-10 block"/>
                    <Image src={fireStone}
                           alt={'fireStone'}
                           width={660}
                           height={660}
                           className="absolute place-items-center mt-60 mr-80"/>

                </div>
            </div>

            <BottomNav/>
        </div>

    );
}
