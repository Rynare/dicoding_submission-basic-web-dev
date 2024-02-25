document.addEventListener('DOMContentLoaded', () => {
  const mainHeader = document.querySelector('header')
  const navMain = document.querySelector('header .nav-main')
  const getBrowserWidth = () => document.body.offsetWidth;
  const hamburgerStatus = document.querySelector('#hamburger-status');

  allEventListenerToggle()

  window.addEventListener('resize', () => {
    allEventListenerToggle()
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY >= mainHeader.offsetHeight / 2) {
      mainHeader.classList.contains('scrolled') ? '' : mainHeader.classList.add('scrolled')
    } else {
      mainHeader.classList.contains('scrolled') ? mainHeader.classList.remove('scrolled') : ''
    }
  })

  function allEventListenerToggle() {
    asideProfileBtnEventToggle()
    hamburgerBtnEventToggle()
  }

  function hamburgerBtnOnClick() {
    const navMobile = document.querySelector('.nav-mobile');
    if (hamburgerStatus.checked) {
      navMobile.style.display = 'block'
      navMobile.classList.add('show')
    } else {
      navMobile.classList.add('hidden')
      setTimeout(() => {
        navMobile.style.display = "none"
        navMobile.classList.remove('show')
        navMobile.classList.remove('hidden')
      }, 500);
    }
  }

  function hamburgerBtnEventToggle(params) {
    if (getBrowserWidth() <= 760) {
      hamburgerStatus.addEventListener("change", hamburgerBtnOnClick)
    } else {
      hamburgerStatus.removeEventListener('change', hamburgerBtnOnClick)
    }
  }

  function asideProfileBtnOnClick() {
    const asideProfile = document.querySelector('aside')
    asideProfile.classList.toggle('show-mobile')
  }

  function isHome() {
    const home = [
      'index.html',
      'credit.html',
      'dicoding_submission-basic-web-dev',
      '/dicoding_submission-basic-web-dev/',
    ]
    let result = false
    home.forEach(homeUrl => {
      if (window.location.pathname.endsWith(homeUrl) && result === false) {
        result = true
      }
    });
    return result
  }

  function asideProfileBtnEventToggle() {
    const profileMobileBtn = document.querySelector('aside .profile-mobile')
    if (getBrowserWidth() <= 360 || isHome()) {
      profileMobileBtn.addEventListener('click', asideProfileBtnOnClick)
    } else {
      profileMobileBtn.removeEventListener('click', asideProfileBtnOnClick)
    }
  }
})