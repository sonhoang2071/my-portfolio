new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation:true,
    slidesNavigation : true,
    anchors:["1","2","3","4","5"],
    navigationTooltips: ['profile', 'about', 'experi','Trang 4','Trang 5'] 
});
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

  