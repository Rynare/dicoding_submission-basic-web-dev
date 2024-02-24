document.addEventListener('DOMContentLoaded', () => {
    if (document.body.offsetWidth <= 600) {
        const hamburgerStatus = document.querySelector('#hamburger-status');
        const navMobile = document.querySelector('.nav-mobile');
        const navMain = document.querySelector('header')

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

        if (document.body.offsetWidth <= 360) {
            const asideProfile = document.querySelector('aside')
            const profileMobileBtn = document.querySelector('aside .profile-mobile')
            const asideHiddenOffset = asideProfile.offsetWidth - profileMobileBtn.offsetWidth + 2
            asideProfile.style.top = navMain.offsetHeight + 10 + 'px'
            asideProfile.style.right = '-'+ asideHiddenOffset + 'px'

            profileMobileBtn.addEventListener('click', () => {
                profileMobileBtn.classList.contains('show') ? profileMobileBtn.classList.remove('show') : profileMobileBtn.classList.add('show')
                profileMobileBtn.classList.contains('show') ? asideProfile.style.right = 0 + 'px' : asideProfile.style.right = '-'+ asideHiddenOffset + 'px'
            })
        }
    }
})
