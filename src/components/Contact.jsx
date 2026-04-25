import "./Contact.css";
import { useFadeUp } from "../hooks/useFadeUp";

function FadeSection({ children }) {
    const ref = useFadeUp();
    return <div ref={ref} className="fade-up">{children}</div>;
}

export default function Contact() {
    return (
        <section className="section" id="contact">
            <FadeSection>
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-text">
                    I'm open to front-end roles, freelance projects, and collaborations.
                    Feel free to reach out!
                </p>
                <div className="contact-links">
                    <a href="mailto:micaeankun8903@gmail.com" className="btn-primary">
                        micaeankun8903@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/hoang-thien-an-nguyen-272574199/" target="_blank" rel="noreferrer" className="btn-outline">
                        LinkedIn ↗
                    </a>
                    <a href="https://github.com/yz2k3" target="_blank" rel="noreferrer" className="btn-outline">
                        GitHub ↗
                    </a>
                </div>
            </FadeSection>
        </section>
    );
}
