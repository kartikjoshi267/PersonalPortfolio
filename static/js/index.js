const navbar_section = document.querySelector(".nav-section");
const navbar = document.querySelector(".nav-bar");
const nav_items = document.querySelectorAll(".navbar-item");
const collapse_button = document.querySelector(".collapse-button");
const loading = document.querySelector(".loading");
const body_without_nav = document.body.children;

navbar_section.classList.add("disappear-nav-bar");
navbar_section.style.backgroundColor = "var(--nav-bg-color)";
collapse_button.style.color = "var(--button-color)";

// welcome screen
for (let index = 1; index < body_without_nav.length; index++) {
    body_without_nav[index].style.display = "none";
    body_without_nav[index].style.opacity = "0";
}

setTimeout(() => {
    loading.style.display = "none";
    for (let index = 1; index < body_without_nav.length; index++) {
        body_without_nav[index].style.display = "";
        for(let i = 0; i <= 100; i++){
            setTimeout(()=>{
                body_without_nav[index].style.opacity = i/100;
            }, 100);
        }
    }
}, 3700);

// Navbar animation settings
let hidden = true;
collapse_button.addEventListener('click', () => {
    if (hidden) {
        collapse_button.style.color = "var(--color)";
        navbar_section.style.backgroundColor = "var(--nav-bg-color)";
        navbar_section.classList.remove("disappear-nav-bar");
        navbar_section.classList.add("appear-nav-bar");
        collapse_button.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        let opacity_change = document.body.children;
        for (let index = 2; index < opacity_change.length; index++) {
            opacity_change[index].style.opacity = "0.5";
        }
        hidden = false;
    }
    else {
        navbar_section.classList.add("disappear-nav-bar");
        navbar_section.classList.remove("appear-nav-bar");
        setTimeout(() => {
            collapse_button.style.color = "var(--button-color)";
            navbar_section.style.backgroundColor = "var(--nav-bg-color)";
        }, 400);
        collapse_button.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        let opacity_change = document.body.children;
        for (let index = 2; index < opacity_change.length; index++) {
            opacity_change[index].style.opacity = "";
        }
        hidden = true;
    }
});


for (let index = 2; index < body_without_nav.length; index++) {
    body_without_nav[index].addEventListener('click', () => {
        if (!hidden) {
            navbar_section.classList.add("disappear-nav-bar");
            navbar_section.classList.remove("appear-nav-bar");
            setTimeout(() => {
                collapse_button.style.color = "var(--button-color)";
                navbar_section.style.backgroundColor = "var(--nav-bg-color)";
            }, 400);
            collapse_button.innerHTML = `<i class="fa-solid fa-bars"></i>`;
            let opacity_change = document.body.children;
            for (let index = 1; index < opacity_change.length; index++) {
                opacity_change[index].style.opacity = "";
            }
            hidden = true;
        }
    });
}


// Theme changing settings
const theme_button = document.querySelector('.theme-button');
let theme = "dark";

theme_button.addEventListener("click", () => {
    if (theme === "light") {
        theme_button.style.color = "rgb(255, 179, 0)"
        theme_button.innerHTML = "<span>Choose Theme</span><i class='fa-solid fa-sun'></i>"
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        theme = "dark";
    }
    else {
        theme_button.style.color = "rgb(2, 172, 245)"
        theme_button.innerHTML = "<span>Choose Theme</span><i class='fa-solid fa-moon'></i>"
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        theme = "light";
    }
})


// Bubble animations settings
const bg_animations = document.querySelector(".bg-animations");
let bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((elem) => {
    let randomX = Math.floor(Math.random() * 70);
    let randomY = Math.floor(Math.random() * 90);
    let randomOpacity = Math.floor(Math.random()) + 0.3;
    let random_width = Math.floor(Math.random() * 8) + 3;

    elem.style.transform = `translateX(${randomX}vw) translateY(${randomY}vh)`;
    elem.style.width = `${random_width}vw`;
    elem.style.height = `${random_width}vw`;
    elem.style.opacity = `${randomOpacity}`;
});

setInterval(() => {
    bubbles.forEach((elem) => {
        let randomX = Math.floor(Math.random() * 70);
        let randomXNeg = Math.floor(Math.random() * (-70));
        let randomY = Math.floor(Math.random() * 90);
        let randomYNeg = Math.floor(Math.random() * (-90));
        let randomOpacity = Math.floor(Math.random()) + 0.3;

        let rX = [randomX, randomXNeg][Math.floor(Math.random() * 2)]
        let rY = [randomY, randomYNeg][Math.floor(Math.random() * 2)]

        elem.style.transform = `translateX(${rX}vw) translateY(${rY}vh) scale(${[Math.random(), 1][Math.round(Math.random() * 2)]})`;
        elem.style.willChange = `transform`;
        elem.style.transition = `30s linear transform`;
        elem.style.opacity = `${randomOpacity}`;
    });
}, 3000);

const head_img = document.querySelector('.head-img');
head_img.firstElementChild.style.filter = "none";
head_img.firstElementChild.style.transform = "scale(1.1)";
setTimeout(() => {
    head_img.firstElementChild.style.transform = "scale(1)";
}, 5000);