import { useState, useEffect } from "react";
import "./Typewriter.css";

export default function Typewriter({ phrases }) {
    const [displayed, setDisplayed] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const speed = isDeleting ? 50 : 90;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                const next = currentPhrase.slice(0, displayed.length + 1);
                setDisplayed(next);
                if (next === currentPhrase) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                const next = displayed.slice(0, displayed.length - 1);
                setDisplayed(next);
                if (next === "") {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayed, isDeleting, phraseIndex, phrases]);

    return (
        <span>
            {displayed}
            <span className="cursor">|</span>
        </span>
    );
}
