import React from "react"
export default function Nav({introRef,aboutRef, eduRef,skillRef,projectRef,contactRef,scrollToSection}) {

    const [open, setOpen] = React.useState(false)

    return (
        <>
            <nav className={open ? "nav-border" : ""}> 
                <p onClick={() => scrollToSection(introRef)} className="nav-name">MAY</p>
                <div className={open ? "nav-lists active" : "nav-lists"}>
                <div className="nav-items">
                    <button onClick={() => scrollToSection(aboutRef)}>ABOUT</button>
                    <button onClick={() => scrollToSection(eduRef)}>EDUCATION</button>
                    <button onClick={() => scrollToSection(skillRef)}>SKILLS</button>
                    <button onClick={() => scrollToSection(projectRef)}>PROJECTS</button>
                    <button onClick={() => scrollToSection(contactRef)}>CONTACTS</button>
                </div>
                <ul className= "nav-socials">
                    <li><a href="mailto:maymyatmon22802@gmail.com"><i className="fa-regular fa-envelope"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/may-myat-mon-580a4225a/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/may22802?tab=repositories"><i className="fa-brands fa-github"></i></a></li>
                </ul>
                </div>
                <div className="hamburger-menu">
                    <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={() => setOpen(!open)}></i>
                </div>
            </nav>

            
        </>
    )
}