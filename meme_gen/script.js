let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

// API URL
let url = "https://meme-api.com/gimme/";

// Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomememes", "dogmemes", "me_irl"];

// Function to get random meme
let getMeme = () => {
  //Choose random subreddits
  let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
  //Fetch data from api
  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let memeImg = new Image();
      // Display meme image and title only ater image loads
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

//Call the getmeme() on button click and window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
