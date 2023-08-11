const btn = document.getElementById('btn');

const apiKey = 'i2F6rD9wRaTrsK2PwFWt4A==sToeCf2rXoDpB5Oc';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/chucknorris?';

async function getJoke() {
  const response = await fetch(apiURL, options);
  const data = await response.json();
  console.log(data.joke);
}

btn.addEventListener('click', getJoke);