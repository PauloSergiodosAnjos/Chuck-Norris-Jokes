const url = "https://api.chucknorris.io/jokes/random";

async function getJokes() {
    const response = await fetch(url)
    const jokes = await response.json()
    createCardJoke(jokes)
}

async function getJokePhrases(lastJoke) {
    const response = await fetch(url)
    const jokes = await response.json()
    lastJoke.textContent = jokes.value
}

async function createCardJoke(joke) {
    const card = document.createElement("div")
    const jokeValue = joke.value
    const phraseJoke = document.createElement("p")
    phraseJoke.textContent = jokeValue
    const title = document.createElement("h2")
    title.textContent = "Joke"
    const button = document.createElement("button")
    button.textContent = "New joke!"
    button.classList.add("btn")
    button.addEventListener("click", ()=>{
        getJokePhrases(phraseJoke)
    })
    card.append(title, phraseJoke, button)
    card.classList.add("card")
    document.querySelector("body").appendChild(card)
}

getJokes()

