
const nameEl = document.getElementById("name-el")
const detailsEl = document.getElementById("details-el")
const outputEl = document.getElementById("output")
const container = document.getElementById("car-container")



let enter = function(){
  let content = {
    name: `Name: ${nameEl.value}`,
    detail: `Detail: ${detailsEl.value}`
  }
  let newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "white"
  newDiv.style.borderRadius = "10px"
  newDiv.style.textAlign = "left"
  newDiv.style.color = "black"
  newDiv.style.padding = "1px 10px"
  newDiv.style.lineHeight ="10px"
  newDiv.style.width = "180px"
  newDiv.style.margin = "auto"
  newDiv.style.marginBottom = "5px"

  let nameP = document.createElement("P");
  let detailP = document.createElement("p")
  nameP.textContent = `${content.name}`;
  detailP.textContent = `${content.detail}`

  newDiv.appendChild(nameP)
  newDiv.appendChild(detailP)
  container.appendChild(newDiv)

}