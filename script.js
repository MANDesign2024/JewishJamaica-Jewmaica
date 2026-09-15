/* =========================================================
   JEWMAICA
   The Living Archive of Jewish Jamaica
   script.js
========================================================= */


/* =========================================================
   PARASHOT DATA
========================================================= */

const parashot = {

  "default": {
    title: "PARASHAT HASHAVUA",
    subtitle: "Explore the Weekly Torah Portion",
    pdf: "",
    video: ""
  },

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
    title: "RE'eh",
    subtitle: "",
    pdf: "",
    video: "30Rsmkp0Kik"
  },

  "shoftim": {
    title: "SHOFTIM",
    subtitle: "",
    pdf: "",
    video: "gWIhrijkukc"
  },

  "ki-tetze": {
    title: "KI TETZE",
    subtitle: "",
    pdf: "",
    video: "U0l-wBKzNZ4"
  },

  "ki-tavo": {
    title: "KI-TABO",
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
    title: "VA YEILECH",
    subtitle: "Shuvah Yisrael-Return Israel",
    pdf: "../PDFs/Dvrei Torah/Parasha Vayeilech – Shuvah Yisrael-Return Israel.pdf",
    video: "pXjwO0QQ0KI"
  },

  "haazinu": {
    title: "HAAZINU",
    subtitle: "Our Redemption Foretold",
    pdf: "../PDFs/Dvrei Torah/Parasha HaAzinu – Our Redemption foretold.pdf",
    video: "tSrzyo519GU"
  },

  "vezot-haberakhah": {
    title: "VEZOT-HABERAKHAH",
    subtitle: "Succession Planning",
    pdf: "../PDFs/Dvrei Torah/Parasha Vezot Haberakhah - Sucession Planning.pdf",
    video: ""
  }

};


/* =========================================================
   SHIURIM DATA
========================================================= */

const shiurim = {

  "default": {
    title: "SHIURIM",
    subtitle: "Explore our Shiurim",
    pdf: "",
    video: ""
  },

  "shema": {
    title: "SHEMA",
    subtitle: "",
    pdf: "",
    video: "1nX7YK8YVcQ"
  }

};


/* =========================================================
   CONVERT HEBCAL PARASHAH NAMES TO WEBSITE KEYS
========================================================= */

function convertHebcalParashaToKey(name) {

  if (!name) {
    return "default";
  }

  let key = name
    .toLowerCase()
    .trim()
    .replace(/^parashat\s+/i, "")
    .replace(/['’]/g, "")
    .replace(/[–—-]/g, "-")
    .replace(/\s+/g, "-");


  const aliases = {

    "devarim": "devarim",

    "vaetchanan": "vaetchanan",
    "va-etchanan": "vaetchanan",

    "eikev": "eikev",

    "reeh": "reeh",
    "re-eh": "reeh",

    "shoftim": "shoftim",

    "ki-teitzei": "ki-tetze",
    "ki-tetzei": "ki-tetze",
    "ki-tetze": "ki-tetze",

    "ki-tavo": "ki-tavo",

    "nitzavim": "nitzavim",

    "vayeilech": "vayeilech",
    "va-yeilech": "vayeilech",

    "haazinu": "haazinu",

    "vezot-haberakhah": "vezot-haberakhah",
    "vezot-haberacha": "vezot-haberakhah",

    /*
       Combined Parashah
    */

    "nitzavim-vayeilech": "nitzavim-vayeilech"

  };


  return aliases[key] || key;

}


/* =========================================================
   GET CURRENT / UPCOMING WEEKLY TORAH PORTION
   HEBCAL - SPANISH TOWN, JAMAICA
========================================================= */

async function getCurrentParasha() {

  const today = new Date();

  const year =
    today.getFullYear();

  const month =
    today.getMonth() + 1;

  const day =
    today.getDate();


  const apiUrl =
    "https://www.hebcal.com/shabbat" +
    "?cfg=json" +
    "&geonameid=3488465" +
    "&M=on" +
    "&leyning=off" +
    "&lg=s" +
    "&gy=" + year +
    "&gm=" + month +
    "&gd=" + day;


  try {

    const response =
      await fetch(apiUrl);


    if (!response.ok) {

      throw new Error(
        "Hebcal API request failed."
      );

    }


    const data =
      await response.json();


    if (
      !data.items ||
      !Array.isArray(data.items)
    ) {

      throw new Error(
        "No Hebcal data returned."
      );

    }


    const parashaItem =
      data.items.find(function(item) {

        return (
          item.category === "parashat"
        );

      });


    if (
      !parashaItem ||
      !parashaItem.title
    ) {

      throw new Error(
        "No weekly Parashah found."
      );

    }


    const parashaKey =
      convertHebcalParashaToKey(
        parashaItem.title
      );


    console.log(
      "Current Weekly Parashah:",
      parashaItem.title
    );


    console.log(
      "Website Parashah Key:",
      parashaKey
    );


    if (!parashot[parashaKey]) {

      console.warn(
        "Parashah found but not yet defined in website data:",
        parashaItem.title,
        parashaKey
      );

      return "default";

    }


    return parashaKey;


  } catch (error) {

    console.error(
      "Unable to determine current Parashah from Hebcal:",
      error
    );


    return "default";

  }

}


/* =========================================================
   FORMAT PARASHAH NAME
========================================================= */

function formatParashaName(key) {

  if (!key) {
    return "HaShavua";
  }

  if (!parashot[key]) {
    return key;
  }

  return parashot[key].title;

}


/* =========================================================
   INITIALISE PARASHAH PAGE
========================================================= */

async function initialiseParashahPage() {

  const parashaTitle =
    document.getElementById("parashaTitle");

  const parashaSubtitle =
    document.getElementById("parashaSubtitle");

  const breadcrumbParasha =
    document.getElementById("breadcrumbParasha");

  const commentaryDescription =
    document.getElementById("commentaryDescription");

  const pdfResource =
    document.getElementById("pdfResource");

  const pdfTitle =
    document.getElementById("pdfTitle");

  const pdfSubtitle =
    document.getElementById("pdfSubtitle");

  const pdfButton =
    document.getElementById("pdfButton");

  const pdfPlaceholder =
    document.getElementById("pdfPlaceholder");

  const youtubeVideo =
    document.getElementById("youtubeVideo");

  const videoContainer =
    document.getElementById("videoContainer");

  const videoPlaceholder =
    document.getElementById("videoPlaceholder");

  const videoParashaName =
    document.getElementById("videoParashaName");


  /*
     If this is not the Dvrei Torah page,
     do nothing.
  */

  if (!parashaTitle) {
    return;
  }


  /* =======================================================
     CHECK FOR USER-SELECTED PARASHAH
  ======================================================= */

  const urlParams =
    new URLSearchParams(
      window.location.search
    );

  const requestedParasha =
    urlParams.get("parasha");


  /* =======================================================
     DETERMINE WHICH PARASHAH TO DISPLAY
  ======================================================= */

  let selectedParasha;


  if (
    requestedParasha &&
    parashot[requestedParasha]
  ) {

    /*
       A Parashah was deliberately selected
       through the URL/sidebar.
    */

    selectedParasha =
      requestedParasha;

  } else {

    /*
       No Parashah was selected.

       Automatically determine the current
       weekly Torah portion from Hebcal.
    */

    selectedParasha =
      await getCurrentParasha();

  }


  /* =======================================================
     GET PARASHAH DATA
  ======================================================= */

  const data =
    parashot[selectedParasha] ||
    parashot["default"];


  /* =======================================================
     UPDATE HERO TITLE
  ======================================================= */

  if (parashaTitle) {

    parashaTitle.textContent =
      data.title;

  }


  /* =======================================================
     UPDATE HERO SUBTITLE
  ======================================================= */

  if (parashaSubtitle) {

    parashaSubtitle.textContent =
      data.subtitle ||
      "Explore the Weekly Torah Portion";

  }


  /* =======================================================
     UPDATE BREADCRUMB
  ======================================================= */

  if (breadcrumbParasha) {

    breadcrumbParasha.textContent =
      data.title;

  }


  /* =======================================================
     UPDATE COMMENTARY DESCRIPTION
  ======================================================= */

  if (commentaryDescription) {

    if (data.subtitle) {

      commentaryDescription.textContent =
        data.subtitle;

    } else {

      commentaryDescription.textContent =
        "Explore the Torah reading and resources for " +
        data.title +
        ".";

    }

  }


  /* =======================================================
     UPDATE PDF RESOURCE
  ======================================================= */

  if (data.pdf) {

    if (pdfResource) {
      pdfResource.style.display = "block";
    }


    if (pdfTitle) {

      pdfTitle.textContent =
        "Parashat " +
        formatParashaName(
          selectedParasha
        );

    }


    if (pdfSubtitle) {

      pdfSubtitle.textContent =
        data.subtitle ||
        "Written Commentary";

    }


    if (pdfButton) {

      /*
         Do NOT use encodeURIComponent()
         on the complete PDF path.
      */

      pdfButton.href =
        data.pdf;

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

    if (pdfResource) {

      pdfResource.style.display =
        "block";

    }


    if (pdfTitle) {

      pdfTitle.textContent =
        "Parashat " +
        formatParashaName(
          selectedParasha
        );

    }


    if (pdfSubtitle) {

      pdfSubtitle.textContent =
        "Written commentary coming soon.";

    }


    if (pdfButton) {

      pdfButton.removeAttribute(
        "href"
      );

      pdfButton.style.display =
        "none";

    }


    if (pdfPlaceholder) {

      pdfPlaceholder.style.display =
        "block";

    }

  }


  /* =======================================================
     UPDATE YOUTUBE VIDEO
  ======================================================= */

  if (data.video) {

    if (youtubeVideo) {

      youtubeVideo.src =
        "https://www.youtube.com/embed/" +
        data.video;

      youtubeVideo.title =
        "Torah Reading - " +
        data.title;

      youtubeVideo.style.display =
        "block";

    }


    if (videoContainer) {

      videoContainer.style.display =
        "block";

    }


    if (videoPlaceholder) {

      videoPlaceholder.style.display =
        "none";

    }


    if (videoParashaName) {

      videoParashaName.textContent =
        data.title;

    }

  } else {

    if (youtubeVideo) {

      youtubeVideo.removeAttribute(
        "src"
      );

      youtubeVideo.style.display =
        "none";

    }


    if (videoContainer) {

      videoContainer.style.display =
        "none";

    }


    if (videoPlaceholder) {

      videoPlaceholder.style.display =
        "block";

    }

  }


  /* =======================================================
     HIGHLIGHT CURRENT PARASHAH IN SIDEBAR
  ======================================================= */

  const parashaLinks =
    document.querySelectorAll(
      "#parashaList a"
    );


  parashaLinks.forEach(
    function(link) {

      link.classList.remove(
        "selected"
      );

    }
  );


  const currentLink =
    document.querySelector(
      '#parashaList a[data-parasha="' +
      selectedParasha +
      '"]'
    );


  if (currentLink) {

    currentLink.classList.add(
      "selected"
    );

  }


  /* =======================================================
     UPDATE PAGE TITLE
  ======================================================= */

  document.title =
    "Parashat " +
    data.title +
    " | Jewmaica";

}


/* =========================================================
   PARASHAH SEARCH
========================================================= */

function initialiseParashahSearch() {

  const searchInput =
    document.getElementById(
      "parashaSearch"
    );

  const parashaList =
    document.getElementById(
      "parashaList"
    );


  if (
    !searchInput ||
    !parashaList
  ) {

    return;

  }


  const parashaLinks =
    parashaList.querySelectorAll(
      "a"
    );


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


/* =========================================================
   PARASHAH LINKS
========================================================= */

function initialiseParashahLinks() {

  const parashaLinks =
    document.querySelectorAll(
      "#parashaList a[data-parasha]"
    );


  parashaLinks.forEach(
    function(link) {

      link.addEventListener(
        "click",
        function() {

          /*
             Normal href navigation is allowed.

             Example:
             ?parasha=devarim
             ?parasha=eikev
             ?parasha=haazinu
          */

        }
      );

    }
  );

}


/* =========================================================
   SHIURIM PAGE
========================================================= */

function initialiseShiurimPage() {

  const shiurimTitle =
    document.getElementById(
      "shiurimTitle"
    );

  const shiurimSubtitle =
    document.getElementById(
      "shiurimSubtitle"
    );

  const breadcrumbShiurim =
    document.getElementById(
      "breadcrumbShiurim"
    );

  const commentaryDescription =
    document.getElementById(
      "commentaryDescription"
    );

  const pdfTitle =
    document.getElementById(
      "pdfTitle"
    );

  const pdfSubtitle =
    document.getElementById(
      "pdfSubtitle"
    );

  const pdfButton =
    document.getElementById(
      "pdfButton"
    );

  const pdfPlaceholder =
    document.getElementById(
      "pdfPlaceholder"
    );

  const videoContainer =
    document.getElementById(
      "videoContainer"
    );

  const youtubeVideo =
    document.getElementById(
      "youtubeVideo"
    );

  const videoPlaceholder =
    document.getElementById(
      "videoPlaceholder"
    );

  const videoDescription =
    document.getElementById(
      "videoDescription"
    );


  /*
     If this is not the Shiurim page,
     do nothing.
  */

  if (!shiurimTitle) {

    return;

  }


  /* =======================================================
     GET SHIURIM FROM URL
  ======================================================= */

  const urlParams =
    new URLSearchParams(
      window.location.search
    );


  const requestedShiurim =
    urlParams.get(
      "shiurim"
    );


  /* =======================================================
     DETERMINE SHIURIM DATA
  ======================================================= */

  let activeShiurim = null;

  let data =
    shiurim["default"];


  if (
    requestedShiurim &&
    shiurim[requestedShiurim]
  ) {

    activeShiurim =
      requestedShiurim;

    data =
      shiurim[requestedShiurim];

  }


  /* =======================================================
     UPDATE HERO
  ======================================================= */

  shiurimTitle.textContent =
    data.title;


  if (shiurimSubtitle) {

    shiurimSubtitle.textContent =
      data.subtitle ||
      "Explore our Shiurim";

  }


  /* =======================================================
     UPDATE BREADCRUMB
  ======================================================= */

  if (breadcrumbShiurim) {

    if (activeShiurim) {

      breadcrumbShiurim.textContent =
        formatShiurimName(
          activeShiurim
        );

    } else {

      breadcrumbShiurim.textContent =
        "Shiurim";

    }

  }


  /* =======================================================
     UPDATE DESCRIPTION
  ======================================================= */

  if (commentaryDescription) {

    if (activeShiurim) {

      commentaryDescription.textContent =
        "Written teachings and reflections on " +
        formatShiurimName(
          activeShiurim
        ) +
        ".";

    } else {

      commentaryDescription.textContent =
        "Explore our Shiurim and Torah teachings from the Jewmaica archive.";

    }

  }


  /* =======================================================
     UPDATE PDF
  ======================================================= */

  if (data.pdf) {

    if (pdfTitle) {

      pdfTitle.textContent =
        "Shiurim " +
        formatShiurimName(
          activeShiurim
        );

    }


    if (pdfSubtitle) {

      pdfSubtitle.textContent =
        data.subtitle ||
        "Written Commentary";

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


    if (pdfPlaceholder) {

      pdfPlaceholder.style.display =
        "none";

    }

  } else {

    if (pdfTitle) {

      pdfTitle.textContent =
        activeShiurim
          ? formatShiurimName(
              activeShiurim
            )
          : "Shiurim";

    }


    if (pdfSubtitle) {

      pdfSubtitle.textContent =
        activeShiurim
          ? "Written commentary will be added to the archive."
          : "Written teachings and reflections from the Jewmaica archive.";

    }


    if (pdfButton) {

      pdfButton.removeAttribute(
        "href"
      );

      pdfButton.style.display =
        "none";

    }


    if (pdfPlaceholder) {

      pdfPlaceholder.style.display =
        "block";

    }

  }


  /* =======================================================
     UPDATE YOUTUBE VIDEO
  ======================================================= */

  if (
    data.video &&
    videoContainer &&
    youtubeVideo
  ) {

    youtubeVideo.src =
      "https://www.youtube.com/embed/" +
      data.video;


    youtubeVideo.title =
      "Shiurim - " +
      data.title;


    youtubeVideo.style.display =
      "block";


    videoContainer.style.display =
      "block";


    if (videoPlaceholder) {

      videoPlaceholder.style.display =
        "none";

    }

  } else {

    if (youtubeVideo) {

      youtubeVideo.removeAttribute(
        "src"
      );

      youtubeVideo.style.display =
        "none";

    }


    if (videoContainer) {

      videoContainer.style.display =
        "none";

    }


    if (videoPlaceholder) {

      videoPlaceholder.style.display =
        "block";

    }

  }


  /* =======================================================
     VIDEO DESCRIPTION
  ======================================================= */

  if (videoDescription) {

    if (
      activeShiurim &&
      data.video
    ) {

      videoDescription.textContent =
        "Shiur recording for " +
        formatShiurimName(
          activeShiurim
        ) +
        ".";

    } else if (activeShiurim) {

      videoDescription.textContent =
        "A Shiur recording for " +
        formatShiurimName(
          activeShiurim
        ) +
        " will be added to the archive.";

    } else {

      videoDescription.textContent =
        "Recordings of Jewmaica Shiurim and Torah teachings.";

    }

  }


  /* =======================================================
     HIGHLIGHT SELECTED SHIURIM
  ======================================================= */

  const shiurimLinks =
    document.querySelectorAll(
      "#shiurimList a[data-shiurim]"
    );


  shiurimLinks.forEach(
    function(link) {

      link.classList.remove(
        "selected"
      );


      if (
        activeShiurim &&
        link.dataset.shiurim ===
        activeShiurim
      ) {

        link.classList.add(
          "selected"
        );

      }

    }
  );


  /* =======================================================
     UPDATE PAGE TITLE
  ======================================================= */

  document.title =
    activeShiurim
      ? formatShiurimName(
          activeShiurim
        ) +
        " | Shiurim | Jewmaica"
      : "Shiurim | Jewmaica";

}


/* =========================================================
   FORMAT SHIURIM NAME
========================================================= */

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


/* =========================================================
   SHIURIM SIDEBAR LINKS
========================================================= */

function initialiseShiurimLinks() {

  const shiurimLinks =
    document.querySelectorAll(
      "#shiurimList a[data-shiurim]"
    );


  shiurimLinks.forEach(
    function(link) {

      /*
         We deliberately allow the HTML href
         to control navigation.

         This avoids hard-coding a page filename
         into JavaScript.
      */

      link.addEventListener(
        "click",
        function() {

          const selectedShiurim =
            this.dataset.shiurim;


          console.log(
            "Selected Shiurim:",
            selectedShiurim
          );

        }
      );

    }
  );

}


/* =========================================================
   SHIURIM SEARCH
========================================================= */

function initialiseShiurimSearch() {

  const searchInput =
    document.getElementById(
      "shiurimSearch"
    );


  const shiurimList =
    document.getElementById(
      "shiurimList"
    );


  if (
    !searchInput ||
    !shiurimList
  ) {

    return;

  }


  const shiurimLinks =
    shiurimList.querySelectorAll(
      "a"
    );


  searchInput.addEventListener(
    "input",
    function() {

      const searchTerm =
        this.value
          .toLowerCase()
          .trim();


      shiurimLinks.forEach(
        function(link) {

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


/* =========================================================
   NAVIGATION
========================================================= */

function initialiseNavigation() {

  const navLinks =
    document.querySelectorAll(
      "nav a"
    );


  navLinks.forEach(
    function(link) {

      const href =
        link.getAttribute(
          "href"
        );


      if (!href) {

        return;

      }

    }
  );

}


/* =========================================================
   HERO SLIDER
========================================================= */

function initialiseHeroSlider() {

  /*
     Reserved for the existing Jewmaica
     hero-slider functionality.

     Keeping this function prevents errors
     if other pages call it.
  */

}


/* =========================================================
   CARDS
========================================================= */

function initialiseCards() {

  /*
     Reserved for existing card functionality.
  */

}


/* =========================================================
   SEARCH
========================================================= */

function initialiseSearch() {

  /*
     Reserved for existing site search functionality.
  */

}


/* =========================================================
   SCROLL EFFECTS
========================================================= */

function initialiseScrollEffects() {

  /*
     Reserved for existing scroll effects.
  */

}


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    console.log(
      "Jewmaica Version 0.1 Loaded"
    );


    /*
       D'VREI TORAH / PARASHAH
    */

    initialiseParashahPage();

    initialiseParashahSearch();

    initialiseParashahLinks();


    /*
       SHIURIM
    */

    initialiseShiurimPage();

    initialiseShiurimSearch();

    initialiseShiurimLinks();


    /*
       GENERAL SITE FUNCTIONS
    */

    initialiseNavigation();

    initialiseHeroSlider();

    initialiseCards();

    initialiseSearch();

    initialiseScrollEffects();

  }
);


/* =========================================================
   END OF FILE
========================================================= */
