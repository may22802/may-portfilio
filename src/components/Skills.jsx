export default function Skills({skillRef,className,skills}) {
    // const [isHovered, setIsHovered] = useState(false)
    return (
        <>
            <div ref={skillRef} className={`${className} skills-container`}>
                <h1 className="skill-tilt-text">
                    SKILL
                    <span>S</span>
                    <span>⊹₊˖⋆</span>
                </h1>
                <div className="skills-items-container">
                    {
                        skills.map(skill_item => (
                            <div key={skill_item.id}>
                                <i className={skill_item.skill_class}></i>
                                <p>{skill_item.skill}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}