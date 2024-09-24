const darkSwitch = document.querySelector("#dark-switch");
const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkText = document.querySelector("#dark-text");
// const darkTextChange = document.querySelector("#dark-text-change");
const html = document.documentElement;
let isDarkMode = false;

const toggleTheme = () => {
    isDarkMode = !isDarkMode; //! ဟုတ်နေတာကို မဟုတ်ဘူးလို့ ငြင်းလိုက်တာ
    switchTheme();
};

const switchTheme = () => {
    isDarkMode ? toDark() : toLight();
    // or
    // if (isDarkMode) {
    //     toDark()
    // } else {
    //     toLight()
    // }
}

const toDark = () => {
    darkSwitchIcon.classList.add("translate-x-full", "rotate-[360deg]")
    darkSwitchIcon.innerHTML = `<img src="/assets/icon/DarkMode.svg" alt="">`
    // darkTextChange.innerHTML = "Dark"
    // darkSwitch.classList.remove("bg-[#779ff7]")
    // darkSwitch.classList.add("bg-slate-100")
    localStorage.setItem("data-theme" , "dark")
    html.classList.add("dark")
    darkText.classList.add("-translate-x-7")
    darkText.innerHTML = "ON"
}

const toLight = () => {
    darkSwitchIcon.classList.remove("translate-x-full")
    setTimeout(() => {
        darkSwitchIcon.classList.remove("rotate-[360deg]")
    }, 200)
    darkSwitchIcon.innerHTML = `<img src="/assets/icon/LightMode.svg" alt="">`
    // darkTextChange.innerHTML = "Light"
    // darkSwitch.classList.add("bg-[#779ff7]")
    // darkSwitch.classList.remove("bg-slate-100")
    localStorage.removeItem("data-theme")
    html.classList.remove("dark")
    darkText.classList.remove("-translate-x-7")
    darkText.innerHTML = "OFF"
}

const dataTheme = localStorage.getItem("data-theme")

dataTheme === "dark" ? toDark() : toLight();
// or
// if(dataTheme === "dark") {
//    toDark()
// } else {
//    toLight()
// }

//Swiper Slide
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //ScrollReveal
  ScrollReveal().reveal('.headline', {
    delay: 300,
    origin: 'bottom',
    distance: '20px',
    interval: 300,
    scale: 0.85,
    reset: true,
  }
  );