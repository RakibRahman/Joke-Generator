// https://api.chucknorris.io/jokes/random

const jokes = document.querySelector("#joke");
const jokeNext = document.querySelector("#nxt-joke");

//function to generate jokes
const generateJokes = async () => {
  try {
    const fetchJokes = await fetch("https://api.chucknorris.io/jokes/random");
    const randomJoke = await fetchJokes.json();
    jokes.innerHTML = randomJoke.value;
  } catch (down) {
    console.log(`Server ${down}`);
  }
};
//Generate default joke
jokeNext.addEventListener("click", generateJokes);
generateJokes();
