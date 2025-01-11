"use client"
import Nav from "@/component/Nav";
import Header from "@/component/Header";
import VangaImage from "@/component/VangaImage";
import Bats from "@/component/Bats";
import BottomNav from "@/component/BottomNav";

import React, {useEffect, useState} from "react";
import {useFetchAI} from "@/hook/useFetchAI";
import {useWallet} from "@solana/wallet-adapter-react";
import {Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";

export default function Home() {
    const [input, setInput] = useState<string>('')
    const {data} = useFetchAI(input);

    const {publicKey, connected, sendTransaction} = useWallet();
    const recipient = 'D9Pn2KWJoheQ78K5tXZZ1TgQHTWYkEizdUkp4kDAQmN9';
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    const number = 0.005;


    useEffect(() => {
        if (connected) {
            console.log('Wallet connected:', publicKey?.toString());
        }
    }, [connected, publicKey]);


    const handleGift = async () => {
        if (!publicKey) {
            alert("Please connect your wallet.");
            return;
        }

        if (isNaN(number)) {
            alert("The input cannot be converted to a number.");
            return;
        }

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(recipient),
                lamports: number * LAMPORTS_PER_SOL,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'confirmed');
    }

    return (
        <div className="page">
            <VangaImage/>
            <Bats/>

            <div className="wrapper">
                <Nav/>
                <Header/>

                <div className="form">
                    {data && <>
                        <span className="absolute left-10 top-96 ml-64 text-white pr-24 pt-2 pb-2 z-30"
                                style={{top: 'calc(24rem + 225px)'}}>{data}</span>
                    </>}
                    <input
                            type="text"
                            value={input}
                            placeholder="Write all you questions for me"
                            onChange={(e) => setInput(e.target.value)}
                            className="absolute left-10 top-96 bg-purple-700 ml-64 text-white pt-2 pb-2 z-30"
                            style={{top: 'calc(24rem + 275px)', width: '300px'}}

                    />
                    <button
                        className="absolute left-10 top-96 bg-purple-700 ml-64 text-white pl-24 pr-24 pt-2 pb-2 z-30"
                        style={{top: 'calc(24rem + 325px)', width: '300px'}}
                        onClick={handleGift}
                    >
                        ASK 0.005 SOL
                    </button>
                </div>
            </div>

            <BottomNav/>
        </div>
    );
}
