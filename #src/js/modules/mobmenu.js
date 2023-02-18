const mobmenu = () => {
    const trigger = document.querySelector('.header__top_mob_btn')
    const menu = document.querySelector('.mobmenu');
    const header = document.querySelector('.header');

    if(trigger && menu) {
        trigger.addEventListener('click', () => {
            header.classList.toggle('active')
            menu.classList.toggle('active')
            trigger.classList.toggle('active')
        })
    }
}


export default mobmenu;