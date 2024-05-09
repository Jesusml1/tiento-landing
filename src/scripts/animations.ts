import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    gsap.from("header", {
        opacity: 0,
        duration: 1,
    });

    gsap.from(".hero-left-side", {
        x: -300,
        opacity: 0,
        duration: 1,
    });
    gsap.from(".hero-right-side", {
        x: 300,
        opacity: 0,
        duration: 1,
    });

    gsap.from(".about-section", {
        scrollTrigger: ".about-section",
        y: 200,
        opacity: 0,
        duration: 1,
    });

    gsap.from(".mission-card", {
        scrollTrigger: ".mission-card",
        x: -300,
        opacity: 0,
        duration: 1,
    });
    gsap.from(".vision-card", {
        scrollTrigger: ".vision-card",
        x: 300,
        opacity: 0,
        duration: 1,
    });

    gsap.from(".roadmap-section", {
        scrollTrigger: ".roadmap-section",
        y: 200,
        opacity: 0,
        duration: 1,
    });

    gsap.from(".team-section", {
        scrollTrigger: ".team-section",
        y: 200,
        opacity: 0,
        duration: 1,
    });

    gsap.from(".partners-section", {
        scrollTrigger: ".partners-section",
        y: 200,
        opacity: 0,
        duration: 1,
    });

    gsap.from(".join-card", {
        scrollTrigger: ".join-card",
        opacity: 0,
        duration: 1,
    });

    gsap.from("footer", {
        scrollTrigger: "footer",
        opacity: 0,
        duration: 1,
    });
});