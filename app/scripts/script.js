document.addEventListener('DOMContentLoaded', () => {
    if (document.body.offsetWidth <= 600) {
        const hamburgerStatus = document.querySelector('#hamburger-status');
        const navMobile = document.querySelector('.nav-mobile');
        hamburgerStatus.addEventListener("change", () => {
            if (hamburgerStatus.checked == true) {
                navMobile.classList.contains('hidden') ? navMobile.classList.remove('hidden'):""
                navMobile.classList.add('show')
            }else if (hamburgerStatus.checked == false) {
                navMobile.classList.add('hidden')
                setTimeout(() => {
                    navMobile.classList.contains('show') ? navMobile.classList.remove('show'):""
                }, 500);
            }
        })
    
    }
})
