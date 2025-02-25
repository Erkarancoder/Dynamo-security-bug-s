let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1"; // Corrected opacity to be a string "1" instead of +1

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate current word letters out
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i *10);
    });

    nextWord.style.opacity = "1"; // Ensure next word fades in correctly

    // Animate next word letters in
    Array.from(nextWord.children).forEach((letter, i) => {
        let index = i; // Capture i in a new variable to ensure correct reference
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + index * 5); // Use captured index here
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 1000); // Start the interval to change the text every 700ms




// -----------circle skills -------------------------- ///

const cricles = document.querySelectorAll(".circle");
cricles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    // Create points elements
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"> </div>`;
    }
    elem.innerHTML = points;

    // Select the newly created .points elements
    const pointsmarked = elem.querySelectorAll(".points");

    // Add 'marked' class to the correct number of points
    for (let i = 0; i < percent; i++) {
        pointsmarked[i].classList.add('marked');
    }
});


let typed = new Typed("#elemt", {
    strings: ["TX KARAN"],
    typeSpeed: 100,
    showCursor:false,
    loop: true
});




// mix it up portfolio section used on js --------------//

var mixer = mixitup('.Portfolio-gallery');


// -----------acticv menu -------------------------- ///
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function acticvmenu(){
    let len = section.length;
    // Loop through sections to find the active one
    while (len-- && window.scrollY + 97 < section[len].offsetTop) {}

    // Remove active class from all menu links
    menuli.forEach(sec => sec.classList.remove("active"));
    
    // Add active class to the correct menu link
    menuli[len] && menuli[len].classList.add("active");
}

// Call the function to initialize the active menu on load
acticvmenu();

// Add event listener for scroll
window.addEventListener("scroll", acticvmenu);



// header sticky menu in js used on -------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.screenY > 50);
});



// porallax ///////////////////////

const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entery)=>{
        if (entery.isIntersecting) {
            entery.target.classList.add("show-item");

        }else{
            entery.target.classList.remove("show-item");
        }
    });
});

const scrollbar = document.querySelectorAll(".scroll-scale");
scrollbar.forEach((el)=>observer.observe(el));

const scrollbottom = document.querySelectorAll(".scroll-bottom");
scrollbottom.forEach((el)=>observer.observe(el));

const scrolltop = document.querySelectorAll(".scroll-top");
scrolltop.forEach((el)=>observer.observe(el));
