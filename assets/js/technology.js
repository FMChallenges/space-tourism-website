on("click", ".indications .indication", async ind => {
   removeClass(".indications .indication", "active", true)
   ind.target.className += " active"
   // Extraemos la información del json
   const extraer = await extract()
   let technologyID = ind.target.id
   const data = getArray(extraer.technology[technologyID])

   const html = ['name', 'description']
   html.forEach( h => element(`.${h}`).innerHTML = getAlt([h]))

   setData("#picture source", "srcset", data.images.landscape)

   const img = "#picture img"
	const size = (screen.width <= 768) ? 'landscape' : 'portrait';
   setData(img, "src", data.images[size])
   setData(img, "alt", getAlt(['name', 'role']))
   setData(img, "title", getAlt(['name']))
   element(img).parentElement.className = getNameClass()
})