import { TypeAnimation } from "react-type-animation";


export default function Intro({introRef,className,projectRef,scrollToSection}) {
    return (
        <>
            <div ref={introRef} className={`${className} intro-container`}>
                <p className="intro-text-1">Hi, my name is</p>
                <p className="intro-text-name">May Myat Mon</p>
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        500,
                        `I'm a frontend developer`, // initially rendered starting point
                        1000,
                        `I'm an IT Student`
                    ]}
                    speed={50}
                    style={{
                        fontSize: '3em',
                        color: '#6256df84',
                        fontWeight: 'bolder'
                    }}
                    repeat={Infinity}
                />
                <p className="intro-text-2">I’m a passionate computer science student with a growing focus on React and front-end development. I’m building my skills every day with the goal of becoming a full-stack developer.</p>

                <button className="intro-btn" onClick={() => scrollToSection(projectRef)}>Check out my projects!</button>
            </div>
        </>
    )
}