import { CountUp } from './countUp.min.js';

const getNumber = id => parseInt(getIDdata(id, "data-val"))

const execCountUp = () => {
	let kilometros = new CountUp('km', getNumber("km"), { duration: 2 });
	(!kilometros.error) ? kilometros.start() : console.error(kilometros.error);

	let dias = new CountUp('days', getNumber("days"), { duration: 2 });
	(!dias.error) ? dias.start() : console.error(dias.error);
}

execCountUp()

on('click', '.tab', async tab => {
	tab.preventDefault()
	const loadTab = tab.target.href.split("#")[1]
	
	const FetchData = await fetch(location.href + "data.json")
	let GetData = await FetchData.json()
	GetData = GetData.destinations[loadTab]
	const distance = parseInt(GetData.distance)
	const travel = parseInt(GetData.travel)

	element("#picture source").setAttribute("data-srcset", GetData.images.webp)
	element("#picture img").setAttribute("src", GetData.images.png)
	element(".dataTitle").innerHTML = GetData.name
	element(".dataText").innerHTML = GetData.description
	element(".dataKm #km").setAttribute("data-val", distance) 
	element(".dataDays #days").setAttribute("data-val", travel) 
	element(".dataKm .txt").innerHTML = GetData.distance.replace(distance, '')
	element(".dataDays .txt").innerHTML = GetData.travel.replace(travel, '')

	execCountUp()
	LinkActive(tab.target)
	
}, true)

const LinkActive = elem => {
	removeClass(".tab", "active", true)
	elem.className += " active"
}