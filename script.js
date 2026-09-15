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
   JEWMAICA — SHIURIM
   ========================================================= */

"use strict";


/* =========================================================
   SHIURIM DATA
   ========================================================= */

const shiurim = {

    default: {

        title: "SHIURIM",

        subtitle:
            "Explore our Shiurim",

        video: "",

        pdf: ""

    },


    shema: {

        title: "SHEMA",

        subtitle:
            "Hear and Understand the Shema",

        video:
            "1nX7YK8YVcQ",

        pdf: ""

    },


    tefillah: {

        title: "TEFILLAH",

        subtitle:
            "Prayer and Devotion",

        video: "",

        pdf: ""

    }

};


/* =========================================================
   INITIALISE SHIURIM PAGE
   ========================================================= */

function initialiseShiurimPage() {

    const title =
        document.getElementById("shiurimTitle");

    const subtitle =
        document.getElementById("shiurimSubtitle");

    const breadcrumb =
        document.getElementById("breadcrumbShiurim");

    const videoContainer =
        document.getElementById("videoContainer");

    const youtubeVideo =
        document.getElementById("youtubeVideo");

    const videoPlaceholder =
        document.getElementById("videoPlaceholder");

    const videoDescription =
        document.getElementById("videoDescription");


    /*
     * Make sure this is actually the Shiurim page.
     */

    if (!title) {

        return;

    }


    /* =====================================================
       READ URL

       Your page uses:

       ?shiur=shema

       NOT:

       ?shiurim=shema
       ===================================================== */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const selectedShiur =
        params.get("shiur");


    console.log(
        "Jewmaica Shiur selected:",
        selectedShiur
    );


    /* =====================================================
       SELECT DATA
       ===================================================== */

    let activeKey = "default";


    if (
        selectedShiur &&
        Object.prototype.hasOwnProperty.call(
            shiurim,
            selectedShiur
        )
    ) {

        activeKey =
            selectedShiur;

    }


    const data =
        shiurim[activeKey];


    console.log(
        "Jewmaica Shiur data:",
        data
    );


    /* =====================================================
       HERO
       ===================================================== */

    title.textContent =
        data.title;


    if (subtitle) {

        subtitle.textContent =
            data.subtitle;

    }


    /* =====================================================
       BREADCRUMB
       ===================================================== */

    if (breadcrumb) {

        breadcrumb.textContent =
            formatShiurName(activeKey);

    }


    /* =====================================================
       DESCRIPTION
       ===================================================== */

    if (videoDescription) {

        if (data.video) {

            videoDescription.textContent =
                "Shiur recording for " +
                formatShiurName(activeKey) +
                ".";

        }

        else {

            videoDescription.textContent =
                "Recordings of Shiurim.";

        }

    }


    /* =====================================================
       VIDEO
       ===================================================== */

    if (
        data.video &&
        videoContainer &&
        youtubeVideo
    ) {

        /*
         * YouTube video ID:
         *
         * 1nX7YK8YVcQ
         *
         * DO NOT add:
         *
         * &t
         * ?t
         * /watch?v=
         */

        const videoURL =
            "https://www.youtube.com/embed/" +
            data.video;


        console.log(
            "Loading YouTube:",
            videoURL
        );


        /*
         * Load video.
         */

        youtubeVideo.src =
            videoURL;


        /*
         * Update iframe title.
         */

        youtubeVideo.title =
            formatShiurName(activeKey) +
            " — Jewmaica Shiur";


        /*
         * YouTube permissions.
         */

        youtubeVideo.setAttribute(
            "allow",
            "accelerometer; autoplay; " +
            "clipboard-write; encrypted-media; " +
            "gyroscope; picture-in-picture; " +
            "web-share"
        );


        youtubeVideo.setAttribute(
            "allowfullscreen",
            ""
        );


        /*
         * SHOW VIDEO
         */

        videoContainer.style.display =
            "block";


        /*
         * HIDE PLACEHOLDER
         */

        if (videoPlaceholder) {

            videoPlaceholder.style.display =
                "none";

        }

    }

    else {

        /*
         * No video available.
         */

        if (youtubeVideo) {

            youtubeVideo.src = "";

        }


        if (videoContainer) {

            videoContainer.style.display =
                "none";

        }


        if (videoPlaceholder) {

            videoPlaceholder.style.display =
                "flex";

        }

    }


    /* =====================================================
       HIGHLIGHT SELECTED SHIUR
       ===================================================== */

    const shiurLinks =
        document.querySelectorAll(
            "#shiurimList a[data-shiur]"
        );


    shiurLinks.forEach(
        function (link) {

            link.classList.remove(
                "selected"
            );


            if (
                link.dataset.shiur ===
                activeKey
            ) {

                link.classList.add(
                    "selected"
                );

            }

        }
    );

}


/* =========================================================
   FORMAT SHIUR NAME
   ========================================================= */

function formatShiurName(key) {

    const names = {

        default:
            "Shiurim",

        shema:
            "Shema",

        tefillah:
            "Tefillah"

    };


    return (
        names[key] ||
        "Shiurim"
    );

}


/* =========================================================
   SHIURIM LINKS
   ========================================================= */

function initialiseShiurimLinks() {

    const links =
        document.querySelectorAll(
            "#shiurimList a[data-shiur]"
        );


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    const shiur =
                        this.dataset.shiur;


                    /*
                     * IMPORTANT:
                     *
                     * Actual page:
                     *
                     * shiurim.html
                     *
                     * Parameter:
                     *
                     * ?shiur=
                     */

                    window.location.href =
                        "shiurim.html?shiur=" +
                        encodeURIComponent(
                            shiur
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

    const search =
        document.getElementById(
            "shiurimSearch"
        );


    if (!search) {

        return;

    }


    const links =
        document.querySelectorAll(
            "#shiurimList a[data-shiur]"
        );


    search.addEventListener(
        "input",
        function () {

            const term =
                this.value
                    .toLowerCase()
                    .trim();


            links.forEach(
                function (link) {

                    const text =
                        link.textContent
                            .toLowerCase();


                    const item =
                        link.closest("li");


                    if (!item) {

                        return;

                    }


                    if (
                        text.includes(term)
                    ) {

                        item.style.display =
                            "";

                    }

                    else {

                        item.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* =========================================================
   START SHIURIM
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initialiseShiurimPage();

        initialiseShiurimLinks();

        initialiseShiurimSearch();

    }
);


/* =========================================================
   END OF FILE
========================================================= */
