export function main() { 

    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');
    const body = document.querySelector('.body');
    burgerIcon.addEventListener('click', () => {
        body.classList.toggle('no-scroll')
        burgerMenu.classList.toggle('active');
        burgerIcon.classList.toggle('open');
    });
    

}
