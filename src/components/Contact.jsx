export default function Contact({ contactRef, className }) {
    return (
        <>
            <div ref={contactRef} className={`${className} contact-container`}>
                <h1 className="contact-tilt-text">
                    Co
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    ct
                    <span>˗ˏˋ✉︎ˎˊ˗</span>
                </h1>
                <div>
                    <p>
                        Looking for a motivated entry-level developer? I’d be happy to talk about how I can bring value to your team. Drop me a message and I’ll get back to you as soon as I can.
                    </p>
                    <a target="_blank" href="https://www.linkedin.com/in/may-myat-mon-580a4225a/">Reach me on LinkedIn</a>
                </div>
            </div>
        </>
    )
}