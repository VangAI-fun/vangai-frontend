import Image from "next/image";
import bottom from '../../public/bottom.png'
import './BottomNav.css'

export default function BottomNav() {
    return (
        <div className="bottomNav bg-black" >
            <div className="flex mt-16">
                <Image src={bottom}
                       alt={'bottom'}
                       width={600}
                       height={400}
                       className="ml-10"/>
                <div className="mr-10">
                    <h2>LET'S KEEP IN</h2>
                    <h2>TOUCH</h2>
                </div>
            </div>
        </div>
    );
}
