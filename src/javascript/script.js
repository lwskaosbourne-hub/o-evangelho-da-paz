// Código para Fade-In e Fade-Out entre as divs da página:

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        // quanto do elemento está visível
        const ratio = entry.intersectionRatio;

        // aplica diretamente na opacidade
        entry.target.style.opacity = ratio;

    });

}, {
    threshold: Array.from({length:101}, (_,i)=> i/100)
});

sections.forEach(section => observer.observe(section));

//---------------------------------------------------------//