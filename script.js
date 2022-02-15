const grid = document.querySelector('.grid')
const setupBtn = document.querySelector('.setupBtn')
let stateOfGrid = false
let classNamer = 0 //VARIABLE FOR NAMING DIVS INSIDE THE CONTAINER

function rainbowColor(){
	const CLR_R = Math.floor(Math.random()*255)
	const CLR_G = Math.floor(Math.random()*255)
	const CLR_B = Math.floor(Math.random()*255)

	return `rgba(${CLR_R}, ${CLR_G}, ${CLR_B})`
}

function changeColor(e){
	
}

function setupGrid(){
	if(!(stateOfGrid)){
		stateOfGrid = true //SO USER CAN'T MAKE MORE THAN 1 GRID

		for(let i = 0; i < 16; i++){//CREATE ROW
			const rowGrid = document.createElement('div')
			rowGrid.style.width = '100%'
			rowGrid.style.height = '25px'
			rowGrid.style.display = 'flex'
			
			for(let j = 0; j < 16; j++){//CREATE BLOCKS INSIDE THE ROW
				const gridEl = document.createElement('div')
				//ADDING EVENT LISTENER TO EACH ELEMENT IN THE 16X16 GRID
				gridEl.addEventListener('click', (element)=>{
					console.log(element.target.className)
				})

				gridEl.setAttribute('style', `background-color: ${rainbowColor()}`)
				gridEl.style.border = '1px solid black'
				gridEl.style.width = '25px'
				gridEl.style.height = '25px'
				gridEl.className = 'colDiv' + classNamer++


				rowGrid.appendChild(gridEl)
			}
			
			grid.appendChild(rowGrid)
		}
	}
	else{
		alert(`can't make more than 1 grid man`)
	}
}

setupBtn.addEventListener('click', setupGrid)
setupBtn.addEventListener('click', ()=>{grid.style.display='inline-block'}) //SHOW MAIN GRID