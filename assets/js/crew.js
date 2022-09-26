// Cambiando crew
on("click", ".dots .dot", async dot => {
   removeClass(".dots .dot", "active", true)
   dot.target.className += " active"
   let crewID = dot.target.id.split('_')[1];
   const extraer = await extract()
   const crew = extraer.crew[crewID]

   element(".crew-role").innerHTML = crew.role
   element(".crew-name").innerHTML = crew.name
   element(".crew-bio").innerHTML = crew.bio
   element("#picture source").setAttribute("data-srcset", crew.images.webp)
	element("#picture img").setAttribute("src", crew.images.png)
	element("#picture img").setAttribute("alt", crew.name + "-" + crew.role)
	element("#picture img").setAttribute("title", crew.name)
	element("#picture img").parentElement.className = crew.name.toLowerCase().replace(/ /g, '_')
}, true)