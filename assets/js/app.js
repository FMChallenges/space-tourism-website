/** 
 * Funciones generales
*/
const element = (el, all = false) => all ? [...document.querySelectorAll(el)] : document.querySelector(el);

const getIDdata = (el, data) => element("#" + el).getAttribute(data)

const on = (type, el, event, all = true) => {
	selectEl = element(el, all);
 	if (selectEl) {
	 	all ? selectEl.forEach(e => e.addEventListener(type, event)) : selectEl.addEventListener(type, event)
	}
}