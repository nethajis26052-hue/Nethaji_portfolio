/* =========================================
   NETHAJI DATA ANALYST PORTFOLIO
   SCRIPT.JS
========================================= */


/* =========================================
   1. PROJECT FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");


        const selectedFilter =
            button.getAttribute("data-filter");


        projectCards.forEach(card => {

            const projectType =
                card.getAttribute("data-type");


            if (
                selectedFilter === "all" ||
                projectType.includes(selectedFilter)
            ) {

                card.classList.remove("hidden");

                card.style.opacity = "0";
                card.style.transform = "translateY(15px)";


                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, 50);

            }

            else {

                card.classList.add("hidden");

            }

        });

    });

});



/* =========================================
   2. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .analytics-card"
);


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



/* =========================================
   3. SKILL BAR ANIMATION
========================================= */

const progressBars =
    document.querySelectorAll(".progress div");


const progressObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const originalWidth =
                        entry.target.style.width;


                    entry.target.style.width = "0";


                    setTimeout(() => {

                        entry.target.style.width =
                            originalWidth;

                    }, 200);


                    progressObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.5
        }

    );


progressBars.forEach(bar => {

    progressObserver.observe(bar);

});



/* =========================================
   4. NUMBER COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll(".kpi strong");


function animateCounter(element) {

    const value =
        element.textContent.trim();


    const number =
        parseInt(value);


    if (isNaN(number)) return;


    const suffix =
        value.replace(number.toString(), "");


    let current = 0;


    const duration = 1000;

    const steps = 40;

    const increment =
        number / steps;


    let step = 0;


    const counter =
        setInterval(() => {

            step++;

            current += increment;


            if (step >= steps) {

                current = number;

                clearInterval(counter);

            }


            element.textContent =
                Math.floor(current) + suffix;

        }, duration / steps);

}


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(
                        entry.target
                    );

                    counterObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.7
        }

    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});



/* =========================================
   5. SMOOTH NAVIGATION
========================================= */

const navLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) {

            return;

        }


        const target =
            document.querySelector(
                targetId
            );


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});



/* =========================================
   6. MOUSE PARALLAX EFFECT
========================================= */

const analyticsCard =
    document.querySelector(
        ".analytics-card"
    );


if (analyticsCard) {

    analyticsCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                analyticsCard.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -3;


            const rotateY =
                ((x - centerX) /
                    centerX) * 3;


            analyticsCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    analyticsCard.addEventListener(
        "mouseleave",
        () => {

            analyticsCard.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

        }
    );

}



/* =========================================
   7. CHART BAR HOVER
========================================= */

const chartBars =
    document.querySelectorAll(
        ".bar"
    );


chartBars.forEach(bar => {

    bar.addEventListener(
        "mouseenter",
        () => {

            chartBars.forEach(otherBar => {

                if (otherBar !== bar) {

                    otherBar.style.opacity =
                        "0.35";

                }

            });

        }
    );


    bar.addEventListener(
        "mouseleave",
        () => {

            chartBars.forEach(otherBar => {

                otherBar.style.opacity =
                    "1";

            });

        }
    );

});



/* =========================================
   8. PROJECT CARD HOVER
========================================= */

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.zIndex = "5";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.zIndex = "1";

        }
    );

});



/* =========================================
   9. CURRENT YEAR
========================================= */

const footerYear =
    document.querySelector(
        "footer span:first-child"
    );


if (footerYear) {

    const currentYear =
        new Date().getFullYear();


    footerYear.textContent =
        `© ${currentYear} Nethaji S`;

}



/* =========================================
   10. CONSOLE MESSAGE
========================================= */

console.log(
    "%c NETHAJI S | DATA ANALYST ",
    "background:#8cff66;color:#071007;padding:8px;font-weight:bold;"
);

console.log(
    "Portfolio loaded successfully 🚀"
);
