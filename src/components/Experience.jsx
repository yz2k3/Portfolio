import "./Experience.css";
import { useFadeUp } from "../hooks/useFadeUp";

function FadeSection({ children }) {
    const ref = useFadeUp();
    return <div ref={ref} className="fade-up">{children}</div>;
}

const jobs = [
    {
        role: "Front-End Developer & SEO Affiliate Support",
        place: "YouTube @tulianugaming (90K+ subscribers)",
        period: "09/2025 – Present · Ho Chi Minh, Vietnam",
        bullets: [
            "Main focus: Affiliate content strategy – watch products, provide real-time feedback, suggest video ideas and music choices that fit the content",
            "Secondary: Customize Streamlabs widgets using HTML, CSS, and JavaScript for livestream overlays",
            'Work under mentorship of ex-founder of 1M-sub channel "Chao Ngay Moi"',
        ],
    },
    {
        role: "Teacher Assistant",
        place: "DTP Education Solutions",
        period: "09/2023 – 09/2025 · Ho Chi Minh, Vietnam",
        bullets: [
            "Assisted English teachers in public primary/secondary schools",
            "Prepared teaching materials and managed classroom activities",
        ],
    },
    {
        role: "Volunteer English Teacher",
        place: "Community Education Program",
        period: "03/2022 – 07/2023 · Ho Chi Minh, Vietnam",
        bullets: [
            "Taught basic English to underprivileged children",
            "Created simple learning materials",
        ],
    },
];

export default function Experience() {
    return (
        <section className="section" id="experience">
            <FadeSection>
                <h2 className="section-title">Experience</h2>
            </FadeSection>

            <div className="timeline">
                {jobs.map((job, i) => (
                    <FadeSection key={i}>
                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-body">
                                <p className="job-role">{job.role}</p>
                                <p className="job-place">{job.place}</p>
                                <p className="job-period">{job.period}</p>
                                <ul className="job-bullets">
                                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                                </ul>
                            </div>
                        </div>
                    </FadeSection>
                ))}
            </div>
        </section>
    );
}
