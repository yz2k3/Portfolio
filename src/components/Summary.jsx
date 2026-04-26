import "./Summary.css";
import { useFadeUp } from "../hooks/useFadeUp";

function FadeSection({ children }) {
    const ref = useFadeUp();
    return <div ref={ref} className="fade-up">{children}</div>;
}

const skills = [
    { label: "Languages & Frameworks", items: "HTML · CSS · JavaScript · React" },
    { label: "Tools & Platforms", items: "Git · VS Code · Streamlabs · Vercel · YouTube Studio" },
    {
        label: "Soft Skills", items: " Multi-tasking · Problem Solving · Communication · Creative Direction · Affiliate Research · Task Decomposition"
    },
];

export default function Summary() {
    return (
        <section className="section" id="summary">
            <FadeSection>
                <h2 className="section-title">About Me</h2>
                <p className="section-text">
                    Self-taught Front-End Developer with skills in React, JavaScript, CSS, and Git.
                    Built deployed projects including workflow dashboard, e-commerce website, and portfolio site.
                    Real-world experience supporting a 90K+ subscriber YouTube channel by improving workflows, SEO research, and content systems.
                    Eager to grow in a professional development environment.
                </p>
                <div className="skills-grid">
                    {skills.map((s) => (
                        <div key={s.label} className="skill-card">
                            <p className="skill-label">{s.label}</p>
                            <p className="skill-items">{s.items}</p>
                        </div>
                    ))}
                </div>
            </FadeSection>
        </section>
    );
}
