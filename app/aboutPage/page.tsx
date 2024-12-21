import Image from "next/image"

export default function About() {

    return (
        <div>

            {/* ABOUT PAGE DESIGING */}
            <div className=" aboutMe">
                <h1 className="heading ">About Me</h1>

                <div className="about1">

                    <div>
                        <Image src={"/images/aboutWeb.jpg"}
                            alt="about"
                            width={300}
                            height={250}>
                        </Image>
                    </div>

                    <div className="content">
                        <h4 >About My projects:</h4>
                        <p>I am currently a student specializing in Artificial Intelligence and Web 3.0, with a strong foundation in various web development technologies.
                            <br /> My learning journey includes gaining proficiency in HTML and CSS, which form the core of web design and layout. Additionally, I am expanding my skills in TypeScript, a superset of JavaScript that enhances the development process by providing static typing and better tooling.
                            <br /> </p>
                    </div>
                </div>


                {/* Parallax */}
                <div className="aboutImage">
                </div>

                <div className="about2">
                    <div className="content">
                        <h4 >About My projects:</h4>
                        <p> As part of my learning, I am also diving into Next.js, a powerful React framework that helps with server-side rendering and building full-stack applications. To further improve the aesthetics and functionality of my web projects, I am honing my skills in Tailwind CSS, a utility-first CSS framework that enables rapid and responsive design.
                            <br /> I am using these technologies to create and develop projects that showcase my growing expertise in both front-end and back-end development, while also keeping up with the latest trends in the world of Artificial Intelligence and Web 3.0.</p>
                    </div>
                    <div>
                        <Image src={"/images/html.jpg"}
                            alt="about"
                            width={300}
                            height={250}>
                        </Image>
                    </div>



                </div>


            </div>


        </div>
    )
}