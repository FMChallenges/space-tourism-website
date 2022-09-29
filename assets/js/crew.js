const changeCrew = async dot => {
   removeClass(".dots .dot", "active", true)
   dot.target.className += " active"
   let crewID = dot.target.id.split('_')[1];
   // Extraemos la información del json
   const extraer = await extract()
   const crew = getArray(extraer.crew[crewID])
   // Básicamente son lo mismo
   const html = ['role', 'name', 'bio']
   html.forEach( h => element(`.crew-${h}`).innerHTML = crew[h])

   setData("#picture source", "srcset", getImgWebp())

   const img = "#picture img"
   setData(img, "src", getImgPng())
   setData(img, "alt", getAlt(['name', 'role']))
   setData(img, "title", getAlt(['name']))
   element(img).parentElement.className = getNameClass()
}
// Cambiando crew
on("click", ".dots .dot", clickDot => changeCrew(clickDot), true)