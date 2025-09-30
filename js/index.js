window.addEventListener('scroll', () => {

    const header = document.querySelector('header');
    const titleMenu = document.querySelector('section-title')

    if (window.scrollY > 10) {
        header.classList.add('scrolled')
    }
    
    if(window.scrollY > 10){
        titleMenu.classList.add('animate__backInDown')        
    }
    
    else {
        header.classList.remove('scrolled')
    }

    
})


const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.item');


filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        items.forEach(item => {
            if (filter === "todos" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    })
})

const btnMenu = document.getElementById("btn-menu");
const nav = document.querySelector("header nav");

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
});



const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

console.log("Hola Mundo")


nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Auto-play cada 5s
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);
