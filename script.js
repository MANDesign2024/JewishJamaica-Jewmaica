/*==========================================================
  JEWMAICA
  The Living Archive of Jewish Jamaica
  Version : 0.1.0
  File    : script.js
==========================================================*/

"use strict";


/*==========================================================
  SHIURIM DATA
==========================================================*/

const shiurim = {

    /*------------------------------------------------------
      DEFAULT — GENERAL SHIURIM PAGE
    ------------------------------------------------------*/

    "default": {
        title: "SHIURIM",
        subtitle: "Explore our Shiurim",
        pdf: "",
        video: ""
    },


    /*------------------------------------------------------
      SHEMA
    ------------------------------------------------------*/

    "shema": {
        title: "SHEMA",
        subtitle: "Hear and Understand the Shema",
        pdf: "",
        video: "1nX7YK8YVcQ"
    }
      
 /*------------------------------------------------------
      TEFILLAH
    ------------------------------------------------------*/

    "tefillah": {
        title: "TEFILLAH",
        subtitle: "Hear and Understand the Tefillah",
        pdf: "",
        video: "sFRwaZ9TMm0"
    }

};


/*==========================================================
  PAGE LOADED
==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Jewmaica Version 0.1 Loaded");

    initialiseShiurimPage();
    initialiseNavigation();
    initialiseHeroSlider();
    initialiseCards();
    initialiseSearch();
    initialiseShiurimSearch();
    initialiseShiurimLinks();
    initialiseScrollEffects();

});


/*==========================================================
  SHIURIM PAGE
==========================================================*/

function initialiseShiurimPage() {

    const shiurimTitle =
        document.getElementById("shiurimTitle");

    const shiurimSubtitle =
        document.getElementById("shiurimSubtitle");

    const breadcrumbShiurim =
        document.getElementById("breadcrumbShiurim");

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


    /*------------------------------------------------------
      IF THIS IS NOT THE SHIURIM PAGE, DO NOTHING
    ------------------------------------------------------*/

    if (!shiurimTitle) {
        return;
    }


    /*------------------------------------------------------
      GET SHIURIM FROM URL
    ------------------------------------------------------*/

    const urlParams =
        new URLSearchParams(window.location.search);

    const selectedShiurim =
        urlParams.get("shiurim");


    /*------------------------------------------------------
      DETERMINE PAGE DATA
    ------------------------------------------------------*/

    let data;
    let activeShiurim = null;

    if (
        selectedShiurim &&
        Object.prototype.hasOwnProperty.call(
            shiurim,
            selectedShiurim
        )
    ) {

        activeShiurim = selectedShiurim;
        data = shiurim[selectedShiurim];

    } else {

        data = shiurim["default"];

    }


    /*======================================================
      UPDATE HERO
    ======================================================*/

    shiurimTitle.textContent = data.title;

    if (shiurimSubtitle) {

        shiurimSubtitle.textContent =
            data.subtitle || "Explore our Shiurim";

    }


    /*======================================================
      UPDATE BREADCRUMB
    ======================================================*/

    if (breadcrumbShiurim) {

        if (activeShiurim) {

            breadcrumbShiurim.textContent =
                formatShiurimName(activeShiurim);

        } else {

            breadcrumbShiurim.textContent =
                "Shiurim";

        }

    }


    /*======================================================
      UPDATE DESCRIPTION
    ======================================================*/

    if (commentaryDescription) {

        if (activeShiurim) {

            commentaryDescription.textContent =
                "Written teachings and reflections on " +
                formatShiurimName(activeShiurim) +
                ".";

        } else {

            commentaryDescription.textContent =
                "Explore our Shiurim and Torah teachings " +
                "from the Jewmaica archive.";

        }

    }


    /*======================================================
      PDF RESOURCE
    ======================================================*/

    if (data.pdf) {

        if (pdfTitle) {

            pdfTitle.textContent =
                "Shiurim " +
                formatShiurimName(activeShiurim);

        }

        if (pdfSubtitle) {

            pdfSubtitle.textContent =
                data.subtitle || "Written Commentary";

        }

        if (pdfButton) {

            pdfButton.href = data.pdf;
            pdfButton.textContent =
                "📖 OPEN " + data.title + " PDF";

            pdfButton.style.display = "block";

        }

        if (pdfPlaceholder) {

            pdfPlaceholder.style.display = "none";

        }

    } else {

        if (pdfTitle) {

            if (activeShiurim) {

                pdfTitle.textContent =
                    formatShiurimName(activeShiurim);

            } else {

                pdfTitle.textContent =
                    "Shiurim";

            }

        }

        if (pdfSubtitle) {

            if (activeShiurim) {

                pdfSubtitle.textContent =
                    "Written commentary will be added to the archive.";

            } else {

                pdfSubtitle.textContent =
                    "Written teachings and reflections " +
                    "from the Jewmaica archive.";

            }

        }

        if (pdfButton) {

            pdfButton.removeAttribute("href");
            pdfButton.style.display = "none";

        }

        if (pdfPlaceholder) {

            pdfPlaceholder.style.display = "block";

        }

    }


    /*======================================================
      YOUTUBE VIDEO
    ======================================================*/

    if (
        data.video &&
        videoContainer &&
        youtubeVideo
    ) {

        /*
          YouTube embed URL

          IMPORTANT:
          The video ID must NOT contain:
          &t
          ?
          /
          or any other URL parameters.

          Correct:
          1nX7YK8YVcQ
        */

        youtubeVideo.src =
            "https://www.youtube.com/embed/" +
            data.video;

        youtubeVideo.title =
            "Shiurim - " + data.title;


        /*
          Allow YouTube playback
        */

        youtubeVideo.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; " +
            "encrypted-media; gyroscope; picture-in-picture; " +
            "web-share"
        );

        youtubeVideo.setAttribute(
            "allowfullscreen",
            ""
        );


        /*
          Show video
        */

        videoContainer.style.display = "block";


        /*
          Hide placeholder
        */

        if (videoPlaceholder) {

            videoPlaceholder.style.display = "none";

        }

    } else {

        /*
          No video
        */

        if (youtubeVideo) {

            youtubeVideo.removeAttribute("src");
            youtubeVideo.title = "Shiurim";

        }

        if (videoContainer) {

            videoContainer.style.display = "none";

        }

        if (videoPlaceholder) {

            videoPlaceholder.style.display = "flex";

        }

    }


    /*======================================================
      VIDEO DESCRIPTION
    ======================================================*/

    if (videoDescription) {

        if (
            activeShiurim &&
            data.video
        ) {

            videoDescription.textContent =
                "Shiur recording for " +
                formatShiurimName(activeShiurim) +
                ".";

        } else if (activeShiurim) {

            videoDescription.textContent =
                "A Shiur recording for " +
                formatShiurimName(activeShiurim) +
                " will be added to the archive.";

        } else {

            videoDescription.textContent =
                "Recordings of Jewmaica Shiurim " +
                "and Torah teachings.";

        }

    }


    /*======================================================
      SELECTED SIDEBAR ITEM
    ======================================================*/

    const shiurimLinks =
        document.querySelectorAll(
            "#shiurimList a[data-shiurim]"
        );

    shiurimLinks.forEach(function (link) {

        link.classList.remove("selected");

        if (
            activeShiurim &&
            link.dataset.shiurim === activeShiurim
        ) {

            link.classList.add("selected");

        }

    });

}


/*==========================================================
  FORMAT SHIURIM NAME
==========================================================*/

function formatShiurimName(key) {

    const names = {

        "shema": "SHEMA"

    };

    return (
        names[key] ||
        key ||
        "Shiurim"
    );

}


/*==========================================================
  SHIURIM SIDEBAR LINKS
==========================================================*/

function initialiseShiurimLinks() {

    const shiurimLinks =
        document.querySelectorAll(
            "#shiurimList a[data-shiurim]"
        );


    shiurimLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const selectedShiurim =
                    this.dataset.shiurim;


                /*
                  IMPORTANT:
                  The actual file is:

                  shiurim.html

                  NOT:

                  Shiurim.html

                  GitHub Pages is case-sensitive.
                */

                window.location.href =
                    "shiurim.html?shiurim=" +
                    encodeURIComponent(selectedShiurim);

            }
        );

    });

}


/*==========================================================
  SHIURIM SEARCH
==========================================================*/

function initialiseShiurimSearch() {

    const searchInput =
        document.getElementById("shiurimSearch");

    const shiurimLinks =
        document.querySelectorAll(
            "#shiurimList a"
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


            shiurimLinks.forEach(function (link) {

                const name =
                    link.textContent
                        .toLowerCase();

                const item =
                    link.closest("li");


                if (!item) {
                    return;
                }


                if (
                    name.includes(searchTerm)
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        }
    );

}


/*==========================================================
  NAVIGATION
==========================================================*/

function initialiseNavigation() {

    const links =
        document.querySelectorAll("nav a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                links.forEach(function (item) {

                    item.classList.remove("active");

                });

                this.classList.add("active");

            }
        );

    });

}


/*==========================================================
  PALM IMAGE SLIDER
==========================================================*/

/*
  IMPORTANT:
  script.js is in the ROOT.
  Therefore these paths are relative to the ROOT.
*/

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


    setInterval(function () {

        currentSlide++;


        if (
            currentSlide >=
            palmImages.length
        ) {

            currentSlide = 0;

        }


        palmImage.src =
            palmImages[currentSlide];


        dots.forEach(function (dot) {

            dot.classList.remove("active");

        });


        if (dots[currentSlide]) {

            dots[currentSlide]
                .classList
                .add("active");

        }

    }, 6000);

}


/*==========================================================
  FEATURE CARD ANIMATION
==========================================================*/

function initialiseCards() {

    const cards =
        document.querySelectorAll(".card");


    cards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.transform =
                    "translateY(-8px)";

                card.style.transition =
                    ".35s";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "translateY(0px)";

            }
        );

    });

}


/*==========================================================
  SEARCH
==========================================================*/

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


/*==========================================================
  SCROLL EFFECTS
==========================================================*/

function initialiseScrollEffects() {

    const cards =
        document.querySelectorAll(".card");


    if (cards.length === 0) {

        return;

    }


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    cards.forEach(function (card) {

        observer.observe(card);

    });

}


/*==========================================================
  END OF FILE
==========================================================*/
