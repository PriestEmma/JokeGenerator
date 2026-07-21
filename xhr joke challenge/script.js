// Using XmlhttpRequest
const jokeBtn = document.querySelector('#joke-btn');
const div = document.getElementById('joke');

function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const joke = JSON.parse(this.responseText);

      div.innerHTML = joke.value;
    } else {
      div.innerHTML = 'Something Went Wrong (Not funny)';
    }
  };

  xhr.send();
}

// Add an Event Listner to the jokeBtn
jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
