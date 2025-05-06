const allButton = document.querySelector('.all-btn')

allButton.addEventListener('click', () => {
    allButton.classList.add('color-click')
    
})

const musicButton = document.querySelector('.music-btn')

musicButton.addEventListener('click', musicClick)
    
    function musicClick() {
    musicButton.classList.add("color-click")
    allButton.classList.remove('color-click')

}