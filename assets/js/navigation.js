const LoadPage = (page = 'home') => {
	const GetTemplate = element("#" + page).content
	element("#app").append(GetTemplate)
}
LoadPage('home')

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
	// Limpiamos la pantalla
	element("#app").innerHTML = ''
	// Cargamos nuevo contenido en pantalla
	LoadPage(hash)
})

const ChangeBackground = name => document.body.setAttribute('bg', name)
const LinkActive = elem => {
	element(".nav_link_toggle", true).forEach( e => e.parentElement.classList.remove("active"))
	elem.parentElement.className += " active"
}

/**
 * Explorer
*/
on('click', ".explorer", menu => {
	// Creamos la etiquta video
	const video = document.createElement("video")
	const videoAttr = [['autoplay', ''], ['buffered', ''], ['loop', true]]
	videoAttr.forEach( attr => video.setAttribute(attr[0], attr[1]))
	video.classList.add('video');
	// Creamos la etiquta source
	const source = document.createElement("source")
	const size = (screen.width <= 768) ? '_tablet' : '';
	source.src = "./assets/video/earth_at_night_from_Space" + size + ".mp4"
	source.textContent = "Your browser does not support the video tag."
	video.appendChild(source)
	// Insertamos el vídeo en la pantalla
	document.body.appendChild(video)
	// Quitamos el video haciendo click en el video
	on('click', "video.video", video => element("video.video").remove())
})
