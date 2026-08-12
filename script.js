/*==========================================================
JEWMAICA
The Living Archive of Jewish Jamaica

Version : 0.1.0
File    : script.js
==========================================================*/

"use strict";


/*==========================================================*
* PARASHAH DATA
*==========================================================*/

const parashot = {

    /*------------------------------------------------------*
    * DEVARIM
    *------------------------------------------------------*/

    "devarim": {
        title: "DEVARIM",
        subtitle: "Let's Make Justice Blind",
        pdf: "../PDFs/Dvrei Torah/Parasha Devarim - Let's Make Justice Blind.pdf",
        video: "LJnMRYc8rhc"
    },


    /*------------------------------------------------------*
    * VAETCHANAN
    *------------------------------------------------------*/

    "vaetchanan": {
        title: "VAETCHANAN",
        subtitle: "Teshuva and Redemption",
        pdf: "../PDFs/Dvrei Torah/Parasha Va'Etchanan-Teshuva and Redemption.pdf",
        video: "VsQl2eEwQdY"
    },


    /*------------------------------------------------------*
    * EIKEV
    *------------------------------------------------------*/

    "eikev": {
        title: "EIKEV",
        subtitle: "Remaining Humble Amidst Assured Blessings",
        pdf: "../PDFs/Dvrei Torah/Parasha Eikev-Remaining Humble Amidst Assured Blessings.pdf",
        video: "G0SV5wJNXK8"
    },


    /*------------------------------------------------------*
    * RE'EH
    * VIDEO ONLY
    *------------------------------------------------------*/

    "reeh": {
        title: "RE'EH",
        subtitle: "",
        pdf: "",
        video: "30Rsmkp0Kik"
    },


    /*------------------------------------------------------*
    * SHOFETIM
    * VIDEO ONLY
    *------------------------------------------------------*/

    "shofetim": {
        title: "SHOFETIM",
        subtitle: "",
        pdf: "",
        video: "gWIhrijkukc"
    },


    /*------------------------------------------------------*
    * KI TETZE
    * VIDEO ONLY
    *------------------------------------------------------*/

    "ki-teitzei": {
        title: "KI TETZE",
        subtitle: "",
        pdf: "",
        video: "U0l-wBKzNZ4"
    },


    /*------------------------------------------------------*
    * KI TABO
    *------------------------------------------------------*/

    "ki-tavo": {
        title: "KI TABO",
        subtitle: "The Continued Hope in Redemption",
        pdf: "../PDFs/Dvrei Torah/Parashat Ki Tavo – the Continued Hope in Redemption.pdf",
        video: "0BG3AC5iqrk"
    },


    /*------------------------------------------------------*
    * NITZAVIM
    *------------------------------------------------------*/

    "nitzavim": {
        title: "NITZAVIM",
        subtitle: "Returning to Ways of God",
        pdf: "../PDFs/Dvrei Torah/Parasha-Nitzavim-Returning-to-Ways-of-God.pdf",
        video: "pXjwO0QQ0KI"
    },


    /*------------------------------------------------------*
    * VAYEILECH
    *------------------------------------------------------*/

    "vayeilech": {
        title: "VA YEILECH",
        subtitle: "Shuvah Yisrael-Return Israel",
        pdf: "../PDFs/Dvrei Torah/Parasha Vayeilech – Shuvah Yisrael-Return Israel.pdf",
        video: "pXjwO0QQ0KI"
    },


    /*------------------------------------------------------*
    * HAAZINU
    *------------------------------------------------------*/

    "haazinu": {
        title: "HAAZINU",
        subtitle: "Our Redemption foretold",
        pdf: "../PDFs/Dvrei Torah/Parasha HaAzinu – Our Redemption foretold.pdf",
        video: "tSrzyo519GU"
    },


    /*------------------------------------------------------*
    * VEZOT HABERAKHAH
    *------------------------------------------------------*/

    "vezot-haberakhah": {
        title: "VEZOT HABERAKHAH",
        subtitle: "Sucession Planning",
        pdf: "../PDFs/Dvrei Torah/Parasha Vezot Haberakhah - Sucession Planning.pdf",
        video: ""
    }

};


/*==========================================================*
* PAGE LOADED
*==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Jewmaica Version 0.1 Loaded");

    initialiseParashahPage();

    initialiseNavigation();

    initialiseHeroSlider();

    initialiseCards();

    initialiseSearch();

    initialiseScrollEffects();

});


/*==========================================================*
* PARASHAH PAGE
*
* Reads:
*
* ?parasha=nitzavim
* ?parasha=eikev
* ?parasha=reeh
*
* and changes the page accordingly.
*==========================================================*/

function initialiseParashahPage() {

    /*
     * Make sure this code only runs on the
     * Parashat HaShavua / Dvrei Torah page.
     */

    const parashaTitle =
        document.getElementById("parashaTitle");

    const parashaSubtitle =
        document.getElementById("parashaSubtitle");

    const breadcrumbParasha =
        document.getElementById("breadcrumbParasha");

    const commentaryDescription =
        document.getElementById("commentaryDescription");

    const pdfTitle =
        document.getElementById("pdfTitle");

    const pdfSubtitle =
        document.getElementById("pdfSubtitle");

    const pdfButton =
        document.getElementById("pdfButton");

    const youtubeVideo =
        document.getElementById("youtubeVideo");

    const videoParashaName =
        document.getElementById("videoParashaName");


    /*
     * If these elements do not exist,
     * this is not the Parashah page.
     */

    if (!parashaTitle || !youtubeVideo) {
        return;
    }


    /*------------------------------------------------------*
     * READ PARASHAH FROM URL
     *------------------------------------------------------*/

    const urlParams =
        new URLSearchParams(window.location.search);

    let selectedParasha =
        urlParams.get("parasha");


    /*
     * If no Parashah is specified,
     * Nitzavim remains the default.
     */

    if (!selectedParasha) {
        selectedParasha = "nitzavim";
    }


    /*
     * If an unknown Parashah was entered,
     * return to Nitzavim rather than breaking the page.
     */

    if (!parashot[selectedParasha]) {
        selectedParasha = "nitzavim";
    }


    const data =
        parashot[selectedParasha];


    /*------------------------------------------------------*
     * UPDATE HERO
     *------------------------------------------------------*/

    parashaTitle.textContent =
        data.title;

    parashaSubtitle.textContent =
        data.subtitle;


    /*------------------------------------------------------*
     * UPDATE BREADCRUMB
     *------------------------------------------------------*/

    if (breadcrumbParasha) {

        breadcrumbParasha.textContent =
            formatParashaName(selectedParasha);

    }


    /*------------------------------------------------------*
     * UPDATE COMMENTARY DESCRIPTION
     *------------------------------------------------------*/

    if (commentaryDescription) {

        if (data.pdf) {

            commentaryDescription.textContent =
                "Written teachings and reflections on Parashat " +
                formatParashaName(selectedParasha) +
                ".";

        } else {

            commentaryDescription.textContent =
                "Torah resources for Parashat " +
                formatParashaName(selectedParasha) +
                ".";

        }

    }


    /*------------------------------------------------------*
     * UPDATE PDF INFORMATION
     *------------------------------------------------------*/

    if (data.pdf) {

        if (pdfTitle) {

            pdfTitle.textContent =
                "Parashat " +
                formatParashaName(selectedParasha);

        }


        if (pdfSubtitle) {

            pdfSubtitle.textContent =
                data.subtitle;

        }


        if (pdfButton) {

            pdfButton.href =
                data.pdf;

            pdfButton.textContent =
                "📖 OPEN " +
                data.title +
                " PDF";

            pdfButton.style.display =
                "block";

        }

    } else {

        /*
         * This is a VIDEO-ONLY Parashah.
         */

        if (pdfTitle) {

            pdfTitle.textContent =
                "No Written Commentary Yet";

        }


        if (pdfSubtitle) {

            pdfSubtitle.textContent =
                "Video Torah reading available below.";

        }


        if (pdfButton) {

            pdfButton.style.display =
                "none";

        }

    }


    /*------------------------------------------------------*
     * UPDATE YOUTUBE VIDEO
     *------------------------------------------------------*/

    if (data.video) {

        youtubeVideo.src =
            "https://www.youtube.com/embed/" +
            data.video;

        youtubeVideo.title =
            "Torah Reading - " +
            data.title;

        youtubeVideo.style.display =
            "block";

    } else {

        /*
         * No YouTube video available.
         */

        youtubeVideo.removeAttribute("src");

        youtubeVideo.style.display =
            "none";

    }


    /*------------------------------------------------------*
     * UPDATE VIDEO DESCRIPTION
     *------------------------------------------------------*/

    if (videoParashaName) {

        videoParashaName.textContent =
            "Parashat " +
            formatParashaName(selectedParasha);

    }


    /*------------------------------------------------------*
     * HIGHLIGHT CURRENT PARASHAH
     *------------------------------------------------------*/

    const parashaLinks =
        document.querySelectorAll(
            "#parashaList a"
        );


    parashaLinks.forEach(link => {

        link.classList.remove("selected");

        if (
            link.dataset.parasha ===
            selectedParasha
        ) {

            link.classList.add("selected");

        }

    });

}


/*==========================================================*
* FORMAT PARASHAH NAME
*
* Used for breadcrumb and descriptive text.
*==========================================================*/

function formatParashaName(key) {

    const names = {

        "devarim": "Devarim",

        "vaetchanan": "Vaetchanan",

        "eikev": "Eikev",

        "reeh": "Re'eh",

        "shofetim": "Shofetim",

        "ki-teitzei": "Ki Tetze",

        "ki-tavo": "Ki Tabo",

        "nitzavim": "Nitzavim",

        "vayeilech": "Vayeilech",

        "haazinu": "Haazinu",

        "vezot-haberakhah":
            "Vezot HaBerakhah"

    };


    return names[key] || key;

}


/*==========================================================*
* NAVIGATION
*==========================================================*/

function initialiseNavigation() {

    const links =
        document.querySelectorAll("nav a");


    links.forEach(link => {

        link.addEventListener("click", function () {

            links.forEach(item => {

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

}


/*==========================================================*
* PALM IMAGE SLIDER
*==========================================================*/

const palmImages = [

    "assets/images/palm.jpg",
    "assets/images/palm2.jpg",
    "assets/images/palm3.jpg",
    "assets/images/palm4.jpg"

];


let currentSlide = 0;


function initialiseHeroSlider() {

    const palmImage =
        document.querySelector(
            ".palm-image img"
        );


    const dots =
        document.querySelectorAll(
            ".slider-dots span"
        );


    if (
        !palmImage ||
        dots.length === 0
    ) {

        return;

    }


    setInterval(() => {

        currentSlide++;


        if (
            currentSlide >=
            palmImages.length
        ) {

            currentSlide = 0;

        }


        palmImage.src =
            palmImages[currentSlide];


        dots.forEach(dot => {

            dot.classList.remove("active");

        });


        dots[currentSlide]
            .classList.add("active");


    }, 6000);

}


/*==========================================================*
* FEATURE CARD ANIMATION
*==========================================================*/

function initialiseCards() {

    const cards =
        document.querySelectorAll(".card");


    cards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "translateY(-8px)";

                card.style.transition =
                    ".35s";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0px)";

            }
        );

    });

}


/*==========================================================*
* SEARCH
*==========================================================*/

function initialiseSearch() {

    const searchBox =
        document.querySelector(
            ".top-right input"
        );


    const searchButton =
        document.querySelector(
            ".top-right button"
        );


    if (
        !searchBox ||
        !searchButton
    ) {

        return;

    }


    searchButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const term =
                searchBox.value.trim();


            if (term === "") {

                alert(
                    "Please enter a search term."
                );

                return;

            }


            alert(
                "Future Archive Search:\n\n" +
                term
            );

        }
    );

}


/*==========================================================*
* PARASHAH SIDEBAR SEARCH
*==========================================================*/

function initialiseParashahSearch() {

    const searchInput =
        document.getElementById(
            "parashaSearch"
        );


    const parashaLinks =
        document.querySelectorAll(
            "#parashaList a"
        );


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        function () {

            const searchTerm =
                this.value
                    .toLowerCase()
                    .trim();


            parashaLinks.forEach(
                function (link) {

                    const name =
                        link.textContent
                            .toLowerCase();


                    const item =
                        link.closest("li");


                    if (
                        name.includes(
                            searchTerm
                        )
                    ) {

                        item.style.display =
                            "";

                    } else {

                        item.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/*==========================================================*
* PARASHAH SIDEBAR LINKS
*
* Converts:
*
* ?parasha=eikev
*
* ?parasha=reeh
*
* etc.
*
* into the correct page selection.
*==========================================================*/

function initialiseParashahLinks() {

    const parashaLinks =
        document.querySelectorAll(
            "#parashaList a[data-parasha]"
        );


    parashaLinks.forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const selectedParasha =
                    this.dataset.parasha;


                if (
                    !parashot[
                        selectedParasha
                    ]
                ) {

                    return;

                }


                const newUrl =
                    window.location.pathname +
                    "?parasha=" +
                    encodeURIComponent(
                        selectedParasha
                    );


                window.location.href =
                    newUrl;

            }
        );

    });

}


/*==========================================================*
* SCROLL EFFECTS
*==========================================================*/

function initialiseScrollEffects() {

    const cards =
        document.querySelectorAll(
            ".card"
        );


    /*
     * If the page has no cards,
     * do not create the observer.
     */

    if (
        cards.length === 0
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach(card => {

        observer.observe(card);

    });

}


/*==========================================================*
* INITIALISE PARASHAH FUNCTIONS
*
* These are kept separate so they do not interfere
* with the existing Jewmaica functions.
*==========================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initialiseParashahSearch();

        initialiseParashahLinks();

    }
);


/*==========================================================*
* FUTURE DEVELOPMENT ROADMAP
*==========================================================*/

/*

Version 0.2

✓ Dropdown menus
✓ Mobile navigation
✓ Improved animations
✓ Image gallery
✓ Torah archive search


Version 0.3

✓ Dynamic Calendar
✓ Hebrew Date
✓ Weekly Parashah
✓ Candle Lighting
✓ Havdalah


Version 0.4

✓ Decap CMS integration
✓ Archive filtering
✓ PDF viewer
✓ JPEG gallery
✓ Audio player


Version 0.5

✓ YouTube API
✓ Local Video Library
✓ Zoom integration
✓ Event registration


Version 0.6

✓ Genealogy Database
✓ Cemetery Search
✓ Historical Timeline


Version 1.0

✓ Full Living Archive
✓ Community Portal
✓ Search Engine
✓ Progressive Web App
✓ Offline Reading

*/


/*==========================================================*
* END OF FILE
*==========================================================*/
