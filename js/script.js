/*======================toggle icon navbar===========================*/
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*======================scroll secctions active link===========================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onescroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + ']').classList.add('active');
            });
        };
    });
    /*======================sticky navbar===========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*======================remove toggle icon and navbar when navbar link (scroll)===========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 

};

 /*====================== scroll reveal ===========================*/
 ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });



 /*====================== typed js ===========================*/
const typed =new Typed('.multiple-text',{
    strings: ['University technician in programming', 'Programmer trainee full stack'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


 /*====================== alter mail ===========================*/
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {

    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="Email"]');
    const subjectInput = document.querySelector('input[name="Subject"]');
    const messageTextarea = document.querySelector('textarea[name="comments"]');

    if(
      nameInput.value === ''
    ){
      appendAlert('Please full name is required', 'danger')

    } else if(
      emailInput.value === ''
    ){
      appendAlert('Please email adress is required. Example: example@gmail.com', 'danger')

    } else if(
      subjectInput.value === ''
    ){
      appendAlert('Please email Subject is required.', 'danger')

    } else if(
      messageTextarea.value === ''
    ){
      appendAlert('Please your message is required.', 'danger')

    } else{

      appendAlert('The mail was sent successfully!', 'success')
   
    }
  })
}



  

