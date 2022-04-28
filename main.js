const getOneButton = document.querySelector("#call-one")
getOneButton.addEventListener("click", getFetch)




const audio = document.querySelector("#digiAudio")
const digiAssemmbleAudio = document.querySelector("#digiAssemmbleAudio")


const monsterCard = document.querySelector(".card")

monsterCard.classList.add("hidden-card")

const oneCardStage = document.querySelector("#one-card-review")
const gridSection = document.querySelector("#main-section")



function getFetch(){
    audio.play()
    digiAssemmbleAudio.pause()



    oneCardStage.classList.remove("hidden-stage")

   

    // monsterCard.classList.add("hidden-card")
    // const gridSection = document.querySelector("#main-section")
    gridSection.classList.add("hidden-stage")

    gridSection.classList.remove("grid-page")


    const digiName = document.querySelector("input").value

    const url = `https://digimon-api.vercel.app/api/digimon/name/${digiName}`
    fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            monsterCard.classList.remove("hidden-card")
            document.querySelector("h2").innerText = data[0].name
            document.querySelector("h3").innerText = data[0].level
            document.querySelector(".monster-img").src = data[0].img
          })
          .catch(err => {
              console.log(`error ${err}`)
          });


}



// this here is the part of the get all the digi  through looping all over the arrays 

const getAllButton = document.querySelector("#call-all")

getAllButton.addEventListener("click", fetchAll)


function fetchAll(){
  digiAssemmbleAudio.play()
  audio.pause()



  oneCardStage.classList.add("hidden-stage")


    gridSection.classList.remove("hidden-stage")
    gridSection.classList.add("grid-page")


    monsterCard.classList.add("hidden-card")

    const url = `https://digimon-api.vercel.app/api/digimon`
    fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            data.map(element => {

              const createCard = document.createElement("section")
              createCard.classList.add("card", "smaller-card")
              const monsterName = document.createElement("h2")
              monsterName.textContent = element.name
              const monsterLevel = document.createElement("h3")
              monsterLevel.textContent = element.level
              const monsterImg = document.createElement("img")
              monsterImg.src = element.img
              document.querySelector("#main-section").appendChild(createCard)
              createCard.appendChild(monsterName)
              createCard.appendChild(monsterLevel)
              createCard.appendChild(monsterImg)

              monsterImg.classList.add("monster-img")


               
                

               
          


            });
          })
          .catch(err => {
              console.log(`error ${err}`)
          });



}

