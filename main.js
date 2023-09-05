// function movebar() {
//     const toggle = document.getElementById("toggle");
//     const navclose = document.getElementById("nav-close");
//     const movnav = document.querySelector(".nav-items");


//     if (movnav.classList.contains("active")) {
//         movnav.classList.remove("active");


//     } else {
//         movnav.classList.add("active");


//     }
// }










const navItems = document.getElementById('navItems');
const toggle = document.getElementById('toggle');
const closeBtn = document.getElementById('nav-close'); 

toggle.addEventListener('click', () => {

        navItems.classList.toggle('show');
        closeBtn.classList.toggle("show")
        toggle.classList.remove("show")
    

});


closeBtn.addEventListener('click', () => {

        navItems.classList.remove('show');
        closeBtn.classList.remove("show")
        toggle.classList.toggle("show")


 
});


