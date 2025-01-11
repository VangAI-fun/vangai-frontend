"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./Nav.css";

export default function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <span className="nav-logo__decor">■</span>
                <span className="nav-logo__text"> AI Vanga</span>
            </div>
            <WalletMultiButton />
        </div>
    );
}
