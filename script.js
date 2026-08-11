/*==========================================================
    JEWMAICA
    The Living Archive of Jewish Jamaica

    Version : 0.1.0
    File    : script.js

==========================================================*/

"use strict";


/*==========================================================*
*PARASHAH DATA*
*==========================================================*/

const parashot = {

    "devarim": {
        title: "DEVARIM",
        subtitle: "Let's Make Justice Blind",
        pdf: "../PDFs/Dvrei Torah/Parasha Devarim - Let's Make Justice Blind.pdf",
        video: "LJnMRYc8rhc"
    },

    "vaetchanan": {
        title: "VAETCHANAN",
        subtitle: "Teshuva and Redemption",
        pdf: "../PDFs/Dvrei Torah/Parasha Va'Etchanan-Teshuva and Redemption.pdf",
        video: "VsQl2eEwQdY"
    },

    "eikev": {
        title: "EIKEV",
        subtitle: "Remaining Humble Amidst Assured Blessings",
        pdf: "../PDFs/Dvrei Torah/Parasha Eikev-Remaining Humble Amidst Assured Blessings.pdf",
        video: "G0SV5wJNXK8"
    },

      "reeh": {
        title: "REEH",
        subtitle: " ",
        pdf: "../PDFs/Dvrei Torah/",
        video: "30Rsmkp0Kik"
    },

      "shoftim ": {
        title: "SHOFTIM",
        subtitle: " ",
        pdf: "../PDFs/Dvrei Torah/",
        video: "gWIhrijkukc"
    },

      "ki Tetze": {
        title: "KI TETZE",
        subtitle: " ",
        pdf: "../PDFs/Dvrei Torah/",
        video: "U0l-wBKzNZ4"
    },

      "ki tavo": {
        title: "KI TAVO",
        subtitle: "The Continued Hope in Redemption",
        pdf: "../PDFs/Dvrei Torah/Parashat Ki Tavo – the Continued Hope in Redemption.pdf",
        video: "0BG3AC5iqrk"
    },

    "nitzavim": {
        title: "NITZAVIM",
        subtitle: "Returning to Ways of God",
        pdf: "../PDFs/Dvrei Torah/Parasha-Nitzavim-Returning-to-Ways-of-God.pdf",
        video: "pXjwO0QQ0KI"
        
     },

    "vayeilech": {
        title: "Va YEILECH",
        subtitle: "Shuvah Yisrael-Return Israel",
        pdf: "../PDFs/Dvrei Torah/Parasha Vayeilech – Shuvah Yisrael-Return Israel.pdf",
        video: "pXjwO0QQ0KI"
   
     },

    "haazinu": {
        title: "HAAZINU",
        subtitle: "Our Redemption foretold",
        pdf: "../PDFs/Dvrei Torah/Parasha HaAzinu – Our Redemption foretold.pdf",
        video: "tSrzyo519GU"
    
     },

    "vezot haberakhah": {
        title: "VEZOT HABERAKHAH",
        subtitle: "Sucession Planning",
        pdf: "../PDFs/Dvrei Torah/Parasha Vezot Haberakhah - Sucession Planning.pdf",
        video: " "
    }
        
};


/*==========================================================
    PAGE LOADED
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Jewmaica Version 0.1 Loaded");

    initialiseNavigation();

    initialiseHeroSlider();

    initialiseCards();

    initialiseSearch();

    initialiseScrollEffects();

});

/*==========================================================
    NAVIGATION
==========================================================*/

function initialiseNavigation() {

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", function () {

            links.forEach(item => {

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

}

/*==========================================================
    PALM IMAGE SLIDER
==========================================================*/

const palmImages = [

    "assets/images/palm.jpg",
    "assets/images/palm2.jpg",
    "assets/images/palm3.jpg",
    "assets/images/palm4.jpg"

];

let currentSlide = 0;

function initialiseHeroSlider() {

    const palmImage = document.querySelector(".palm-image img");

    const dots = document.querySelectorAll(".slider-dots span");

    if (!palmImage || dots.length === 0) return;

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= palmImages.length) {

            currentSlide = 0;

        }

        palmImage.src = palmImages[currentSlide];

        dots.forEach(dot => {

            dot.classList.remove("active");

        });

        dots[currentSlide].classList.add("active");

    }, 6000);

}

/*==========================================================
    FEATURE CARD ANIMATION
==========================================================*/

function initialiseCards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";
            card.style.transition = ".35s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

}

/*==========================================================
    SEARCH
==========================================================*/

function initialiseSearch() {

    const searchBox = document.querySelector(".top-right input");

    const searchButton = document.querySelector(".top-right button");

    if (!searchBox || !searchButton) return;

    searchButton.addEventListener("click", function (event) {

        event.preventDefault();

        const term = searchBox.value.trim();

        if (term === "") {

            alert("Please enter a search term.");

            return;

        }

        alert("Future Archive Search:\n\n" + term);

    });

}

/*==========================================================
    SCROLL EFFECTS
==========================================================*/

function initialiseScrollEffects() {

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    cards.forEach(card => {

        observer.observe(card);

    });

}

/*==========================================================
    FUTURE FUNCTIONS
==========================================================*/

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
