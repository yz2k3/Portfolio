// SVG icons for each technology.
// Each icon is drawn with pure SVG shapes — no image files needed.

export function HtmlIcon({ size = 38 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 452 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5">
            <path d="M41 0L82 460L226 500L370 460L411 0H41Z" fill="#E44D26" />
            <path d="M226 464L341 433L370 460L226 500V464Z" fill="#F16529" />
            <path d="M226 113H94L100 176H226V113Z" fill="#EBEBEB" />
            <path d="M226 297H168L164 255H226V193H99L113 349H226V297Z" fill="#EBEBEB" />
            <path d="M226 113V176H356L350 240H226V297H344L332 421L226 451V392L310 370L318 280H226V193H359L370 113H226Z" fill="white" />
        </svg>
    );
}

export function CssIcon({ size = 38 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 452 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3">
            <path d="M41 0L82 460L226 500L370 460L411 0H41Z" fill="#1172B8" />
            <path d="M226 464L341 433L370 460L226 500V464Z" fill="#33AADD" />
            <path d="M226 113H94L100 176H226V113Z" fill="#EBEBEB" />
            <path d="M152 255L156 297H226V240H163L159 193H226V176H100L106 240H226V255H152Z" fill="#EBEBEB" />
            <path d="M226 297V240H289L283 316L226 333V297Z" fill="white" />
            <path d="M226 113V176H356L350 240H226V297H283L268 355L226 367V421L332 391L344 255H226V193H359L370 113H226Z" fill="white" />
        </svg>
    );
}

export function JsIcon({ size = 38 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 630 630" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript">
            <rect width="630" height="630" fill="#F7DF1E" />
            <path d="M423 492C434 511 449 525 476 525C499 525 514 513 514 497C514 478 499 472 474 461L461 456C424 440 399 420 399 382C399 347 427 321 470 321C501 321 524 333 540 359L506 381C498 367 489 362 470 362C451 362 439 374 439 382C439 393 447 397 470 408L483 413C527 432 553 451 553 491C553 534 518 557 472 557C427 557 398 534 384 505L423 492Z" fill="#323330" />
            <path d="M236 496C243 509 250 520 266 520C281 520 291 514 291 491V323H336V492C336 538 309 558 268 558C231 558 209 537 198 512L236 496Z" fill="#323330" />
        </svg>
    );
}

export function ReactIcon({ size = 38 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React">
            <circle cx="50" cy="50" r="50" fill="#20232A" />
            <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="3" fill="none" />
            <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(120 50 50)" />
            <circle cx="50" cy="50" r="5" fill="#61DAFB" />
        </svg>
    );
}

// Wrapper: shows the icon + a small text label below
export function TechBadge({ icon: Icon, label }) {
    return (
        <div className="tech-badge" title={label}>
            <Icon size={40} />
            <span className="tech-badge-label">{label}</span>
        </div>
    );
}
