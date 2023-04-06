const faders = document.querySelectorAll('.fade-in');
const faders1 = document.querySelectorAll('.fade-in-2');
const faders2 = document.querySelectorAll('.fade-in-3');
const faders3 = document.querySelectorAll('.fade-in-4');
const faders1M = document.querySelectorAll('.fade-in-2-mobile');
const faders2M = document.querySelectorAll('.fade-in-3-mobile');
const faders3M = document.querySelectorAll('.fade-in-4-mobile');


const appearOptions = {
    treshold: 1,
    rootMargin: '0px 0px -200px 0px'
};

const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

faders1.forEach(fader => {
    appearOnScroll.observe(fader);
});

faders2.forEach(fader => {
    appearOnScroll.observe(fader);
});

faders3.forEach(fader => {
    appearOnScroll.observe(fader);
});

faders1M.forEach(fader => {
    appearOnScroll.observe(fader);
});

faders2M.forEach(fader => {
    appearOnScroll.observe(fader);
});

faders3M.forEach(fader => {
    appearOnScroll.observe(fader);
});

