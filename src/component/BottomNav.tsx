import Image from "next/image";
import bottom from '../../public/bottom.jpg'
import './BottomNav.css'

export default function BottomNav() {
    return (
        <div className="bottomNav">
            <div className="wrapper">
                <div className="bottomNav__logo">
                    <Image src={bottom}
                        alt={'bottom'}
                        width={655}
                        height={345}
                        className="bottomNav__image"/>
                    <div className="nav-logo">
                        <span className="nav-logo__decor">■</span>
                        <span className="nav-logo__text"> AI Vanga</span>
                    </div>
                </div>
                <div className="bottomNav__info">
                    <h2 className="bottomNav__title">LET'S KEEP IN</h2>
                    <h2 className="bottomNav__title last">TOUCH!</h2>

                    <p className="bottomNav__text">Find us here:</p>
                    <div className="bottomNav__links">
                        <a className="bottomNav__link" href="https://github.com/VangAI-fun" target="_blank">GitHub</a>
                        <a className="bottomNav__link" href="https://x.com/VangAI_" target="_blank">Twitter</a>
                        <a className="bottomNav__link" href="https://x.com/VangAI_" target="_blank">Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
