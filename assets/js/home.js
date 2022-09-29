/**
 * Explorer
*/
on('click', ".explorer", menu => {
	// Creamos la etiquta video
	const video = document.createElement("video")
	const videoAttr = [
		['autoplay', ''], 
		['buffered', ''], 
		['loop', true]
	]
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
