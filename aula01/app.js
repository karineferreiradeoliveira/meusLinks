const KEY_LOCAL_STORAGE = 'darkmode'
const btnMode = document.querySelector('.mode')

let isDarkeMode = !!JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))

function setModeInPage() {
  const className = isDarkeMode ? 'dark' : 'light'

  document.body.classList = className

  btnMode.querySelector('span').innerHTML = isDarkeMode ? 'Light' : 'Dark'

  localStorage.setItem(KEY_LOCAL_STORAGE, isDarkeMode)
  
  isDarkeMode = !isDarkeMode
}

function onMode() {
  const isExistInLocalStorage = localStorage.getItem(KEY_LOCAL_STORAGE) !== null
  
  isExistInLocalStorage && setModeInPage()
}

btnMode.addEventListener('click', setModeInPage);
window.addEventListener('DOMContentLoaded', onMode);
