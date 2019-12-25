const checkIfStandalone = () => !!window.matchMedia("(display-mode: standalone)").matches;
const isPwa = checkIfStandalone();
const isWebsite = !isPwa;
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    isPwa && body.classList.add("pwa");
    isWebsite && body.classList.add("mobile-web");
});
