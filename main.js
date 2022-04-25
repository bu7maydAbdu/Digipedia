const getButton = document.querySelector("#call-one")
getButton.addEventListener("click", getFetch)

const monsterCard = document.querySelector(".card")

monsterCard.classList.add("hidden-card")

function getFetch(){

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


