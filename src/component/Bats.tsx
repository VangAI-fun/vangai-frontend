"use client";
import Image from "next/image";

import "./Bats.css";

export default function Bats() {
    return (
        <div className="bats-block">
            <div className="bat-wrapper bat-wrapper-1">
                <Image src={'/bat-1.png'}
                        alt={'bat'}
                        width={167}
                        height={126}
                        className="bat bat-1"/>
            </div>
            <div className="bat-wrapper bat-wrapper-2">
                <Image src={'/bat-2.png'}
                        alt={'bat'}
                        width={127}
                        height={96}
                        className="bat bat-2"/>
            </div>
            <div className="bat-wrapper bat-wrapper-3">
                <Image src={'/bat-3.png'}
                        alt={'bat'}
                        width={128}
                        height={96}
                        className="bat bat-3"/>
            </div>
        </div>
    );
}
