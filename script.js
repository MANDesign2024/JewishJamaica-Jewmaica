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

    /*--------------------------------------------------------
     * BERESHIT
     *--------------------------------------------------------*/

    "bereshit": {
        title: "BERESHIT",
        subtitle: "In the Beginning",
        pdf: "",
        video: ""
    },

    "noach": {
        title: "NOACH",
        subtitle: "Noah",
        pdf: "",
        video: ""
    },

    "lech-lecha": {
        title: "LECH LECHA",
        subtitle: "Go Forth",
        pdf: "",
        video: ""
    },

    "vayera": {
        title: "VAYERA",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "chayei-sara": {
        title: "CHAYEI SARA",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "toldot": {
        title: "TOLDOT",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "vayetze": {
        title: "VAYETZE",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "vayishlach": {
        title: "VAYISHLACH",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "vayeshev": {
        title: "VAYESHEV",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "miketz": {
        title: "MIKETZ",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "vayigash": {
        title: "VAYIGASH",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "vayechi": {
        title: "VAYECHI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*--------------------------------------------------------
     * SHEMOT
     *--------------------------------------------------------*/

    "shemot": {
        title: "SHEMOT",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "vaera": {
        title: "VAERA",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "bo": {
        title: "BO",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "beshalach": {
        title: "BESHALACH",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "yitro": {
        title: "YITRO",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "mishpatim": {
        title: "MISHPATIM",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "terumah": {
        title: "TERUMAH",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "tetzaveh": {
        title: "TETZAVEH",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "ki-tisa": {
        title: "KI TISA",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "vayakhel": {
        title: "VAYAKHEL",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "pekudei": {
        title: "PEKUDEI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*--------------------------------------------------------
     * VAYIKRA
     *--------------------------------------------------------*/

    "vayikra": {
        title: "VAYIKRA",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "tzav": {
        title: "TZAV",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "shmini": {
        title: "SHMINI",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "tazria": {
        title: "TAZRIA",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "metzora": {
        title: "METZORA",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "acharei-mot": {
        title: "ACHAREI MOT",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "kedoshim": {
        title: "KEDOSHIM",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "emor": {
        title: "EMOR",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "behar": {
        title: "BEHAR",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "bechukotai": {
        title: "BECHUKOTAI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*--------------------------------------------------------
     * BAMIDBAR
     *--------------------------------------------------------*/

    "bamidbar": {
        title: "BAMIDBAR",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "nasso": {
        title: "NASSO",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "behaalotcha": {
        title: "BEHAALOTCHA",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "shlach": {
        title: "SHLACH",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "korach": {
        title: "KORACH",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "chukat": {
        title: "CHUKAT",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "balak": {
        title: "BALAK",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "pinchas": {
        title: "PINCHAS",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "matot": {
        title: "MATOT",
        subtitle: "",
        pdf: "",
        video: ""
    },

    "masei": {
        title: "MASEI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*========================================================*
     * UPDATED PARASHOT
     *========================================================*/


    /*--------------------------------------------------------
     * DEVARIM
     *--------------------------------------------------------*/

    "devarim": {
        title: "DEVARIM",
        subtitle: "Let's Make Justice Blind",
        pdf: "../PDFs/Dvrei Torah/Parasha Devarim - Let's Make Justice Blind.pdf",
        video: "LJnMRYc8rhc"
    },


    /*--------------------------------------------------------
     * VAETCHANAN
     *--------------------------------------------------------*/

    "vaetchanan": {
        title: "VAETCHANAN",
        subtitle: "Teshuva and Redemption",
        pdf: "../PDFs/Dvrei Torah/Parasha Va'Etchanan-Teshuva and Redemption.pdf",
        video: "VsQl2eEwQdY"
    },


    /*--------------------------------------------------------
     * EIKEV
     *--------------------------------------------------------*/

    "eikev": {
        title: "EIKEV",
        subtitle: "Remaining Humble Amidst Assured Blessings",
        pdf: "../PDFs/Dvrei Torah/Parasha Eikev-Remaining Humble Amidst Assured Blessings.pdf",
        video: "G0SV5wJNXK8"
    },


    /*--------------------------------------------------------
     * RE'EH
     * VIDEO ONLY
     *--------------------------------------------------------*/

    "reeh": {
        title: "REEH",
        subtitle: "",
        pdf: "",
        video: "30Rsmkp0Kik"
    },


    /*--------------------------------------------------------
     * SHOFETIM
     * VIDEO ONLY
     *--------------------------------------------------------*/

    "shofetim": {
        title: "SHOFETIM",
        subtitle: "",
        pdf: "",
        video: "gWIhrijkukc"
    },


    /*--------------------------------------------------------
     * KI TETZE
     * VIDEO ONLY
     *--------------------------------------------------------*/

    "ki-tetzei": {
        title: "KI TETZE",
        subtitle: "",
        pdf: "",
        video: "U0l-wBKzNZ4"
    },


    /*--------------------------------------------------------
     * KI TAVO
     *--------------------------------------------------------*/

    "ki-tavo": {
        title: "KI TAVO",
        subtitle: "The Continued Hope in Redemption",
        pdf: "../PDFs/Dvrei Torah/Parashat Ki Tavo – the Continued Hope in Redemption.pdf",
        video: "0BG3AC5iqrk"
    },


    /*--------------------------------------------------------
     * NITZAVIM
     *--------------------------------------------------------*/

    "nitzavim": {
        title: "NITZAVIM",
        subtitle: "Returning to Ways of God",
        pdf: "../PDFs/Dvrei Torah/Parasha-Nitzavim-Returning-to-Ways-of-God.pdf",
        video: "pXjwO0QQ0KI"
    },


    /*--------------------------------------------------------
     * VA'YEILECH
     *--------------------------------------------------------*/

    "vayeilech": {
        title: "VA'YEILECH",
        subtitle: "Shuvah Yisrael (Return Israel)",
        pdf: "../PDFs/Dvrei Torah/Parasha Vayeilech – Shuvah Yisrael-Return Israel.pdf",
        video: "pXjwO0QQ0KI"
    },


    /*--------------------------------------------------------
     * HA'AZINU
     *--------------------------------------------------------*/

    "haazinu": {
        title: "HA'AZINU",
        subtitle: "Our Redemption foretold",
        pdf: "../PDFs/Dvrei Torah/Parasha HaAzinu – Our Redemption foretold.pdf",
        video: "tSrzyo519GU"
    },


    /*--------------------------------------------------------
     * VEZOT HABERAKHAH
     * PDF ONLY
     *--------------------------------------------------------*/

    "vezot-haberakhah": {
        title: "VEZOT HABERAKHAH",
        subtitle: "Succession Planning",
        pdf: "../PDFs/Dvrei Torah/Parasha Vezot Haberakhah - Sucession Planning.pdf",
        video: ""
    }

};


/*==========================================================*
 * PARASHAH PAGE
 *==========================================================*/

function initialiseParasha() {

    const params =
        new URLSearchParams(window.location.search);

    /*
     * If no Parashah is specified in the URL,
     * Nitzavim remains the default.
     */

    const selected =
        params.get("parasha") || "nitzavim";

    const parasha =
        parashot[selected];

    if (!parasha) return;


    /*--------------------------------------------------------
     * PAGE ELEMENTS
     *--------------------------------------------------------*/

    const title =
        document.getElementById("parashaTitle");

    const subtitle =
        document.getElementById("parashaSubtitle");

    const breadcrumb =
        document.getElementById("breadcrumbParasha");

    const description =
        document.getElementById("commentaryDescription");

    const pdfTitle =
        document.getElementById("pdfTitle");

    const pdfSubtitle =
        document.getElementById("pdfSubtitle");

    const pdfButton =
        document.getElementById("pdfButton");

    const video =
        document.getElementById("youtubeVideo");

    const videoDescription =
        document.getElementById("videoDescription");

    const videoParashaName =
        document.getElementById("videoParashaName");


    /*
     * The resource box contains the PDF information.
     * We can hide the complete box when no PDF exists.
     */

    const resourceBox =
        pdfButton
            ? pdfButton.closest(".resource-box")
            : null;


    /*
     * The video container is used to hide the
     * complete video when no YouTube video exists.
     */

    const videoContainer =
        video
            ? video.closest(".video-container")
            : null;


    /*--------------------------------------------------------
     * HERO TITLE
     *--------------------------------------------------------*/

    if (title) {

        title.textContent =
            parasha.title;

    }


    /*--------------------------------------------------------
     * HERO SUBTITLE
     *--------------------------------------------------------*/

    if (subtitle) {

        subtitle.textContent =
            parasha.subtitle || "";

    }


    /*--------------------------------------------------------
     * BREADCRUMB
     *--------------------------------------------------------*/

    if (breadcrumb) {

        breadcrumb.textContent =
            parasha.title;

    }


    /*--------------------------------------------------------
     * COMMENTARY DESCRIPTION
     *--------------------------------------------------------*/

    if (description) {

        if (parasha.pdf) {

            description.textContent =
                "Written teachings and reflections on Parashat " +
                parasha.title + ".";

        } else {

            description.textContent =
                "Written commentary for Parashat " +
                parasha.title +
                " is not currently available.";

        }

    }


    /*--------------------------------------------------------
     * PDF INFORMATION
     *--------------------------------------------------------*/

    if (pdfTitle) {

        pdfTitle.textContent =
            "Parashat " + parasha.title;

    }


    if (pdfSubtitle) {

        pdfSubtitle.textContent =
            parasha.subtitle || "";

    }


    /*--------------------------------------------------------
     * PDF BUTTON
     *--------------------------------------------------------*/

    if (pdfButton) {

        if (parasha.pdf) {

            pdfButton.href =
                parasha.pdf;

            pdfButton.style.display =
                "block";

            pdfButton.textContent =
                "📖 OPEN " +
                parasha.title +
                " PDF";

        } else {

            pdfButton.style.display =
                "none";

        }

    }


    /*--------------------------------------------------------
     * PDF RESOURCE BOX
     *--------------------------------------------------------*/

    if (resourceBox) {

        if (parasha.pdf) {

            resourceBox.style.display =
                "";

        } else {

            resourceBox.style.display =
                "none";

        }

    }


    /*--------------------------------------------------------
     * YOUTUBE VIDEO
     *--------------------------------------------------------*/

    if (video) {

        if (parasha.video) {

            video.src =
                "https://www.youtube.com/embed/" +
                parasha.video;

            video.style.display =
                "block";

        } else {

            video.removeAttribute("src");

            video.style.display =
                "none";

        }

    }


    /*--------------------------------------------------------
     * VIDEO CONTAINER
     *--------------------------------------------------------*/

    if (videoContainer) {

        if (parasha.video) {

            videoContainer.style.display =
                "";

        } else {

            videoContainer.style.display =
                "none";

        }

    }


    /*--------------------------------------------------------
     * VIDEO DESCRIPTION
     *--------------------------------------------------------*/

    if (videoDescription) {

        if (parasha.video) {

            videoDescription.textContent =
                "Recordings of the Torah reading for Parashat " +
                parasha.title + ".";

        } else {

            videoDescription.textContent =
                "A Torah reading video for Parashat " +
                parasha.title +
                " is not currently available.";

        }

    }


    /*--------------------------------------------------------
     * VIDEO PARASHAH NAME
     *--------------------------------------------------------*/

    if (videoParashaName) {

        videoParashaName.textContent =
            "Parashat " + parasha.title;

    }


    /*--------------------------------------------------------
     * CURRENT SIDEBAR SELECTION
     *--------------------------------------------------------*/

    const parashaLinks =
        document.querySelectorAll(
            "#parashaList a[data-parasha]"
        );

    parashaLinks.forEach(link => {

        link.classList.remove("selected");

    });


    const selectedLink =
        document.querySelector(
            '#parashaList a[data-parasha="' +
            selected +
            '"]'
        );

    if (selectedLink) {

        selectedLink.classList.add("selected");

    }

}


/*==========================================================*
 * PAGE LOADED
 *==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "Jewmaica Version 0.1 Loaded"
    );

    initialiseNavigation();

    initialiseHeroSlider();

    initialiseCards();

    initialiseSearch();

    initialiseScrollEffects();

    initialiseParasha();

});


/*==========================================================*
 * NAVIGATION
 *==========================================================*/

function initialiseNavigation() {

    const links =
        document.querySelectorAll("nav a");


    links.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                links.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                this.classList.add(
                    "active"
                );

            }
        );

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

            dot.classList.remove(
                "active"
            );

        });


        if (dots[currentSlide]) {

            dots[currentSlide].classList.add(
                "active"
            );

        }

    }, 6000);

}


/*==========================================================*
 * FEATURE CARD ANIMATION
 *==========================================================*/

function initialiseCards() {

    const cards =
        document.querySelectorAll(
            ".card"
        );


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

function initialiseParashaSearch() {

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


                    if (!item) {

                        return;

                    }


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
 *==========================================================*/

function initialiseParashaLinks() {

    const parashaLinks =
        document.querySelectorAll(
            "#parashaList a[data-parasha]"
        );


    parashaLinks.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                parashaLinks.forEach(item => {

                    item.classList.remove(
                        "selected"
                    );

                });


                this.classList.add(
                    "selected"
                );

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
     * Some pages may not contain cards.
     * In that case simply stop here.
     */

    if (
        cards.length === 0 ||
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

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
 * INITIALISE PARASHAH SEARCH AND LINKS
 *==========================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initialiseParashaSearch();

        initialiseParashaLinks();

    }
);


/*==========================================================*
 * FUTURE FUNCTIONS
 *==========================================================*/

/*

Future Development Roadmap

---------------------------------------

Version 0.2

✓ Dropdown menus
✓ Mobile navigation
✓ Improved animations
✓ Image gallery
✓ Torah archive search

---------------------------------------

Version 0.3

✓ Dynamic Calendar
✓ Hebrew Date
✓ Weekly Parashah
✓ Candle Lighting
✓ Havdalah

---------------------------------------

Version 0.4

✓ Decap CMS integration
✓ Archive filtering
✓ PDF viewer
✓ JPEG gallery
✓ Audio player

---------------------------------------

Version 0.5

✓ YouTube API
✓ Local Video Library
✓ Zoom integration
✓ Event registration

---------------------------------------

Version 0.6

✓ Genealogy Database
✓ Cemetery Search
✓ Historical Timeline

---------------------------------------

Version 1.0

✓ Full Living Archive
✓ Community Portal
✓ Search Engine
✓ Progressive Web App
✓ Offline Reading

*/


/*==========================================================
    END OF FILE
==========================================================*/
