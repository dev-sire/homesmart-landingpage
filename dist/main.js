const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Responsive navigation menu

navBtn.addEventListener('click' ,()=>{
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
})

// Light/Dark Theme Switcher

const iconToggle = ()=>{
    moonIcon.classList.toggle('display-none');
    sunIcon.classList.toggle('display-none');
};
const themeCheck = ()=>{
    if(userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('display-none');
        return;
    }
    sunIcon.classList.add('display-none');
}
const themeSwitch = ()=>{
    if(document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme", "dark");
    iconToggle();
}
sunIcon.addEventListener("click", ()=>{
    themeSwitch();
});
moonIcon.addEventListener("click", ()=>{
    themeSwitch();
});
themeCheck();


// Animate On Scroll
AOS.init();