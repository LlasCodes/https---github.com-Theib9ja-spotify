const allButton = document.querySelector('.all-btn')

const podcastButton = document.querySelector('.podcast-btn')

allButton.addEventListener('click', () => {
    allButton.classList.add('color-click')
    podcastButton.classList.remove('color-click')
    musicButton.classList.remove('color-click')
    
})

const musicButton = document.querySelector('.music-btn')

musicButton.addEventListener('click', musicClick)
    
    function musicClick() {
    musicButton.classList.add("color-click")
    allButton.classList.remove('all-btn')
    allButton.classList.remove('color-click')
    podcastButton.classList.remove('color-click')

}

podcastButton.addEventListener('click', () => {
    podcastButton.classList.add('color-click')
    allButton.classList.remove('color-click')
    musicButton.classList.remove('color-click')
})