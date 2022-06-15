const hamburger = document.querySelector("[data-hamburger]");
const cross = document.querySelector("[data-cross]");
const navList = document.querySelector("[data-navList]");
const playBtn = document.querySelector("[data-play]");
const videoBox = document.querySelector("[data-video]");
const navLinks = document.querySelectorAll("[data-navLink]");


function handleClick(evt){
    if(!navList.classList.contains('seen')){
        navList.classList.add('seen');
        cross.classList.add('seen');
        hamburger.classList.add('hidden');
    }else{
        navList.classList.remove('seen');
        cross.classList.remove('seen');
        hamburger.classList.remove('hidden');
    }
    evt.stopPropagation(); //stops event from triggering other events in bubble tree.
}

const handleDissmisal = ()=>{
    if(navList.classList.contains('seen')){
        navList.classList.remove('seen');
        cross.classList.remove('seen');
        hamburger.classList.remove('hidden');
    }
}

document.addEventListener('click', (evt)=>{
    const {target} = evt;
    if(!target.getAttribute("aria-controls")){
        videoBox.classList.remove("video-seen");
    }
    if(navList.classList.contains('seen')) handleDissmisal();
})

hamburger.addEventListener('click', handleClick);

navLinks.forEach(link=>{
    link.addEventListener('click', handleDissmisal)
});


cross.addEventListener('click', handleClick);

playBtn.addEventListener('click',  (evt)=>{
    const {target} = evt;
    if(target.getAttribute("aria-controls") === "videoBox"){
        videoBox.classList.toggle("video-seen");
    }
});

