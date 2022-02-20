module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "CTA-text": "hsl(356, 100%, 66%)",
                "CTA-hover-background": "hsl(355, 100%, 74%)",
                "headings": "hsl(208, 49%, 24%)",
                "white-text": "hsl(0, 0%, 100%)",
                "footer-text": "hsl(240, 2%, 79%)",
                "body": "hsl(207, 13%, 34%)",
                "footer-background": "hsl(240, 10%, 16%)",
                "very-light-red": "hsl(13, 100%, 72%)",
                "light-red": "hsl(353, 100%, 62%)",
                "very-dark-gray-blue": "hsl(237, 17%, 21%)",
                "very-dark-desaturated-blue": "hsl(237, 23%, 32%)"
            },
            fontSize: {
                "body-copy": "16px",
            },
            fontFamily: {
                "Overpass": "Overpass",
                "Ubuntu": "Ubuntu",
            },
            backgroundImage: {
                "pattern-circes": "url('./images/bg-pattern-circles.svg')",
                "pattern-intro-desktop": "url('./images/bg-pattern-intro-desktop.svg')",
                "pattern-intro-mobile": "url('./images/bg-pattern-intro-mobile.svg')",
                "editor-desktop": "url('./images/illustration-editor-desktop.svg')",
                "editor-mobile": "url('./images/illustration-editor-mobile.svg')",
                "laptop-desktop": "url('./images/illustration-laptop-desktop.svg')",
                "laptop-mobile": "url('./images/illustration-laptop-mobile.svg')",
                "phones": "url('./images/illustration-phones.svg')",
            },
            borderRadius: {
                "bottomleft": "100px",
            },
            boxShadow: {
                "menu": "rgba(0, 0, 0, 0.4) 0px 30px 90px"
            }
        },
    },
    plugins: [],
}