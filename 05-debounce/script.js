const debounceWrapper = document.querySelector('.debounceWrapper')
const debounceBtn = document.querySelector('.debounceBtn')
const figures = document.querySelector('.figures')

figures.style.visibility = 'hidden'
let isOpen = false

debounceBtn.addEventListener('click', debounce(onClickHandler, 1000))

function onClickHandler() {
    if (isOpen) {
        debounceBtn.textContent = 'Open';
        figures.style.visibility = 'hidden';
        isOpen = false;
    } else {
        debounceBtn.textContent = 'Close';
        figures.style.visibility = 'visible';
        isOpen = true;
    }
}

function debounce(callback, timeoutMs) {
    return function perform(...args) {
        let previousCall = this.lastCall
        this.lastCall = Date.now()
        if (previousCall && this.lastCall - previousCall <= timeoutMs) {
            clearTimeout(this.lastCallTimer)
        }
        this.lastCallTimer = setTimeout(() => callback(...args), timeoutMs)
    }
}

