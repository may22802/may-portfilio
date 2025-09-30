export default function Education({eduRef,className,education_items}) {
    return (
        <>
            <div ref={eduRef} className={`education-container ${className}`}>
                <h1 className="edu-title-text">
                    Education
                    <span>˙✎ᝰ🗒 ༘˚</span>
                </h1>
                <div className="education-items-container">
                    {
                        education_items.map(item => (
                            <div className="education-item" key={item.id}>
                                <h1 className="edu-sub">{item.edu_sub}</h1>
                                <div className="edu">
                                    <p><i className="fa-solid fa-building-columns"></i>{item.edu_school}</p>
                                    <p><i className="fa-solid fa-calendar-days"></i>{item.edu_duration}</p>
                                    <p><i className="fa-solid fa-location-dot"></i>{item.edu_status}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}