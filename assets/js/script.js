document.addEventListener("DOMContentLoaded", function () {
    let dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item =>{
        if (item.href === window.location.href) {
            item.classList.add("active-dropdown");
        }
    });
});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY>200) {
        navbar.classList.add('scroll-active'); 
    } else {
        navbar.classList.remove('scroll-active'); 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let section = document.querySelector(".our-records");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.remove("hidden");
          let counters = document.querySelectorAll(".our-records-para-one");
          let speed = 200;
          counters.forEach(counter => {
            let target = +counter.innerText;
            let count = 0;
            let increment = target / speed;
  
            let updateCounter = () => {
              count += increment;
              if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 10);
              } else {
                counter.innerText = target;
              }
            };
  
            updateCounter();
          });
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.5
    });
  
    observer.observe(section);
  });
  
  
window.addEventListener('scroll', function() {
    const background = document.querySelector('.our-records-background');
    const scrollY = window.scrollY;
    background.style.backgroundPosition = 'center ' + (scrollY * 0.6) + 'px';
});

window.addEventListener('scroll', function() {
  const background = document.querySelector('.customer-says-backgroundimage');
  let offset = window.pageYOffset; 
  background.style.backgroundPosition = 'center ' + (offset * 0.6) + 'px'
});



window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 1000); 
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }
    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});
