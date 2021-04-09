const container = document.querySelector(".container")
const coffees = [
  { name: "Chess Club", image: "Chess.jpg" },
  { name: "Computer Club", image: "Computer.jpg" },
  { name: "Soccer Club", image: "Soccer.jpg" },
  { name: "Camping Club", image: "Camping.jpg" },
  { name: "Book Club", image: "Books.jpg" },
  { name: "Chemistry Club", image: "Chemistry.jpg" },
  { name: "Art Club", image: "Art.jpg" },
  { name: "Foreign Language Club", image: "Language.png" },
  { name: "Drama Club", image: "Drama.jpg" },
]
console.log(container);
function showCoffees () {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        container.appendChild(makeCards(name,image))
        )
  }
  
  function makeCards (name,image) {
      let card = document.createElement('div');
      card.setAttribute('class', 'card');

      let img = document.createElement('img');
      img.setAttribute('class', 'cardAvatar');
      img.setAttribute('src',image);

      let title = document.createElement('h1');
      title.innerHTML=name;
      title.setAttribute('class','cardTitle');

      let signUp = document.createElement('a');
      signUp.setAttribute('href','#');
      signUp.innerText='sign up';

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(signUp);

      return card;

  }

  document.addEventListener("DOMContentLoaded", showCoffees)