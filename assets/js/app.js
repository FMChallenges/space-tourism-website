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

const removeClass = (el, classname, all) => element(el, all).forEach( e => e.classList.remove(classname))

const on = (type, el, event, all = true) => {
	selectEl = element(el, all);
 	if (selectEl) {
	 	all ? selectEl.forEach(e => e.addEventListener(type, event)) : selectEl.addEventListener(type, event)
	}
}