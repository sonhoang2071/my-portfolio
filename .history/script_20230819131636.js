new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation:true,
    anchors:["1","2","3","4","5"],
    navigationTooltips: ['Trang 1', 'Trang 2', 'Trang 3'] 
});
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

  