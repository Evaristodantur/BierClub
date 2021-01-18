window.addEventListener('load', () => {

    function sendNewsletterNotification() {
        let modalNewsletter = document.getElementById('modal-newsletter')
        let buttonNewsletter = document.querySelector('#modal-newsletter button');
        let divNewsletter = document.querySelector('#modal-newsletter div.background-newsletter-modal div')

        if(modalNewsletter != null) {
            modalNewsletter.style.display = 'inline-block';

            if(window.innerWidth <= 1200) { divNewsletter.style.left = '40%'; }
            if(window.innerWidth <= 900) { divNewsletter.style.left = '37%'; }
            if(window.innerWidth <= 750) { divNewsletter.style.left = '32%'; }
            if(window.innerWidth <= 600) { divNewsletter.style.left = '25%'; }
            if(window.innerWidth <= 500) { divNewsletter.style.left = '20%'; }
            if(window.innerWidth <= 400) { divNewsletter.style.left = '12%'; }
            if(window.innerWidth <= 350) { divNewsletter.style.left = '6%'; }
            if(window.innerWidth <= 325) { divNewsletter.style.width = '263px'; divNewsletter.style.left = '9%'; }
            if(window.innerWidth <= 315) { divNewsletter.style.left = '6%'; }
            if(window.innerWidth <= 300) { divNewsletter.style.left = '1%'; }
            if(window.innerWidth <= 290) { divNewsletter.style.left = '0%'; }
            
            
            buttonNewsletter.addEventListener('click', () => {
                modalNewsletter.style.display = 'none';
            });
            
            document.querySelector('#modal-newsletter div.background-newsletter-modal').addEventListener('click', () =>{
                modalNewsletter.style.display = 'none';
            });
        }
    }

    sendNewsletterNotification();
});