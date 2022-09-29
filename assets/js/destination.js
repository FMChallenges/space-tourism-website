import { CountUp } from './countUp.min.js';

const section = element("#app section")
const getNumberData = id => parseInt(getIDdata(id, "data-val"))

const execCountUp = () => {
	let kilometros = new CountUp('km', getNumberData("km"), { duration: 2 });
	(!kilometros.error) ? kilometros.start() : console.error(kilometros.error);

	let dias = new CountUp('days', getNumberData("days"), { duration: 2 });
	(!dias.error) ? dias.start() : console.error(dias.error);
}

execCountUp()

on('click', '.tab', async tab => {
	tab.preventDefault()
	const loadTab = tab.target.href.split("#")[1]

   const extraer = await extract()
	const GetData = getArray(extraer.destinations[loadTab])

	setData("#picture source", "srcset", getImgWebp())
	setData("#picture img", "src", getImgPng())

	const datatxt = ['km', 'days']
	const datanum = ['distance', 'travel']
	datatxt.forEach( (data, pos) => {
		let clase = data.replace(/^\w/, (c) => c.toUpperCase());
		setData(`.data${clase} #${data}`, "data-val", getNumber(datanum[pos]))
		element(`.data${clase} .txt`).innerHTML = removeNumber(datanum[pos]) 
	})

	element(".dataTitle").innerHTML = getAlt(['name'])
	element(".dataText").innerHTML = getAlt(['description'])

	execCountUp()
	LinkActive(tab.target)
	
}, true)

const LinkActive = elem => {
	removeClass(".tab", "active", true)
	elem.className += " active"
}