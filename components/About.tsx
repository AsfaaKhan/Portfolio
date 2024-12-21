import Link from "next/link"
import Image from "next/image"
export default function AboutSection() {
    return (
        <div className="container" >
            <h1 className='heading'>About</h1>
            <div className="aboutSec ">
                <div className="text">
                    <h3>Hey, What Do You Want to Know?</h3>
                    <p>I create cover pages, professional CVs, websites, and portfolios using <span>HTML</span> and <span>CSS</span> . I additionally acquired knowledge of how to build a website using <span>Next.JS</span>. I additionally concentrate on <span>graphic design</span> . </p>
                    <div className="links">
                        <Link href="/aboutPage" className="aboutBtn">
                            <i className="fa-regular fa-address-card">About</i></Link><br></br>
                        <Link href="/projectPage" className="aboutBtn"><i className="fa-solid fa-code-fork">Projects</i></Link><br></br>
                        <Link href="/contactPage" className="aboutBtn"><i className="fa-brands fa-searchengin">Contact</i>
                        </Link>
                    </div>
                </div>

                <div>
                    <Image
                        src={"/images/about.jpg"}
                        alt="about pic"
                        width={300}
                        height={250}
                        className="aboutImg">
                    </Image>
                </div>
            </div>
        </div>
    )
}