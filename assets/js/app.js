/** 
 * Funciones generales
*/
const extract = async () => {
	const _data = await fetch(location.href + "data.json")
	let _getdata = await _data.json()
	return _getdata
}

const element = (el, all = false) => all ? [...document.querySelectorAll(el)] : document.querySelector(el);

const getIDdata = (el, data) => element("#" + el).getAttribute(data)
const setData = (el, data,value) => element(el).setAttribute(data, value)

let data = [];
const getArray = array => data = array;
const getImgWebp = () => data.images.webp
const getImgPng = () => data.images.png
const getAlt = array => (array.length > 1) ? data[array[0]] + "-" + data[array[1]] : data[array[0]]
const getNameClass = () => data.name.toLowerCase().replace(/ /g, '_')
const getNumber = rsp => parseInt(data[rsp])
const removeNumber = rsp => data[rsp].replace(parseInt(data[rsp]), '')

const removeClass = (el, classname, all) => element(el, all).forEach( e => e.classList.remove(classname))

const on = (type, el, event, all = true) => {
	selectEl = element(el, all);
 	if (selectEl) {
	 	all ? selectEl.forEach(e => e.addEventListener(type, event)) : selectEl.addEventListener(type, event)
	}
}