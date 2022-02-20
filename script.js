const grid = document.querySelector('.grid')
const setupBtn = document.querySelector('.setupBtn')
const colorPicker = document.querySelector('#colorpicker')
const rainbowColorBtn = document.querySelector('.rainbowClr')
const slider = document.querySelector('#gridRange')
const sliderParagraph = document.querySelector('#gridRangeSize')
let gridSize = slider.value

sliderParagraph.textContent = `size: ${gridSize}x${gridSize}`
sliderParagraph.style.color = 'white'

let shouldDraw = false;

let CURRENT_COLOR = 'black';
let stateOfGrid = false //user can't make more than one grid
let toggleDraw = false //click to draw

function rainbowColor() {
	const CLR_R = Math.floor(Math.random() * 255)
	const CLR_G = Math.floor(Math.random() * 255)
	const CLR_B = Math.floor(Math.random() * 255)

	return `rgba(${CLR_R}, ${CLR_G}, ${CLR_B})`
}

function removeCells() {
	while (grid.firstChild) {
		grid.removeChild(grid.firstChild);
	}
}

const setupGrid = () => {
	setupEventListeners()
	removeCells()
	gridSize = slider.value
	grid.setAttribute('style', `grid-template-columns: repeat(${gridSize}); grid-template-rows: repeat(${gridSize});`)

	for (let i = 0; i < gridSize * gridSize; i++) {
		const gridEl = document.createElement('div')

		//ADDING EVENT LISTENER TO EACH ELEMENT IN THE 16X16 GRID
		gridEl.addEventListener('mouseover', (element) => {
			if (CURRENT_COLOR === 'rainbow' && shouldDraw) {
				element.target.style.backgroundColor = rainbowColor()
			} else if (shouldDraw){
				element.target.style.backgroundColor = CURRENT_COLOR;
			}
		})

		gridEl.style.border = '1px solid black'
		
		grid.appendChild(gridEl)
	}
	grid.style.gridTemplateColumns = (`repeat(${gridSize}, 2fr`);
	grid.style.gridTemplateRows = (`repeat(${gridSize}, 2fr`);
	grid.style.gridGap = '0px'
	
}


// main
setupGrid()




function setupEventListeners() {
	grid.addEventListener('mousedown', () => {
		shouldDraw = true;
		console.log('should draw ' + shouldDraw);
	})
	
	grid.addEventListener('mouseup', () => {
		shouldDraw = false;
		console.log('should draw ' + shouldDraw);
	})

	colorPicker.addEventListener('input', (e) => {
		CURRENT_COLOR = e.target.value;
	})

	rainbowColorBtn.addEventListener('click', () => {
		CURRENT_COLOR = 'rainbow'
	})

	slider.addEventListener('input', () => {
		console.log(slider.value)
		sliderParagraph.textContent = `size: ${slider.value}x${slider.value}`
		sliderParagraph.style.color = 'white'
	}, false)

	slider.addEventListener('change', function(e) {
		setupGrid()
	})
}