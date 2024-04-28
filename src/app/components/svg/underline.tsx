export default function Underline({
    className,
    stroke = "black",
}: {
    className?: string;
    stroke?: string;
}) {
    const underlines = [
        <svg
            width="466"
            height="22"
            viewBox="0 0 466 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            key="underline-svg-1"
        >
            <path
                d="M1.35706 1.32289C14.8657 1.32289 28.3744 1.32289 41.8831 1.32289C53.7175 1.32289 65.5519 1.32289 77.3863 1.32289C92.4245 1.32289 108.321 -0.190628 123.049 3.43481C146.592 9.22999 169.591 17.6571 193.884 19.8165C214.695 21.6663 235.181 21.2025 255.815 17.99C303.266 10.6023 350.852 2.35031 398.969 2.35031C420.954 2.35031 442.761 4.40516 464.724 4.40516"
                stroke={stroke}
                strokeLinecap="round"
            />
        </svg>,
        <svg
            width="462"
            height="34"
            viewBox="0 0 462 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            key="underline-svg-2"
        >
            <path
                d="M0.84729 18.0771C9.86377 18.0771 18.7628 19.6101 27.8458 19.6101C43.9708 19.6101 60.0968 19.6627 76.2216 19.6101C97.7559 19.54 117.88 16.0109 138.821 11.1784C152.492 8.02341 166.261 3.71212 180.213 1.98021C205.119 -1.11156 230.477 1.47945 254.565 7.94202C270.976 12.345 287.008 15.011 304.005 15.011C321.24 15.011 338.638 13.7325 355.831 14.2871C373.274 14.8498 388.941 24.7503 405.612 29.0213C413.717 31.0978 421.697 32.641 430.055 32.641C435.86 32.641 440.049 28.7292 445.045 26.5088C448.326 25.0504 451.299 22.9684 454.626 21.5264C456.674 20.6393 462.99 18.8436 460.759 18.8436"
                stroke={stroke}
                strokeLinecap="round"
            />
        </svg>,
        <svg
            width="471"
            height="21"
            viewBox="0 0 471 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            key="underline-svg-3"
        >
            <path
                d="M0.61377 19.7953C30.2798 19.7953 59.9495 19.6533 89.6151 19.7953C131.909 19.9976 173.983 21.9976 216.176 17.6661C245.805 14.6243 274.793 6.51615 304.411 2.93186C325.849 0.337455 346.62 0.333594 368.032 3.27253C393.938 6.82823 420.151 12.1301 446.344 12.1301C450.473 12.1301 454.445 11.3636 458.609 11.3636C462.224 11.3636 466.348 11.9471 469.723 10.597"
                stroke={stroke}
                strokeLinecap="round"
            />
        </svg>,
        <svg
            width="428"
            height="12"
            viewBox="0 0 428 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            key="underline-svg-4"
        >
            <path
                d="M1.41113 0.759766C36.1316 0.759766 70.8521 0.759766 105.573 0.759766C131.057 0.759766 156.521 1.52628 182.011 1.52628C208.234 1.52628 233.842 2.11467 259.728 6.72158C304.058 14.6109 349.982 10.3663 394.55 7.23259C404.47 6.53511 414.458 5.35888 424.402 5.35888C426.204 5.35888 427.857 4.67962 425.296 3.82584"
                stroke={stroke}
                strokeLinecap="round"
            />
        </svg>,
    ];
    const randomUnderline =
        underlines[Math.floor(Math.random() * underlines.length)];
    return randomUnderline;
}