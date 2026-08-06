/* =========================================================
   JEWMAICA
   Main JavaScript
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNavigation =
    document.getElementById("mainNavigation");


if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            mainNavigation.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const navigationLinks =
        mainNavigation.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNavigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   GREGORIAN DATE
========================================================= */

const gregorianDate =
    document.getElementById("gregorianDate");


if (gregorianDate) {

    const today =
        new Date();


    const formattedDate =
        today.toLocaleDateString(
            "en-JM",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );


    gregorianDate.textContent =
        formattedDate;

}


/* =========================================================
   JEWISH CALENDAR
   Hebcal API
========================================================= */

async function loadJewishCalendar() {

    const hebrewDate =
        document.getElementById("hebrewDate");

    const parasha =
        document.getElementById("parasha");


    if (!hebrewDate || !parasha) {

        return;

    }


    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        today.getMonth() + 1;


    const day =
        today.getDate();


    const apiURL =
        `https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`;


    try {

        const response =
            await fetch(apiURL);


        if (!response.ok) {

            throw new Error(
                "Calendar request failed"
            );

        }


        const data =
            await response.json();


        if (data.hebrew) {

            hebrewDate.textContent =
                data.hebrew;

        }


        /*
         * The current Hebcal converter response
         * does not always provide Parashat HaShavua.
         *
         * We therefore leave the field ready for
         * the full calendar system that will be
         * installed in a later stage.
         */

        parasha.textContent =
            "Parashat HaShavua — coming soon";


    }

    catch (error) {

        console.log(
            "Jewish calendar could not be loaded:",
            error
        );


        hebrewDate.textContent =
            "Calendar loading soon";


        parasha.textContent =
            "Parashat HaShavua — coming soon";

    }

}


loadJewishCalendar();


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (anchor) {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetID =
                this.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetID);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});
