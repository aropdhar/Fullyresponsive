//navbar responsive section

let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');



menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// scrollreval section

const sr = ScrollReveal ({
  
    distance: '60px',
    duration: 2500,
    reset: true


});


sr.reveal('.home_text', {delay:300, origin:'left'});

sr.reveal('.image', {delay:300, origin:'right'});

sr.reveal('.breakfast , .about ,.menu ,.contact',{delay:300, origin:'bottom'});

// menu card slide section

sr.reveal('#slide',{delay:300, origin:'left'});
sr.reveal('#slide2',{delay:300, origin:'right'});
sr.reveal('#slide3',{delay:300, origin:'bottom'});
sr.reveal('#slide4',{delay:300, origin:'top'});