import "./Summary.css";
import { useFadeUp } from "../hooks/useFadeUp";

function FadeSection({ children }) {
    const ref = useFadeUp();
    return <div ref={ref} className="fade-up">{children}</div>;
}

const skills = [
    { label: "Languages & Frameworks", items: "HTML · CSS · JavaScript · React" },
    { label: "Tools & Platforms", items: "Git · VS Code · Streamlabs · Vercel · YouTube Studio" },
    { label: "Soft Skills", items: "Problem Solving · Communication · Creative Direction · Affiliate Research" },
];

export default function Summary() {
    return (
        <section className="section" id="summary">
            <FadeSection>
                <h2 className="section-title">About Me</h2>
                <p className="section-text">
                    Self-taught front-end developer skilled in React, JavaScript, CSS, and Git.
                    I've built and deployed three live projects including a team workflow dashboard and an e-commerce site.
                    Through supporting a 90K+ subscriber YouTube channel, I've learned to simplify complex work – breaking tasks down into small, manageable pieces.
                    I apply UX/UI thinking and AI-assisted workflows to build practical interfaces. I'm still learning and want to grow step by step in a professional environment.
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
