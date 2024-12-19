import Header from "@/component/Header";
import Image from "next/image";
import fireStone from '../../public/fireStone.png'
import React from "react";
import BottomNav from "@/component/BottomNav";



export default function Home() {
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
