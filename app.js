let navIcon = document.getElementById("navIcon")
navIcon.addEventListener("click", toggleNavIvon)

function toggleNavIvon() {
    navIcon.classList.toggle("open");
}

const links = document.getElementById("myLinks");
function navPopOut() {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

const en = document.getElementById("en")
const sv = document.getElementById("sv")
let templateText = document.getElementById("templateText")
en.addEventListener("click", changeLang)
sv.addEventListener("click", changeLang)


function changeLang(){
    if(event.target == en) {
        templateText.innerHTML = "<br>My name is Fanny Buhlér and I’m a Frontend Developer student at Hyper Island."
    } else if (event.target == sv) {
        templateText.innerHTML = "<br>Jag heter Fanny Buhlér och pluggar till Frontend Developer på Hyper Island."
    }
}

// very handsome yes close nav pls
const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener("click", closeNav)
link2.addEventListener("click", closeNav)
link3.addEventListener("click", closeNav)

function closeNav() {
    links.style.display = "none";
    toggleNavIvon();
}

let contactMe = document.querySelector(".contactMe")
contactMe.addEventListener("click", function(){
    let email = document.getElementById("email");
    email.classList.toggle("hidden");
});


// Scroll function

(function(window, undefined) // Code in a function to create an isolate scope
{
    'use strict';
    var height_fixed_header = -40, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
        speed = 800,
        moving_frequency = 15, // Affects performance ! High number makes scroll more smooth
        links = document.getElementsByTagName('a'),
        href;
    
    for(var i = 0; i < links.length; i++)
    {
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if(href !== null && href.length > 1 && href.indexOf('#') != -1) // href.substr(0, 1) == '#'
        {
            links[i].onclick = function()
            {
                var element,
                    href = this.attributes.href.nodeValue.toString(),
                    url = href.substr(0, href.indexOf('#')),
                    id = href.substr(href.indexOf('#') + 1);
                if (element = document.getElementById(id))
                {

                    var hop_count = (speed - (speed % moving_frequency)) / moving_frequency, // Always make an integer
                        getScrollTopDocumentAtBegin = getScrollTopDocument(),
                        gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
                    
                    if (window.history && typeof window.history.pushState == 'function')
                        window.history.pushState({}, undefined, url + '#' + id); // Change URL for modern browser

                    for (var i = 1; i <= hop_count; i++)
                    {
                        (function()
                        {
                            var hop_top_position = gap * i;
                            setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency * i);
                        })();
                    }

                    return false;
                }
            };
        }
    }
    
    var getScrollTopElement =  function(e)
    {
        var top = height_fixed_header * -1;

        while (e.offsetParent != undefined && e.offsetParent != null)
        {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };
    
    var getScrollTopDocument = function()
    {
        return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
    };

    
})(window);

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });