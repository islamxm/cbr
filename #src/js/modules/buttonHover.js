const buttonHover = () => {
    const btns = document.querySelectorAll('.button');

    if(btns?.length > 0) {
        btns.forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                let mask = e.currentTarget.querySelector('.mask');
                mask.classList.add('show');
                mask.classList.remove('hide');
            })
            btn.addEventListener('mouseleave', (e) => {
                let mask = e.currentTarget.querySelector('.mask');
                mask.classList.remove('show');
                mask.classList.add('hide');
            })
        })
    }
}

export default buttonHover;