/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION FAQS ====================*/
const faqsContent = document.getElementsByClassName('faqs__content'),
      faqsHeader = document.querySelectorAll('.faqs__header')

function toggleFaqs() {
    let itemClass = this.parentNode.className

    for(i=0; i < faqsContent.length; i++) {
        faqsContent[i].className = 'faqsContent faqs__close'
    }

    if(itemClass === 'faqsContent faqs__close') {
        this.parentNode.className = 'faqs__content faqs__open'
    }
}

faqsHeader.forEach((el) => {
    el.addEventListener('click', toggleFaqs)
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


function changeSrc () {
    document.getElementById('stories-img').src="assets/img/stories2-dark.svg"
}


/*==================== HEADER ON SCROLL ====================*/ 
const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 125) {
        headerEl.classList.add('header-scrolled')
    } else if (window.scrollY < 125) {
        headerEl.classList.remove('header-scrolled')
    }
})


/*==================== OPEN MAIL FORM POPUP ====================*/ 
const mailPopup = document.getElementById('mail-fm'),
      mailOpen = document.getElementById('open-mail'),
      mailClose = document.getElementById('close-btn'),
      wrapper = document.getElementById('wrapper')

if(mailOpen) {
    mailOpen.addEventListener('click', () => {
        mailPopup.classList.add('active-form'),
        wrapper.classList.add('blur');
    })
}

if(mailClose) {
    mailClose.addEventListener('click', () => {
        mailPopup.classList.remove('active-form'),
        wrapper.classList.remove('blur');
    })
}


/*==================== PAGE RELOAD BACK TO TOP ====================*/ 
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }



/*==================== MENU SHOW Y HIDDEN ====================*/
const popupCard = document.getElementById('popup__card'),
      buttonPop = document.getElementById('ext-btn'),
      closePop = document.getElementById('right')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(buttonPop) {
    buttonPop.addEventListener('click', () => {
        popupCard.classList.add('pop-active')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}