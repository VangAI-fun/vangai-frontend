"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./Header.css";

export default function Header() {
    return (
        <div className={`header-container`}>
            <div className="header-content">
                <span className="text-vanga">■ AI Vanga</span>
                <WalletMultiButton style={{
                    backgroundColor: "#3F45524D",
                    border: "2px",
                    fontFamily : "PixelifySans"
                }} />
            </div>
        </div>
    );
}
