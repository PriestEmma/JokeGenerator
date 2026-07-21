// Using XmlhttpRequest
const jokeBtn = document.querySelector('#joke-btn');
const div = document.getElementById('joke');
const response = document.querySelector('.res');

function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://v2.jokeapi.dev/joke/Programming,Spooky,Christmas');

  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const joke = JSON.parse(this.responseText);

      if (joke.joke) {
        div.innerHTML = joke.joke;
        response.innerHTML = '';
      } else {
        div.innerHTML = joke.setup;
        response.innerHTML = joke.delivery;
      }
    } else {
      div.innerHTML = 'Something Went Wrong (Not funny)';
    }
  };

  xhr.send();
}

// Add an Event Listner to the jokeBtn
jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
