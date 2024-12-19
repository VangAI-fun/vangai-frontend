import Image from "next/image";
import bottom from '../../public/bottom.jpg'
import './BottomNav.css'

export default function BottomNav() {
    return (
        <div className="bottomNav">
            <div className="flex">
                <Image src={bottom}
                       alt={'bottom'}
                       width={0}
                       height={0}
                       sizes="100vw"
                       style={{ width: '45vw', height: '500px', background: 'rgba(0, 0, 0, 0.5)', marginBottom: '20px'}}
                       className="ml-10"/>
                <div className="btm-rght mr-10 bg-[#0a0a0a]">
                    <h2 className="txt">LET'S KEEP IN</h2>
                    <h2 className="txt">TOUCH!</h2>

                    <p className="find">Find us here:</p>
                    <div className="link">
                        <span><a><u>GitHub</u></a></span>
                        <span><a href="https://x.com/VangAI_" target="_blank"><u>Twitter</u></a></span>
                        <span><a><u>Telegram</u></a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
