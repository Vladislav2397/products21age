var navLinks=document.getElementsByClassName("nav__link"),nav=document.querySelector(".nav"),navBtn=document.getElementsByClassName("burger")[0],isShow=!0;function toggleNav(){isShow=!isShow,nav.style.transform=isShow?"translateX(100%)":"translateX(0)"}
var navLinks = document.getElementsByClassName('nav__link');
var nav = document.querySelector('.nav');
var navBtn = document.getElementsByClassName('burger')[0];
var isShow = true;

function toggleNav() {
    isShow = !isShow;

    if (isShow) {
        nav.style.transform = "translateX(100%)";
    } else {
        nav.style.transform = "translateX(0)";
    }
}
var strStart="translateX(-",strEnd="px)",items=document.getElementsByClassName("carousel__item"),carousel=document.querySelector(".carousel");if(items.length>0)var pos=0,step=items[0].offsetWidth+20;var carouselSlide=function(t){var e=carousel.offsetWidth,s=0;s=270==e?items.length-2:540==e?items.length-3:items.length-4,"left"===t&&pos>=step?pos-=step:"right"==t&&pos<=step*s&&(pos+=step);for(var r=0;r<items.length;r++)items[r].style.transform=strStart+pos+strEnd};
var strStart = "translateX(-";
var strEnd = "px)";

var items = document.getElementsByClassName("carousel__item");
var carousel = document.querySelector(".carousel");

if (items.length > 0) {
    var pos = 0;
    var step = items[0].offsetWidth + 20;
}


var carouselSlide = function(move) {

    var lenCarousel = carousel.offsetWidth;
    var numOfStep = 0;
    if (lenCarousel == 270) {
        numOfStep = items.length - 2;
    } else if (lenCarousel == 270 * 2) {
        numOfStep = items.length - 3;
    } else {
        numOfStep = items.length - 4;
    }

    if (move === "left" && pos >= step)
        pos -= step;
    else if (move == "right" && pos <= step * numOfStep)
        pos += step;
    for (var i = 0; i < items.length; i++) {
        items[i].style.transform = strStart + pos + strEnd;
    }
}
var companyArrows=document.querySelector(".company__arrows"),companyLinksHidden=document.querySelector(".company__links--hidden"),companyItemAccordionToggle=!0,companyItemAccordion=function(){companyItemAccordionToggle?(companyArrows.style.display="none",companyLinksHidden.style.transform="scaleX(1)",companyLinksHidden.style.height="100%"):(companyArrows.style.display="flex",companyLinksHidden.style.transform="scaleX(0)",companyLinksHidden.style.height="0"),companyItemAccordionToggle=!companyItemAccordionToggle};
var companyArrows = document.querySelector(".company__arrows");
var companyLinksHidden = document.querySelector(".company__links--hidden");
var companyItemAccordionToggle = true;


var companyItemAccordion = function() {
  if (companyItemAccordionToggle) {
    companyArrows.style.display = 'none';
    companyLinksHidden.style.transform = 'scaleX(1)';
    companyLinksHidden.style.height = '100%';
  }
  else {
    companyArrows.style.display = 'flex';
    companyLinksHidden.style.transform = 'scaleX(0)';
    companyLinksHidden.style.height = '0'; 
  }
  companyItemAccordionToggle = !companyItemAccordionToggle;
}
var nav=document.querySelector(".nav"),buttonUp=document.querySelector(".button-up"),body=document.querySelector("body"),sticky=nav.offsetTop+30;window.onscroll=function(){body.classList.contains("page-home")&&(window.pageYOffset>=sticky?nav.classList.add("nav__fixed"):nav.classList.remove("nav__fixed")),window.pageYOffset>900?buttonUp.style.display="flex":buttonUp.style.display="none"};
var nav = document.querySelector(".nav");
var buttonUp = document.querySelector(".button-up");
var body = document.querySelector("body");
var sticky = nav.offsetTop + 30;


window.onscroll = function() {

	if (body.classList.contains('page-home')) {
		// Nav sticky
		if (window.pageYOffset >= sticky) {
			nav.classList.add("nav__fixed");
		} else {
			nav.classList.remove("nav__fixed");
		}
	}

	// Button 'up'
	if (window.pageYOffset > 900) {
		buttonUp.style.display = "flex";
	} else {
		buttonUp.style.display = "none";
	}
}
var menu=document.querySelector(".menu-catalog"),menuBtn=document.querySelector(".menu-catalog__btn"),navBtn=document.querySelector(".burger"),isMenuItemShow=!0;function menuItemsToggle(){isMenuItemShow?(menu.style.transform="translateX(0)",navBtn.style.display="none"):(menu.style.transform="translateX(-100%)",navBtn.style.display="flex"),isMenuItemShow=!isMenuItemShow}menuBtn.setAttribute("onclick","menuItemsToggle()");
var menu = document.querySelector(".menu-catalog");
var menuBtn = document.querySelector(".menu-catalog__btn");
var navBtn = document.querySelector(".burger");

var isMenuItemShow = true;

menuBtn.setAttribute('onclick', 'menuItemsToggle()');


function menuItemsToggle() {
    if (isMenuItemShow) {
        menu.style.transform = 'translateX(0)';
        navBtn.style.display = 'none';
    } else {
        menu.style.transform = 'translateX(-100%)';
        navBtn.style.display = 'flex';
    }
    isMenuItemShow = !isMenuItemShow;
}
for(var nav_links=document.getElementsByClassName("tabs__link"),content_panes=document.getElementsByClassName("tabs__pane"),i=0;i<nav_links.length;i++)nav_links[i].setAttribute("onclick",`navSwitch(${i})`);var navSwitch=function(n){for(var s=0;s<nav_links.length;s++)nav_links[s].classList.remove("tabs__link--active"),content_panes[s].classList.remove("tabs__pane--show");nav_links[n].classList.add("tabs__link--active"),content_panes[n].classList.add("tabs__pane--show")};
var nav_links = document.getElementsByClassName("tabs__link");
var content_panes = document.getElementsByClassName("tabs__pane");

for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].setAttribute('onclick', `navSwitch(${i})`)
}

var navSwitch = function(digit) {
    for (var i = 0; i < nav_links.length; i++) {
        nav_links[i].classList.remove("tabs__link--active");
        content_panes[i].classList.remove("tabs__pane--show");
    }

    nav_links[digit].classList.add('tabs__link--active');
    content_panes[digit].classList.add("tabs__pane--show");
}