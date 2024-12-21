import Image from "next/image"
import Link from "next/link"
export default function Projects() {
    return (
        <div>
            <section className="container ">
                <h1 className="heading">Explore My Projects</h1>
                <div className="projectSec">
                    {/* BOX1 */}
                    <div className="projectImg">
                        <div className="box box1">
                            <Image
                                src={"/images/project3.png"}
                                alt="project1"
                                width={300}
                                height={150}
                                className="image"></Image>
                            <div className="middle">
                                <Link href="https://portfolio-website-omega-taupe-58.vercel.app/" target="
                    _blank" className="webLink">VIEW</Link>
                            </div>
                        </div>
                        <div className="box box2">
                            <Image
                                src={"/images/project4.png"}
                                alt="project2"
                                width={300}
                                height={150}
                                className="image"></Image>
                            <div className="middle">
                                <Link href="https://portfolio-website-omega-taupe-58.vercel.app/" target="
                    _blank" className="webLink">VIEW</Link>
                            </div>

                        </div>
                    </div>

                     {/* BOX2 */}
                    <div className="projectImg" >
                <div className="box box3"><Image 
                    src={"/images/project5.png"}
                    alt="project3"
                    width={300}
                    height={150}
                    className="image"></Image>
                    <div className="middle">
                    <Link href="https://portfolio-website-omega-taupe-58.vercel.app/"  target="
                    _blank" className="webLink">VIEW</Link></div>
                    </div>
                <div className="box box4"><Image 
                    src={"/images/project6.png"}
                    alt="project4"
                    width={300}
                    height={150}
                    className="image"></Image>
                    <div className="middle">
                    <Link href="https://portfolio-website-omega-taupe-58.vercel.app/"  target="
                    _blank" className="webLink">VIEW</Link></div></div>
                    </div>

                    <div className="projectBtn">
                        <Link href=" /projectPage"className="btn">More Projects</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}