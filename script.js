const grid = document.querySelector('.grid')
const setupBtn = document.querySelector('.setupBtn')
const colorPicker = document.querySelector('#colorpicker')
const rainbowColorBtn = document.querySelector('.rainbowClr')
const slider = document.querySelector('#gridRange')
const sliderParagraph = document.querySelector('#gridRangeSize')
let gridSize = slider.value

let CURRENT_COLOR = 'black';
let stateOfGrid = false//user can't make more than one grid
let toggleDraw = false//click to draw

function rainbowColor(){
	const CLR_R = Math.floor(Math.random()*255)
	const CLR_G = Math.floor(Math.random()*255)
	const CLR_B = Math.floor(Math.random()*255)

	return `rgba(${CLR_R}, ${CLR_G}, ${CLR_B})`
}

colorPicker.addEventListener('input', (e) => {
	CURRENT_COLOR = e.target.value;
})

const toggleClick = ()=>{
	if(toggleDraw){
		toggleDraw=false
	}
	else{
		toggleDraw=true
	}
	console.log(toggleDraw)
}

function removeCells() {
	while(grid.firstChild) {
	  grid.removeChild(grid.firstChild);
	}
  }

const setupGrid = ()=>{
	removeCells()
	gridSize = slider.value
	grid.setAttribute('style', `grid-template-columns: repeat(${gridSize}); grid-template-rows: repeat(${gridSize});`)

	console.log('creating a grid of '+gridSize+'x'+gridSize)
	if(!(stateOfGrid)){//this was added before, but gonna leave it here just to admire how retarded I am later on
		// stateOfGrid = true //USER CAN'T MAKE MORE THAN 1 GRID
		for(let i = 0; i < gridSize * gridSize; i++){
				const gridEl = document.createElement('div')

				//ADDING EVENT LISTENER TO EACH ELEMENT IN THE 16X16 GRID
				gridEl.addEventListener('click', toggleClick)
				gridEl.addEventListener('mouseover', (element)=>{
					console.log(element.target.className + 'drawing')
					if(CURRENT_COLOR === 'rainbow' && toggleDraw === true){
						element.target.style.backgroundColor = rainbowColor()
					}
					else if(toggleDraw === true){
						element.target.style.backgroundColor = CURRENT_COLOR;
					}
					// console.log(element.target.className)
				})
				
				// gridEl.setAttribute('style', `background-color: ${rainbowColor()}`)
				gridEl.style.border = '1px solid black'
				// gridEl.style.width = '25px'
				// gridEl.style.height = '25px'
				
			
			grid.appendChild(gridEl)
		}
		grid.style.gridTemplateColumns = (`repeat(${gridSize}, 2fr`);
		grid.style.gridTemplateRows= (`repeat(${gridSize}, 2fr`);
		grid.style.gridGap = '0px'
	}
	else{
		alert(`can't make more than 1 grid man`)
	}
}

setupBtn.addEventListener('click', setupGrid)

//SHOW MAIN GRID
setupBtn.addEventListener('click', ()=>{
	grid.style.display='grid'
}) 

rainbowColorBtn.addEventListener('click', ()=>{CURRENT_COLOR = 'rainbow'})

slider.addEventListener('change', ()=>{
	sliderParagraph.textContent = 'size: ' + slider.value + 'x' + slider.value
	sliderParagraph.style.color = 'white'
})

