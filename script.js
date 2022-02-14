const grid = document.querySelector('.grid')
const setupBtn = document.querySelector('.setupBtn')

function randColor(){
    return Math.floor(Math.random()*255)
}

function changeColor(){
        const randomR = randColor()
        const randomG = randColor()
        const randomB = randColor()

        // return `rgb(${randomR}, ${randomG}, ${randomB})`
        return 'blue'
}

setupBtn.addEventListener('click', function createGrid(){
    for(let i = 0; i < 16 * 16; i++){
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.setAttribute('style', 'border: 10px solid black; padding: 2px; width: 10px; height: 10px;')
        gridElement.setAttribute('style', `background-color: ${changeColor()}`)
        grid.appendChild(gridElement)
        setupBtn.style.display = "none";
    }
})

