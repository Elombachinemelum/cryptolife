const signToggles = document.querySelectorAll("[data-toggle]");
const faqPs = document.querySelectorAll("[data-p]");
const faqQues = document.querySelectorAll("[data-q]");


faqQues.forEach(faqQue=>{
    faqQue.addEventListener("click", ()=>{
        signToggles.forEach(signToggle=>{
            // click the equivalent toggle sign...
            if(faqQue.getAttribute("aria-controls") == signToggle.getAttribute("aria-controls")){
                signToggle.click();
            }
        })
    })
})

signToggles.forEach(signToggle=>{
    signToggle.addEventListener("click", ()=>{
        signToggles.forEach(sign=>{
            // reset to default...
            sign.innerHTML = "+";
            sign.classList.remove("minus");
        })

        faqPs.forEach(fapP=>{
            fapP.classList.remove("faq-p-collaps");
            if(signToggle.getAttribute("aria-controls") == fapP.id){
                fapP.classList.add("faq-p-collaps");
            }
        })
        // setup the clicked...
        signToggle.innerHTML = "-";
        signToggle.classList.add("minus");
    })
})