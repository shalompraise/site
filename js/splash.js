const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=> {
    setTimeout(()=> {
        splash.classList.add('display-none');
    }, 2400);
})



/*==================== PAGE RELOAD BACK TO TOP ====================*/ 
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }