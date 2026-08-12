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


    /*======================================================*
    * DEFAULT — GENERAL PARASHAT HASHAVUA PAGE
    *======================================================*/

    "default": {
        title: "PARASHAT HASHAVUA",
        subtitle: "Explore the Weekly Torah Portion",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BERESHIT
    *======================================================*/

    "bereshit": {
        title: "BERESHIT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * NOACH
    *======================================================*/

    "noach": {
        title: "NOACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * LECH LECHA
    *======================================================*/

    "lech-lecha": {
        title: "LECH LECHA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYERA
    *======================================================*/

    "vayera": {
        title: "VAYERA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * CHAYEI SARA
    *======================================================*/

    "chayei-sara": {
        title: "CHAYEI SARA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TOLDOT
    *======================================================*/

    "toldot": {
        title: "TOLDOT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYETZE
    *======================================================*/

    "vayetze": {
        title: "VAYETZE",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYISHLACH
    *======================================================*/

    "vayishlach": {
        title: "VAYISHLACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYESHEV
    *======================================================*/

    "vayeshev": {
        title: "VAYESHEV",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * MIKETZ
    *======================================================*/

    "miketz": {
        title: "MIKETZ",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYIGASH
    *======================================================*/

    "vayigash": {
        title: "VAYIGASH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYECHI
    *======================================================*/

    "vayechi": {
        title: "VAYECHI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * SHEMOT
    *======================================================*/

    "shemot": {
        title: "SHEMOT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAERA
    *======================================================*/

    "vaera": {
        title: "VAERA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BO
    *======================================================*/

    "bo": {
        title: "BO",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BESHALACH
    *======================================================*/

    "beshalach": {
        title: "BESHALACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * YITRO
    *======================================================*/

    "yitro": {
        title: "YITRO",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * MISHPATIM
    *======================================================*/

    "mishpatim": {
        title: "MISHPATIM",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TERUMAH
    *======================================================*/

    "terumah": {
        title: "TERUMAH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TETZAVEH
    *======================================================*/

    "tetzaveh": {
        title: "TETZAVEH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * KI TISA
    *======================================================*/

    "ki-tisa": {
        title: "KI TISA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYAKHEL
    *======================================================*/

    "vayakhel": {
        title: "VAYAKHEL",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * PEKUDEI
    *======================================================*/

    "pekudei": {
        title: "PEKUDEI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYIKRA
    *======================================================*/

    "vayikra": {
        title: "VAYIKRA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TZAV
    *======================================================*/

    "tzav": {
        title: "TZAV",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * SHMINI
    *======================================================*/

    "shmini": {
        title: "SHMINI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TAZRIA
    *======================================================*/

    "tazria": {
        title: "TAZRIA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * METZORA
    *======================================================*/

    "metzora": {
        title: "METZORA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * ACHAREI MOT
    *======================================================*/

    "acharei-mot": {
        title: "ACHAREI MOT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * KEDOSHIM
    *======================================================*/

    "kedoshim": {
        title: "KEDOSHIM",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * EMOR
    *======================================================*/

    "emor": {
        title: "EMOR",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BEHAR
    *======================================================*/

    "behar": {
        title: "BEHAR",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BECHUKOTAI
    *======================================================*/

    "bechukotai": {
        title: "BECHUKOTAI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BAMIDBAR
    *======================================================*/

    "bamidbar": {
        title: "BAMIDBAR",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * NASSO
    *======================================================*/

    "nasso": {
        title: "NASSO",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BEHAALOTCHA
    *======================================================*/

    "behaalotcha": {
        title: "BEHAALOTCHA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * SHLACH
    *======================================================*/

    "shlach": {
        title: "SHLACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * KORACH
    *======================================================*/

    "korach": {
        title: "KORACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * CHUKAT
    *======================================================*/

    "chukat": {
        title: "CHUKAT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BALAK
    *======================================================*/

    "balak": {
        title: "BALAK",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * PINCHAS
    *======================================================*/

    "pinchas": {
        title: "PINCHAS",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * MATOT
    *======================================================*/

    "matot": {
        title: "MATOT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * MASEI
    *======================================================*/

    "masei": {
        title: "MASEI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * DEVARIM
    *======================================================*/

    "devarim": {
        title: "DEVARIM",
        subtitle: "Let's Make Justice Blind",
        pdf: "../PDFs/Dvrei%20Torah/Parasha%20Devarim%20-%20Let's%20Make%20Justice%20Blind.pdf",
        video: "LJnMRYc8rhc"
    },


    /*======================================================*
    * VAETCHANAN
    *======================================================*/

    "vaetchanan": {
        title: "VAETCHANAN",
        subtitle: "Teshuva and Redemption",
        pdf: "../PDFs/Dvrei%20Torah/Parasha%20Devarim%20–%20Let’s%20Make%20Justice%20Blind.pdf",
        video: "VsQl2eEwQdY"
    },


    /*======================================================*
    * EIKEV
    *======================================================*/

    "eikev": {
        title: "EIKEV",
        subtitle: "Remaining Humble Amidst Assured Blessings",
        pdf: "../PDFs/Dvrei%20Torah/Parasha%20Eikev-Remaining%20Humble%20Amidst%20Assured%20Blessings.pdf",
        video: "G0SV5wJNXK8"
    },


    /*======================================================*
    * RE'EH — VIDEO ONLY
    *======================================================*/

    "reeh": {
        title: "RE'EH",
        subtitle: "",
        pdf: "",
        video: "30Rsmkp0Kik"
    },


    /*======================================================*
    * SHOFTIM — VIDEO ONLY
    *======================================================*/

    "shoftim": {
        title: "SHOFTIM",
        subtitle: "",
        pdf: "",
        video: "gWIhrijkukc"
    },


    /*======================================================*
    * KI TETZE — VIDEO ONLY
    *======================================================*/

    "ki-tetze": {
        title: "KI TETZE",
        subtitle: "",
        pdf: "",
        video: "U0l-wBKzNZ4"
    },


    /*======================================================*
    * TABO
    *======================================================*/

    "ki-tavo": {
        title: "TABO",
        subtitle: "The Continued Hope in Redemption",
        pdf: "../PDFs/Dvrei%20Torah/Parashat%20Ki%20Tavo%20%E2%80%93%20the%20Continued%20Hope%20in%20Redemption.pdf",
        video: "0BG3AC5iqrk"
    },


    /*======================================================*
    * NITZAVIM
    *======================================================*/

    "nitzavim": {
        title: "NITZAVIM",
        subtitle: "Returning to Ways of God",
        pdf: "../PDFs/Dvrei%20Torah/Parasha-Nitzavim-Returning-to-Ways-of-God.pdf",
        video: "pXjwO0QQ0KI"
    },


    /*======================================================*
    * VAYEILECH
    *======================================================*/

    "vayeilech": {
        title: "VA YEILECH",
        subtitle: "Shuvah Yisrael-Return Israel",
        pdf: "../PDFs/Dvrei%20Torah/Parasha%20Vayeilech%20%E2%80%93%20Shuvah%20Yisrael-Return%20Israel.pdf",
        video: "pXjwO0QQ0KI"
    },


    /*======================================================*
    * HAAZINU
    *======================================================*/

    "haazinu": {
        title: "HAAZINU",
        subtitle: "Our Redemption foretold",
        pdf: "../PDFs/Dvrei%20Torah/Parasha%20HaAzinu%20%E2%80%93%20Our%20Redemption%20foretold.pdf",
        video: "tSrzyo519GU"
    },


    /*======================================================*
    * VEZOT HABERAKHAH — PDF ONLY
    *======================================================*/

    "vezot-haberakhah": {
        title: "VEZOT HABERAKHAH",
        subtitle: "Sucession Planning",
        pdf: "../PDFs/Dvrei%20Torah/Parasha%20Vezot%20Haberakhah%20-%20Sucession%20Planning.pdf",
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

    initialiseParashahSearch();

    initialiseParashahLinks();

    initialiseScrollEffects();

});


/*==========================================================*
 * PARASHAH PAGE
 *==========================================================*/

function initialiseParashahPage() {

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

    const pdfPlaceholder =
        document.getElementById("pdfPlaceholder");

    const videoContainer =
        document.getElementById("videoContainer");

    const youtubeVideo =
        document.getElementById("youtubeVideo");

    const videoPlaceholder =
        document.getElementById("videoPlaceholder");

    const videoDescription =
        document.getElementById("videoDescription");

    if (!parashaTitle) {
        return;
    }


    /*------------------------------------------------------*
     * GET PARASHAH FROM URL
     *------------------------------------------------------*/

    const urlParams =
        new URLSearchParams(window.location.search);

    const selectedParasha =
        urlParams.get("parasha");


    /*------------------------------------------------------*
     * DETERMINE PAGE DATA
     *
     * NO PARASHAH = GENERAL PAGE
     *
     * INVALID PARASHAH = GENERAL PAGE
     *
     * NITZAVIM IS NEVER USED AS DEFAULT.
     *------------------------------------------------------*/

    let data;
    let activeParasha = null;

    if (
        selectedParasha &&
        Object.prototype.hasOwnProperty.call(
            parashot,
            selectedParasha
        )
    ) {

        activeParasha =
            selectedParasha;

        data =
            parashot[selectedParasha];

    } else {

        data =
            parashot["default"];

    }


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

        if (activeParasha) {

            breadcrumbParasha.textContent =
                formatParashaName(activeParasha);

        } else {

            breadcrumbParasha.textContent =
                "Parashat HaShavua";

        }

    }


    /*------------------------------------------------------*
     * UPDATE COMMENTARY DESCRIPTION
     *------------------------------------------------------*/

    if (commentaryDescription) {

        if (activeParasha) {

            commentaryDescription.textContent =
                "Written teachings and reflections on Parashat " +
                formatParashaName(activeParasha) +
                ".";

        } else {

            commentaryDescription.textContent =
                "Explore weekly Torah teachings and reflections.";

        }

    }


    /*------------------------------------------------------*
     * PDF RESOURCE
     *------------------------------------------------------*/

    if (data.pdf) {

        if (pdfTitle) {

            pdfTitle.textContent =
                "Parashat " +
                formatParashaName(activeParasha);

        }


        if (pdfSubtitle) {

            pdfSubtitle.textContent =
                data.subtitle;

        }


        if (pdfButton) {

            pdfButton.href =
                encodeURI(data.pdf);

            pdfButton.textContent =
                "📖 OPEN " +
                data.title +
                " PDF";

            pdfButton.style.display =
                "block";

        }


        if (pdfPlaceholder) {

            pdfPlaceholder.style.display =
                "none";

        }

    } else {

        if (pdfTitle) {

            if (activeParasha) {

                pdfTitle.textContent =
                    "Written Commentary";

            } else {

                pdfTitle.textContent =
                    "Dvrei Torah";

            }

        }


        if (pdfSubtitle) {

            if (activeParasha) {

                pdfSubtitle.textContent =
                    "Written commentary will be added to the archive.";

            } else {

                pdfSubtitle.textContent =
                    "Written teachings and reflections from the Jewmaica archive.";

            }

        }


        if (pdfButton) {

            pdfButton.removeAttribute("href");

            pdfButton.style.display =
                "none";

        }


        if (pdfPlaceholder) {

            pdfPlaceholder.style.display =
                "block";

        }

    }


    /*------------------------------------------------------*
     * YOUTUBE VIDEO
     *
     * IMPORTANT:
     *
     * The iframe is INSIDE #videoContainer.
     *
     * Therefore we must show/hide the container,
     * not merely the iframe.
     *------------------------------------------------------*/

    if (
        data.video &&
        videoContainer &&
        youtubeVideo
    ) {

        const youtubeURL =
            "https://www.youtube.com/embed/" +
            encodeURIComponent(data.video);

        youtubeVideo.src =
            youtubeURL;

        youtubeVideo.title =
            "Torah Reading - " +
            data.title;

        /* Show the actual video container */
        videoContainer.style.display =
            "block";

        /* Hide the placeholder */
        if (videoPlaceholder) {

            videoPlaceholder.style.display =
                "none";

        }

    } else {

        /* Remove old video */
        if (youtubeVideo) {

            youtubeVideo.removeAttribute("src");

            youtubeVideo.title =
                "Torah Reading";

        }


        /* Hide video container */
        if (videoContainer) {

            videoContainer.style.display =
                "none";

        }


        /* Show placeholder */
        if (videoPlaceholder) {

            videoPlaceholder.style.display =
                "flex";

        }

    }


    /*------------------------------------------------------*
     * VIDEO DESCRIPTION
     *------------------------------------------------------*/

    if (videoDescription) {

        if (activeParasha && data.video) {

            videoDescription.textContent =
                "Torah reading video for Parashat " +
                formatParashaName(activeParasha) +
                ".";

        } else if (activeParasha) {

            videoDescription.textContent =
                "A Torah reading video for Parashat " +
                formatParashaName(activeParasha) +
                " will be added to the archive.";

        } else {

            videoDescription.textContent =
                "Recordings of the Torah reading for the weekly Parashah.";

        }

    }


    /*------------------------------------------------------*
     * SELECTED SIDEBAR ITEM
     *------------------------------------------------------*/

    const parashaLinks =
        document.querySelectorAll(
            "#parashaList a[data-parasha]"
        );


    parashaLinks.forEach(link => {

        link.classList.remove("selected");


        if (
            activeParasha &&
            link.dataset.parasha ===
            activeParasha
        ) {

            link.classList.add("selected");

        }

    });

}

/*==========================================================*
* FORMAT PARASHAH NAME
*==========================================================*/

function formatParashaName(key) {

    const names = {

        "bereshit": "Bereshit",
        "noach": "Noach",
        "lech-lecha": "Lech Lecha",
        "vayera": "Vayera",
        "chayei-sara": "Chayei Sara",
        "toldot": "Toldot",
        "vayetze": "Vayetze",
        "vayishlach": "Vayishlach",
        "vayeshev": "Vayeshev",
        "miketz": "Miketz",
        "vayigash": "Vayigash",
        "vayechi": "Vayechi",
        "shemot": "Shemot",
        "vaera": "Vaera",
        "bo": "Bo",
        "beshalach": "Beshalach",
        "yitro": "Yitro",
        "mishpatim": "Mishpatim",
        "terumah": "Terumah",
        "tetzaveh": "Tetzaveh",
        "ki-tisa": "Ki Tisa",
        "vayakhel": "Vayakhel",
        "pekudei": "Pekudei",
        "vayikra": "Vayikra",
        "tzav": "Tzav",
        "shmini": "Shmini",
        "tazria": "Tazria",
        "metzora": "Metzora",
        "acharei-mot": "Acharei Mot",
        "kedoshim": "Kedoshim",
        "emor": "Emor",
        "behar": "Behar",
        "bechukotai": "Bechukotai",
        "bamidbar": "Bamidbar",
        "nasso": "Nasso",
        "behaalotcha": "Behaalotcha",
        "shlach": "Shlach",
        "korach": "Korach",
        "chukat": "Chukat",
        "balak": "Balak",
        "pinchas": "Pinchas",
        "matot": "Matot",
        "masei": "Masei",

        "devarim": "Devarim",
        "vaetchanan": "Vaetchanan",
        "eikev": "Eikev",
        "reeh": "Re'eh",
        "shoftim": "Shoftim",
        "ki-tetze": "Ki Tetze",
        "ki-tavo": "Tabo",
        "nitzavim": "Nitzavim",
        "vayeilech": "Vayeilech",
        "haazinu": "Haazinu",
        "vezot-haberakhah": "Vezot HaBerakhah"

    };


    return names[key] || key;

}


/*==========================================================*
* PARASHAH SIDEBAR LINKS
*==========================================================*/

function initialiseParashahLinks() {

    const parashaLinks =
        document.querySelectorAll(
            "#parashaList a[data-parasha]"
        );


    parashaLinks.forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                const selectedParasha =
                    this.dataset.parasha;


                window.location.href =
                    "Dvrei Torah.html?parasha=" +
                    encodeURIComponent(
                        selectedParasha
                    );

            }
        );

    });

}


/*==========================================================*
* PARASHAH SEARCH
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
        function() {

            const searchTerm =
                this.value
                    .toLowerCase()
                    .trim();


            parashaLinks.forEach(
                function(link) {

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
* NAVIGATION
*==========================================================*/

function initialiseNavigation() {

    const links =
        document.querySelectorAll("nav a");


    links.forEach(link => {

        link.addEventListener(
            "click",
            function() {

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
        function(event) {

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
* SCROLL EFFECTS
*==========================================================*/

function initialiseScrollEffects() {

    const cards =
        document.querySelectorAll(
            ".card"
        );


    if (cards.length === 0) {
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
* END OF FILE
*==========================================================*/
