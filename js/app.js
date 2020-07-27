$(document).foundation()

// funcion query small 
function myFunctionSmall(small) {
    if (small.matches) { // If media query matches
        $(window).scroll(function (event) {
            var scrollTop = $(window).scrollTop();
            if (scrollTop < 599) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 600) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 1500) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 3000) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid #E0E0E0';
            }
        });
    } 
}

var small = window.matchMedia("(max-width: 39.9375em)")
myFunctionSmall(small) // Call listener function at run time
small.addListener(myFunctionSmall) // Attach listener function on state changes
// fin funcion small

// funcion query medium 
function myFunctionMedium(medium) {
    if (medium.matches) { // If media query matches
        $(window).scroll(function (event) {
            var scrollTop = $(window).scrollTop();
            if (scrollTop < 399) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 400) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 900) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 1500) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid #E0E0E0';
            }
        });
    } 
}

var medium = window.matchMedia("(min-width: 40em) and (max-width: 63.9375em)")
myFunctionMedium(medium) // Call listener function at run time
medium.addListener(myFunctionMedium) // Attach listener function on state changes
// fin funcion medium

// funcion query large 
function myFunctionLarge(large) {
    if (large.matches) { // If media query matches
        $(window).scroll(function (event) {
            var scrollTop = $(window).scrollTop();
            if (scrollTop < 399) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 400) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 900) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 1300) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid #E0E0E0';
            }
        });
    } 
}

var large = window.matchMedia("(min-width: 64em) and (max-width: 74.9375em)")
myFunctionLarge(large) // Call listener function at run time
large.addListener(myFunctionLarge) // Attach listener function on state changes
// fin funcion large

// funcion query xlarge 
function myFunctionXlarge(xlarge) {
    if (xlarge.matches) { // If media query matches
        $(window).scroll(function (event) {
            var scrollTop = $(window).scrollTop();
            if (scrollTop < 399) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 400) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 900) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid #E0E0E0';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid transparent';
            }
            if (scrollTop > 1300) {
                document.getElementById('menu-item-inicio').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-servicios').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-nosotros').style.borderBottom = '5px solid transparent';
                document.getElementById('menu-item-contacto').style.borderBottom = '5px solid #E0E0E0';
            }
        });
    } 
}

var xlarge = window.matchMedia("(min-width: 75em)")
myFunctionXlarge(xlarge) // Call listener function at run time
xlarge.addListener(myFunctionXlarge) // Attach listener function on state changes
// fin funcion large








