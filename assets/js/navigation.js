const _PageInit = (page = 'home') => {
	element("#app").innerHTML = ""
	element("#app").append(element(`#template_${page}`).content.cloneNode(true))
}
_PageInit()

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
	// Cambiamos el fondo!
	ChangeBackground(hash)
	// Cambiamos el estado
	LinkActive(link)
	// Cargamos nuevo contenido en pantalla
	_PageInit(hash)
})

const ChangeBackground = name => document.body.setAttribute('bg', name)
const LinkActive = elem => {
	element(".nav_link_toggle", true).forEach( e => e.parentElement.classList.remove("active"))
	elem.parentElement.className += " active"
}