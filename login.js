const slides = document.querySelectorAll('[data-slide]');
const tabBar = document.querySelector('[data-tabs]');
const tabs = tabBar.querySelectorAll('[data-tab]');

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        tabs.forEach(tabSlide=>{
            tabSlide.setAttribute('tabindex', '-1'); 
        })
        tab.setAttribute('tabindex', '0');
        // query the slides...
        slides.forEach(slide=>{
            slide.hidden = true;
            if(slide.id == tab.getAttribute('aria-controls')) slide.removeAttribute('hidden');
        })
    });
});