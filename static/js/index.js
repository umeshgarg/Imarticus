document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (navId, bodyId, headerId) => {
        nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)


    }

    showNavbar('nav-bar', 'body-pd', 'header')

    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

});