// ========== loading screen ==========
var loader = document.getElementById('loadingscreen');
window.addEventListener('load',() => {
        loader.classList.add('hidden');
});


// ========== scroll navigate ==========
var navlinks = document.querySelectorAll('.nav-links');
for(nav of navlinks){
    nav.addEventListener('click',function(e){
        console.log(e.target);
        var target = document.querySelector(e.target.attributes.linkss.value);
        scroller.scrollTo(target);
    });
}


// ========== mobile nav bar open ==========
var menu_opener = document.getElementById('menu-opener');
var mobile_nav = document.getElementById('mobile-nav-menu');

function openMenuToggle(){
    if(mobile_nav.classList.contains('hidden')){
        openNav();
    }else{
        closeNav();
    }
}

mobile_nav.addEventListener('click',closeNav);

function openNav(){
    menu_opener.innerHTML = `<i class="bi bi-x-lg p-1 px-2 rounded-sm shadow-md shadow-mode_txt/30 dark:shadow-none bg-accent_color dark:bg-dark_accent_color text-lg ml-6 text-dark_mode_txt dark:text-para_txt"></i>`;
    mobile_nav.classList.remove('hidden');
}

function closeNav(){
    menu_opener.innerHTML = `<i class="bi bi-list text-3xl ml-6 text-mode_txt dark:text-dark_mode_txt"></i>`;
    mobile_nav.classList.add('hidden');
}


// ========== project model open ==========
function openModel(el){
    document.getElementById(el).classList.remove('hidden');
}

function closeModel(el){
    document.getElementById(el).classList.add('hidden');
}

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('model')){
        e.target.parentElement.classList.add('hidden');
    }
});


//========== dark mode ==========
var theme = document.getElementById('theme');
var bodyBg = document.getElementById('body-bg');
var logo = document.getElementById('logo');

theme.addEventListener('click',() => {
    if(body.classList.contains('dark')){
        body.classList.remove('dark');
        theme.innerHTML = `<i class="bi bi-moon-stars text-xl md:text-2xl"></i>`;
        bodyBg.style = "background : url('./assets/images/light home bg (1).jpg')"
        logo.src = "./assets/icons/logo dark (1).png"
    }else{
        body.classList.add('dark');
        theme.innerHTML = `<i class="bi bi-sun text-2xl md:text-2xl"></i>`;
        bodyBg.style = "background : url('./assets/images/dark home bg (1).jpg')"
        logo.src = "./assets/icons/logo.png" 
    }
});


// ====================================================== //
var style = 'background-color:#17181F;color:#938fff;font-family:sans-serif;font-weight:100;font-size:16px;padding:13px 20px;';
console.log('%c 🍅 Designed and Developed by Nyein Chan Aung.',style);
console.log('%c Thank you for interesting my Portfolio.',style);
// ====================================================== //