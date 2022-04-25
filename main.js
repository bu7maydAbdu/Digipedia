const url = `https://digimon-api.vercel.app/api/digimon/name/agumon`
fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("h2").innerText = data[0].name
        document.querySelector("h3").innerText = data[0].level
        document.querySelector("img").src = data[0].img
      })
      .catch(err => {
          console.log(`error ${err}`)
      });