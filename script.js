const btn = document.getElementById('btn');
let joke = document.getElementById('joke');
console.log(joke);

const apiKey = 'i2F6rD9wRaTrsK2PwFWt4A==sToeCf2rXoDpB5Oc';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/chucknorris?';

async function getJoke() {
  try {
    joke.textContent = 'Updating...';
    btn.disabled = true;
    btn.innerText = 'Loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btn.disabled = false;
    btn.innerText = 'Tell me a joke';

    console.log(data.joke);
    joke.textContent = data.joke;
  } catch (error) {
    joke.style.color = 'red';
    joke.textContent = 'Ughh.. the site has hit a snag. Try again';
    btn.disabled = false;
    btn.innerText = 'Tell me a joke';
  }
}

btn.addEventListener('click', getJoke);
