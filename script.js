
const translations = {
    en: {
        welcome: "Hello, I'm Rabin",
        intro: "Welcome to my personal biography website.",
        moreBtn: "Know More",
        aboutTitle: "About Me",
        aboutText: "My name is Rabin. I am an IT Officer.",
        educationTitle: "Education",
        educationText: "My educational details will be added here.",
        careerTitle: "Career",
        careerText: "My professional details will be added here.",
        contactTitle: "Contact",
        contactText: "Contact information will be added here."
    },

    np: {
        welcome: "नमस्कार, म रविन हुँ",
        intro: "मेरो व्यक्तिगत जीवनी वेबसाइटमा स्वागत छ।",
        moreBtn: "थप जानकारी",
        aboutTitle: "मेरो परिचय",
        aboutText: "मेरो नाम रविन हो। म आईटी अधिकृतको रूपमा कार्यरत छु।",
        educationTitle: "शिक्षा",
        educationText: "मेरो शैक्षिक विवरण यहाँ राखिनेछ।",
        careerTitle: "पेशा",
        careerText: "मेरो व्यावसायिक विवरण यहाँ राखिनेछ।",
        contactTitle: "सम्पर्क",
        contactText: "मेरो सम्पर्क विवरण यहाँ राखिनेछ।"
    }
};

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

function changeLanguage(language) {
    const content = translations[language];

    Object.keys(content).forEach(function(id) {
        document.getElementById(id).innerText = content[id];
    });

    document.querySelectorAll("[data-en]").forEach(function(item) {
        item.innerText = item.dataset[language];
    });

    languageBtn.innerText =
        language === "en" ? "नेपाली" : "English";

    document.documentElement.lang =
        language === "en" ? "en" : "ne";

    currentLanguage = language;
}

languageBtn.addEventListener("click", function() {
    const newLanguage =
        currentLanguage === "en" ? "np" : "en";

    changeLanguage(newLanguage);
});
