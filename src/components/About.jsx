import my_img from "../assets/profile-img.jpg"
import curved_arr from "../assets/curve-arrow.png"
import resume from "../assets/MayMyatMon_Developer_Resume.pdf"

export default function About({aboutRef,className}) {
    return (
        <>
            <div ref={aboutRef} className={`about-container ${className}`}>

                <div className="about-text-container">
                    <h1 className="about-title-text">
                        About
                        <span>˙✧˖｡⋆</span>
                    </h1>
                    <div className="about-text">
                        <p>
                            It's May Myat Mon! A CS student who’s passionate about learning and building. Right now, I’m focused on React and front-end development, but my long-term goal is to become a full-stack developer. I believe the best way to learn is by doing, so I love working on small projects that challenge me to explore new concepts and push my coding skills further. Beyond coding, I’m curious, adaptable, and eager to keep improving.
                        </p>
                        <img className="arrow-svg" src={curved_arr} alt="" />
                        <a href={resume} download="Resume_MayMyatMon.pdf"><span><i className="fa-solid fa-download"></i></span>Check out my resume</a>
                    </div>
                </div>

                <div className="about-img-container">
                    <img className="my-img" src={my_img} alt="" />
                    <p className="img-text-name">May Myat Mon <span>She/23yr</span></p>
                    <p className="img-text-loc"><i className="fa-solid fa-location-dot"></i>Mandalay, Myanmar</p>
                    <p className="img-text-mail"><i className="fa-solid fa-envelope"></i>maymyatmon22802@gmail.com</p>
                </div>
            </div>
        </>
    )
}