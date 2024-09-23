const epicMix = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition",
];

// Selecting the DOM elements
const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

// Function to display the list of songs
const mixInfo = function (mix) {
  mix.forEach(function (song) {
      let li = document.createElement("li");
      li.classList.add("song");
      li.innerHTML = `<span class="play-icon">▶</span> ${song}`; // Using a play icon instead of a number
      mixList.appendChild(li); // Append each song to the mixList
  });
};

// Button click event listener
button.addEventListener("click", function () {
  mixInfo(epicMix); // Populate the list
  mixList.classList.remove("hide"); // Show the list
  button.classList.add("hide"); // Hide the button after it's clicked
});

// Set the total number of songs
total.innerText = `${epicMix.length} great songs!`;

  