"use client";
import Image from "next/image";


import "./VangaImage.css";

export default function VangaImage() {
    return (
        <div className="vanga-block">
            <Image src={'/vanga.svg'}
                        alt={'vanga'}
                        width={783}
                        height={906}
                        className="vanga-image"/>
            <Image src={'/fire.png'}
                    alt={'fireStone'}
                    width={660}
                    height={660}
                    className="vanga-boiler"/>
        </div>
    );
}
