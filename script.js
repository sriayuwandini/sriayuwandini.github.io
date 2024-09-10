// // header

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// typing efects

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!', 'Freelancer!', 'UI Designer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 2000,
    loop: true,
})

// active link state on scroll
// get all link
let navLinks = document.querySelectorAll('nav ul li a');
// get all section
let sections = document.querySelectorAll('section');
console.log(sections);

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        if(scrollPos >= section.offsetTop && scrollPos <= section.offsetTop + section.offsetHeight) {
            // active link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});