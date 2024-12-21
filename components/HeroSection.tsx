import Link from "next/link"

const heroSection = () => {

    return (
        <div>

            {/*               NAVBAR                  */}

                <div className="header heroSection">
                    <h1>Asfaa Khan</h1>
                    <p>Web Developer</p>
                    <Link href="/projectPage "className="btn" >View Projects</Link>
                </div>


            
        </div>
    )
}
export default heroSection