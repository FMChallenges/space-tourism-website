/** 
 * Funciones generales
*/
const element = (el, all = false) => all ? [...document.querySelectorAll(el)] : document.querySelector(el);
const on = (type, el, event, all = true) => {
	selectEl = element(el, all);
 	if (selectEl) {
	 	all ? selectEl.forEach(e => e.addEventListener(type, event)) : selectEl.addEventListener(type, event)
	}
}

/**
 * Menu en mobile
*/
on('click', ".menu-toggle", menu => {
	menu.target.classList.toggle("active")
	element(".navbar-collapse").classList.toggle("open-menu")
})

/**
 * Menu normal y tablet
*/
on('click', ".nav_link_toggle", ItemLink => {
	ItemLink.preventDefault()
	let link = (ItemLink.target.href === undefined) ? ItemLink.target.parentElement : ItemLink.target;
	const hash = link.href.split("#")[1]
	ChangeBackground(hash)
	LinkActive(link)
	element("#app").innerHTML = ''
})

const ChangeBackground = name => document.body.className = "bg" + name
const LinkActive = elem => {
	element(".nav_link_toggle", true).forEach( e => e.parentElement.classList.remove("active"))
	elem.parentElement.className += " active"
}

const LoadPage = (page = 'home') => {
	const GetTemplate = element("#" + page).content
	element("#app").append(GetTemplate)
}
LoadPage()
