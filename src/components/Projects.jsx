import "./Projects.css";
import { useFadeUp } from "../hooks/useFadeUp";

function FadeSection({ children }) {
    const ref = useFadeUp();
    return <div ref={ref} className="fade-up">{children}</div>;
}

const projects = [
    {
        name: "Track-Board",
        stack: "JavaScript · CSS · Vercel",
        desc: "Built a real-time task tracking board with drag-and-drop between columns using React state — deployed on Vercel.Features: add, edit, delete tasks with modal UI, localStorage persistence, and priority/ tag labeling.",
                
        live: "https://track-board-project.vercel.app",
        repo: "https://github.com/yz2k3/Track-Board-Project",
    },
    {
        name: "E-Commerce (Perfume)",
        stack: "React · CSS · Vercel",
        desc: "Product listing page with shopping cart, category filtering, and responsive UI — deployed on Vercel.",
        live: "https://project-perfume-ga73.vercel.app",
        repo: "https://github.com/yz2k3/Project-Perfume",
    },
    {
        name: "Portfolio",
        stack: "React · CSS",
        desc: "Personal portfolio showcasing frontend projects, live demos, and GitHub links.",
        live: "https://portfolio-inky-two-vx08c87vfr.vercel.app",
        repo: "https://github.com/yz2k3/Portfolio",
    },
    {
        name: "YouTube Growth Experiment",
        stack: "AI · SEO · Personal Project",
        desc: "Grew a personal YouTube channels to ~200,000 views in 3 months using AI workflows and SEO. (09/2024 – 11/2024)",
        live: null,
        repo: null,
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <FadeSection>
                <h2 className="section-title">Projects</h2>
            </FadeSection>

            <div className="projects-grid">
                {projects.map((p, i) => (
                    <FadeSection key={i}>
                        <div className="project-card">
                            <p className="project-stack">{p.stack}</p>
                            <h3 className="project-name">{p.name}</h3>
                            <p className="project-desc">{p.desc}</p>
                            <div className="project-links">
                                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="link-pill">Live ↗</a>}
                                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="link-pill link-pill-outline">GitHub ↗</a>}
                            </div>
                        </div>
                    </FadeSection>
                ))}
            </div>
        </section>
    );
}
