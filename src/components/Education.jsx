import "./Education.css";
import { useFadeUp } from "../hooks/useFadeUp";

function FadeSection({ children }) {
    const ref = useFadeUp();
    return <div ref={ref} className="fade-up">{children}</div>;
}

export default function Education() {
    return (
        <section className="section" id="education">
            <FadeSection>
                <h2 className="section-title">Education</h2>
                <div className="edu-card">
                    <p className="job-role">Associate Degree of Computer Science</p>
                    <p className="job-place">University of the People</p>
                    <p className="job-period">12/2022 – 04/2026 · GPA: 3.35 / 4.00</p>
                </div>
                <div className="edu-langs">
                    <span className="badge">English (Conversational)</span>
                    <span className="badge">Vietnamese (Native)</span>
                </div>
            </FadeSection>
        </section>
    );
}
