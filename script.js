// ACTIVE NAVLINKS
function setActiveNavItem(index){
    const navLink = document.querySelectorAll('.nav--items > a');
    navLink.forEach(link=> {
        link.classList.remove('active');
    })

    navLink[index].classList.add('active');
}

