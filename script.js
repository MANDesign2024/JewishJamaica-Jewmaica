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
    * BERESHIT — PLACEHOLDER
    *======================================================*/

    "bereshit": {
        title: "BERESHIT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * NOACH — PLACEHOLDER
    *======================================================*/

    "noach": {
        title: "NOACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * LECH LECHA — PLACEHOLDER
    *======================================================*/

    "lech-lecha": {
        title: "LECH LECHA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYERA — PLACEHOLDER
    *======================================================*/

    "vayera": {
        title: "VAYERA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * CHAYEI SARA — PLACEHOLDER
    *======================================================*/

    "chayei-sara": {
        title: "CHAYEI SARA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TOLDOT — PLACEHOLDER
    *======================================================*/

    "toldot": {
        title: "TOLDOT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYETZE — PLACEHOLDER
    *======================================================*/

    "vayetze": {
        title: "VAYETZE",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYISHLACH — PLACEHOLDER
    *======================================================*/

    "vayishlach": {
        title: "VAYISHLACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYESHEV — PLACEHOLDER
    *======================================================*/

    "vayeshev": {
        title: "VAYESHEV",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * MIKETZ — PLACEHOLDER
    *======================================================*/

    "miketz": {
        title: "MIKETZ",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYIGASH — PLACEHOLDER
    *======================================================*/

    "vayigash": {
        title: "VAYIGASH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYECHI — PLACEHOLDER
    *======================================================*/

    "vayechi": {
        title: "VAYECHI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * SHEMOT — PLACEHOLDER
    *======================================================*/

    "shemot": {
        title: "SHEMOT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAERA — PLACEHOLDER
    *======================================================*/

    "vaera": {
        title: "VAERA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BO — PLACEHOLDER
    *======================================================*/

    "bo": {
        title: "BO",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BESHALACH — PLACEHOLDER
    *======================================================*/

    "beshalach": {
        title: "BESHALACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * YITRO — PLACEHOLDER
    *======================================================*/

    "yitro": {
        title: "YITRO",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * MISHPATIM — PLACEHOLDER
    *======================================================*/

    "mishpatim": {
        title: "MISHPATIM",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TERUMAH — PLACEHOLDER
    *======================================================*/

    "terumah": {
        title: "TERUMAH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TETZAVEH — PLACEHOLDER
    *======================================================*/

    "tetzaveh": {
        title: "TETZAVEH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * KI TISA — PLACEHOLDER
    *======================================================*/

    "ki-tisa": {
        title: "KI TISA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYAKHEL — PLACEHOLDER
    *======================================================*/

    "vayakhel": {
        title: "VAYAKHEL",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * PEKUDEI — PLACEHOLDER
    *======================================================*/

    "pekudei": {
        title: "PEKUDEI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * VAYIKRA — PLACEHOLDER
    *======================================================*/

    "vayikra": {
        title: "VAYIKRA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TZAV — PLACEHOLDER
    *======================================================*/

    "tzav": {
        title: "TZAV",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * SHMINI — PLACEHOLDER
    *======================================================*/

    "shmini": {
        title: "SHMINI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * TAZRIA — PLACEHOLDER
    *======================================================*/

    "tazria": {
        title: "TAZRIA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * METZORA — PLACEHOLDER
    *======================================================*/

    "metzora": {
        title: "METZORA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * ACHAREI MOT — PLACEHOLDER
    *======================================================*/

    "acharei-mot": {
        title: "ACHAREI MOT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * KEDOSHIM — PLACEHOLDER
    *======================================================*/

    "kedoshim": {
        title: "KEDOSHIM",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * EMOR — PLACEHOLDER
    *======================================================*/

    "emor": {
        title: "EMOR",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BEHAR — PLACEHOLDER
    *======================================================*/

    "behar": {
        title: "BEHAR",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BECHUKOTAI — PLACEHOLDER
    *======================================================*/

    "bechukotai": {
        title: "BECHUKOTAI",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BAMIDBAR — PLACEHOLDER
    *======================================================*/

    "bamidbar": {
        title: "BAMIDBAR",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * NASSO — PLACEHOLDER
    *======================================================*/

    "nasso": {
        title: "NASSO",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BEHAALOTCHA — PLACEHOLDER
    *======================================================*/

    "behaalotcha": {
        title: "BEHAALOTCHA",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * SHLACH — PLACEHOLDER
    *======================================================*/

    "shlach": {
        title: "SHLACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * KORACH — PLACEHOLDER
    *======================================================*/

    "korach": {
        title: "KORACH",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * CHUKAT — PLACEHOLDER
    *======================================================*/

    "chukat": {
        title: "CHUKAT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * BALAK — PLACEHOLDER
    *======================================================*/

    "balak": {
        title: "BALAK",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * PINCHAS — PLACEHOLDER
    *======================================================*/

    "pinchas": {
        title: "PINCHAS",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * MATOT — PLACEHOLDER
    *======================================================*/

    "matot": {
        title: "MATOT",
        subtitle: "",
        pdf: "",
        video: ""
    },


    /*======================================================*
    * MASEI — PLACEHOLDER
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
        pdf: "../PDFs/Dvrei Torah/Parasha Devarim - Let's Make Justice Blind.pdf",
        video: "LJnMRYc8rhc"
    },


    /*======================================================*
    * VAETCHANAN
    *======================================================*/

    "vaetchanan": {
        title: "VAETCHANAN",
        subtitle: "Teshuva and Redemption",
        pdf: "../PDFs/Dvrei Torah/Parasha Va'Etchanan-Teshuva and Redemption.pdf",
        video: "VsQl2eEwQdY"
    },


    /*======================================================*
    * EIKEV
    *======================================================*/

    "eikev": {
        title: "EIKEV",
        subtitle: "Remaining Humble Amidst Assured Blessings",
        pdf: "../PDFs/Dvrei Torah/Parasha Eikev-Remaining Humble Amidst Assured Blessings.pdf",
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

    "ki-teitzei": {
        title: "KI TETZE",
        subtitle: "",
        pdf: "",
        video: "U0l-wBKzNZ4"
    },


    /*======================================================*
    * KI TABO
    *======================================================*/

    "ki-tavo": {
        title: "KI TABO",
        subtitle: "The Continued Hope in Redemption",
        pdf: "../PDFs/Dvrei Torah/Parashat Ki Tavo – the Continued Hope in Redemption.pdf",
        video: "0BG3AC5iqrk"
    },


    /*======================================================*
    * NITZAVIM
    *======================================================*/

    "nitzavim": {
        title: "NITZAVIM",
        subtitle: "Returning to Ways of God",
        pdf: "../PDFs/Dvrei Torah/Parasha-Nitzavim-Returning-to-Ways-of-God.pdf",
        video: "pXjwO0QQ0KI"
    },


    /*======================================================*
    * VAYEILECH
    *======================================================*/

    "vayeilech": {
        title: "VA YEILECH",
        subtitle: "Shuvah Yisrael-Return Israel",
        pdf: "../PDFs/Dvrei Torah/Parasha Vayeilech – Shuvah Yisrael-Return Israel.pdf",
        video: "pXjwO0QQ0KI"
    },


    /*======================================================*
    * HAAZINU
    *======================================================*/

    "haazinu": {
        title: "HAAZINU",
        subtitle: "Our Redemption foretold",
        pdf: "../PDFs/Dvrei Torah/Parasha HaAzinu – Our Redemption foretold.pdf",
        video: "tSrzyo519GU"
    },


    /*======================================================*
    * VEZOT HABERAKHAH
    *======================================================*/

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

    const youtubeVideo =
        document.getElementById("youtubeVideo");

    const videoParashaName =
        document.getElementById("videoParashaName");


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


    /*
     * IMPORTANT:
     *
     * There is NO automatic Nitzavim fallback.
     *
     * No ?parasha= means the GENERAL page.
     */

    let data;

    if (
        selectedParasha &&
        parashot[selectedParasha]
    ) {

        data = parashot[selectedParasha];

    } else {

        data = parashot["default"];

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

        if (selectedParasha) {

            breadcrumbParasha.textContent =
                formatParashaName(selectedParasha);

        } else {

            breadcrumbParasha.textContent =
                "Parashat HaShavua";

        }

    }


    /*------------------------------------------------------*
    * UPDATE COMMENTARY DESCRIPTION
    *------------------------------------------------------*/

    if (commentaryDescription) {

        if (selectedParasha) {

            commentaryDescription.textContent =
                "Written teachings and reflections on Parashat " +
                formatParashaName(selectedParasha) +
                ".";

        } else {

            commentaryDescription.textContent =
                "Explore weekly Torah teachings and reflections.";

        }

    }


    /*------------------------------------------------------*
    * PDF CARD
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

        if (pdfTitle) {

            if (selectedParasha) {

                pdfTitle.textContent =
                    "Written Commentary";

            } else {

                pdfTitle.textContent =
                    "Dvrei Torah";

            }

        }


        if (pdfSubtitle) {

            if (selectedParasha) {

                pdfSubtitle.textContent =
                    "Written commentary will be added to the archive.";

            } else {

                pdfSubtitle.textContent =
                    "Written teachings and reflections from the Jewmaica archive.";

            }

        }


        if (pdfButton) {

            pdfButton.style.display =
                "none";

        }

    }


    /*------------------------------------------------------*
    * YOUTUBE VIDEO
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

        youtubeVideo.removeAttribute("src");

        youtubeVideo.style.display =
            "none";

    }


    /*------------------------------------------------------*
    * VIDEO DESCRIPTION
    *------------------------------------------------------*/

    if (videoParashaName) {

        if (selectedParasha) {

            videoParashaName.textContent =
                "Parashat " +
                formatParashaName(selectedParasha);

        } else {

            videoParashaName.textContent =
                "the Weekly Parashah";

        }

    }


    /*------------------------------------------------------*
    * SELECTED SIDEBAR ITEM
    *------------------------------------------------------*/

    const parashaLinks =
        document.querySelectorAll(
            "#parashaList a"
        );


    parashaLinks.forEach(link => {

        link.classList.remove("selected");


        if (
            selectedParasha &&
            link.dataset.parasha ===
            selectedParasha
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
        "shofetim": "Shoftim",
        "ki-teitzei": "Ki Tetze",
        "ki-tavo": "Ki Tabo",
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
                    "Dvrei%20Torah.html?parasha=" +
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
