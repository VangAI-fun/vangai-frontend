"use client";

import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <h2 className="header__title">HELLO!</h2>
            <p className="header__text">You&#39;ve entered Vang&#39;s forest.</p>
            <p className="header__text">Ask me a question, and I&#39;ll draw cards</p>
            <p className="header__text">to uncover your answer.</p>
        </div>
    );
}
