document.querySelectorAll('div#pokemon-list button').forEach(item => {
  item.addEventListener('click', getPokemon)
})

const name = document.querySelector('#name')
const picture = document.querySelector('#picture')
const weight = document.querySelector('#weight')


async function getPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + event.target.innerText.toLowerCase())
  const data = await response.json()
  name.textContent = data.species.name.toUpperCase()
  picture.src = data.sprites.front_default
  weight.textContent = 'Weight: ' + data.weight
}