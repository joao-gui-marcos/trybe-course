// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  try {
    const request = await fetch(API_URL, myObject)
    const json = await request.json()
    document.getElementById('jokeContainer').innerText = json.joke
  } catch(err) {
    console.log('Erro')
  }
}

const cryptoURL = `https://api.coincap.io/v2/assets`

const fetchCrypto = async () => {
  try {
    const request = await fetch(cryptoURL)
    const json = await request.json()
    const arrNames = []
    let ul = document.getElementById('ul')
    for (let i = 0; i < 10; i += 1) {
      arrNames.push(json.data[i].id)
      let li = document.createElement('li')
      li.innerText = json.data[i].id
      ul.appendChild(li)
    }
    console.log(arrNames)

  } catch(err) {
    console.log('Erro')
  }
}

window.onload = function() {
  fetchJoke()
  fetchCrypto()
};

