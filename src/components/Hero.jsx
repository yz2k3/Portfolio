import "./Hero.css";
import Typewriter from "./Typewriter";
import { TechBadge, HtmlIcon, CssIcon, JsIcon, ReactIcon } from "./TechIcons";

export default function Hero() {
    return (
        <section className="hero" id="about">
            <p className="hero-greeting">Hello</p>

            <h1 className="hero-title">
                <Typewriter phrases={["I am Yanis Nguyen.", "I am Front-End Developer."]} />
            </h1>

            <p className="hero-sub">
                Building responsive, clean interfaces from Ho Chi Minh City, Vietnam.
                Remote-ready/Time Zone Friendly&amp; always learning.
            </p>

            {/* Tech stack icons — hover each one to see its name */}
            <div className="tech-icons-row">
                <TechBadge icon={HtmlIcon} label="HTML5" />
                <TechBadge icon={CssIcon} label="CSS3" />
                <TechBadge icon={JsIcon} label="JavaScript" />
                <TechBadge icon={ReactIcon} label="React" />
            </div>

            <div className="hero-cta">
                <a href="#projects" className="btn-primary">See my work</a>
                <a href="mailto:micaeankun8903@gmail.com" className="btn-outline">Get in touch</a>
            </div>
        </section>
    );
}
