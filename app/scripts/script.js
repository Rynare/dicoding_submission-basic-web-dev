document.addEventListener('DOMContentLoaded', () => {
  const mainHeader = document.querySelector('header')
  const navMain = document.querySelector('header .nav-main')

  if (document.body.offsetWidth <= 600) {
    const hamburgerStatus = document.querySelector('#hamburger-status');
    const navMobile = document.querySelector('.nav-mobile');

    hamburgerStatus.addEventListener("change", () => {
      if (hamburgerStatus.checked) {
        navMobile.style.display = 'block'
        navMobile.classList.add('show')
      } else if (hamburgerStatus.checked == false) {
        navMobile.classList.add('hidden')
        setTimeout(() => {
          navMobile.style.display = "none"
          navMobile.classList.remove('show')
          navMobile.classList.remove('hidden')
        }, 500);
      }
    })

    if (document.body.offsetWidth <= 360) {
      const asideProfile = document.querySelector('aside')
      const profileMobileBtn = document.querySelector('aside .profile-mobile')
      const asideHiddenOffset = asideProfile.offsetWidth - profileMobileBtn.offsetWidth + 2
      asideProfile.style.top = mainHeader.offsetHeight + 52 + 10 + 'px'
      asideProfile.style.right = '-' + asideHiddenOffset + 'px'

      profileMobileBtn.addEventListener('click', () => {
        profileMobileBtn.classList.contains('show') ? profileMobileBtn.classList.remove('show') : profileMobileBtn.classList.add('show')
        profileMobileBtn.classList.contains('show') ? asideProfile.style.right = 0 + 'px' : asideProfile.style.right = '-' + asideHiddenOffset + 'px'
      })
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY >= mainHeader.offsetHeight / 2) {
        mainHeader.classList.contains('scrolled') ? '' : mainHeader.classList.add('scrolled')
      } else {
        mainHeader.classList.contains('scrolled') ? mainHeader.classList.remove('scrolled') : ''
      }
    })
  }


})
