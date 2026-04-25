import { useEffect, useRef } from "react";

// Watches an element. Adds "visible" when it enters the viewport (fade up),
// and removes "visible" when it leaves (fade out). This means the animation
// replays every time the user scrolls past the element.
export function useFadeUp() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Short delay so the browser first renders opacity:0 before we
        // start watching — prevents instant-visible on page load.
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        // Element entered the viewport → fade up
                        el.classList.add("visible");
                    } else {
                        // Element left the viewport → fade out so it can replay
                        el.classList.remove("visible");
                    }
                },
                {
                    threshold: 0.12,
                    // Only trigger when element is at least 60px inside the
                    // viewport — prevents premature firing at the very edge
                    rootMargin: "0px 0px -60px 0px",
                }
            );

            observer.observe(el);
            // Store observer on element so cleanup can disconnect it
            el._fadeObserver = observer;
        }, 100);

        return () => {
            clearTimeout(timer);
            if (el._fadeObserver) el._fadeObserver.disconnect();
        };
    }, []);

    return ref;
}
