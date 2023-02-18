const acc = () => {
    const elems = document.querySelectorAll('.faq__body_item');

    if(elems?.length > 0) {
        elems?.forEach(i => {
            i.addEventListener('click', (e) => {
                const body = i.querySelector('.faq__body_item_body')
                if(e.target.classList.contains('faq__body_item_head')) {
                    
                    i.classList.toggle('active');
    
                    if(i.classList.contains('active')) {
                        body.style.height = `${body.scrollHeight}px`
                    } else {
                        body.style.height = '0px';
                    }
                }
            })
        })
    }
}


export default acc;
