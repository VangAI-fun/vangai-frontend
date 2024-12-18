import Header from "@/component/Header";
import {Pixelify_Sans} from "@next/font/google";
import Image from "next/image";

const pixelifySans = Pixelify_Sans({
    variable: "--font-pixelify-sans",
    subsets: ["latin"],
});


export default function Home() {
    return (
        <div className={`${pixelifySans.className}`}>
        <Header/>
            <div className="mt-24 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold mb-4">HELLO!</h2>
                <p className="text-2xl font-semibold">You&#39;ve entered Vang&#39;s forest.</p>
                <p className="text-2xl font-semibold">Ask me a question, and I&#39;ll draw cards</p>
                <p className="text-2xl font-semibold">to uncover your answer.ç</p>
            </div>

            <Image src={'./vanga.svg'} alt={'vanga'} width={783} height={846} className=""/>
        </div>

    );
}
