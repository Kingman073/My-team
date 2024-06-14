
let elInfoItemsImage = document.querySelectorAll('.info-items__oval-cont-text');
let elInfoItemsOvalConts = document.querySelectorAll(".info-items__oval");


elInfoItemsOvalConts.forEach(elInfoItemsOvalCont => {
    elInfoItemsOvalCont.addEventListener("click", () => {
        let card = elInfoItemsOvalCont.parentElement.children[0]
        card.classList.toggle("info-click-active")
        let img = elInfoItemsOvalCont.parentElement.childNodes[9].childNodes[1].childNodes[1]
        img.classList.toggle("info-items__oval-cont-text-transform")

        let a = elInfoItemsOvalCont.children[0]
        a.classList.toggle("info-items__oval-active")
    })
});


let elHeaderNavOpen = document.querySelector(".header-nav__open-list");
let elHeaderNavHamburger = document.querySelector(".header-nav__hamburger");
let elHeaderNavHamburgerList = document.querySelector(".header-nav__hamburger-list");

if(elHeaderNavOpen){
    elHeaderNavOpen.addEventListener("click", () => {
        elHeaderNavHamburger.classList.add("header-nav__hamburger-active")
        document.body.style.overflowY = 'hidden'
    });
};


elHeaderNavHamburgerList.addEventListener("click" ,() => {
    elHeaderNavHamburger.classList.remove("header-nav__hamburger-active")
    document.body.style.overflowY = 'inherit'
})