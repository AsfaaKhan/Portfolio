import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div>
            
                <div className="container contactPage">

                    <div className="content">
                        <div className="links">
                            <BsGithub className="github" size={50}  />
                            <Link href={"https://github.com/AsfaaKhan"}>Github</Link>
                        </div>
                        <div className="links">
                            <BsLinkedin className="linkedin" size={50} />
                            <Link href={"https://www.linkedin.com/in/asfaa-khan-4b80a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>Linkedin</Link>
                        </div>
                        <div className="links">
                            <BsTwitter className="twitter" size={50} />
                            <Link href={"https://x.com/KhanAsfaa?s=08"}>Twitter</Link>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}