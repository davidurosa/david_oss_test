const menu =  document.querySelector('#menu');
const header_nav = document.querySelector('.header__nav')

 console.log('hola');




console.log(header_nav);

window.addEventListener('scroll',()=>{
    document.querySelector('.header').classList.toggle('window-scrolled',window.scrollY >0);
    
})


menu.addEventListener('click', () => {
    header_nav.classList.toggle('active');
});