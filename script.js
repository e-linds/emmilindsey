const bio = document.createElement("div");
document.querySelector("div").appendChild(bio)
bio.id = "bio"

bio.textContent = "DRAFT Hey! My name is Emmi, and I'm learning to code at Flatiron School. When I graduate, I'm hoping to use my new skills to solve real world problems. I think I'd like to be a back-end engineer but I guess we'll see, won't we! Outside of work I'm your typical Coloradan. I like to run to burn off brain fuel and try new restaurants and foods. If anyone has found some amazing Greek food in Denver, please hit me up. "

//event listener for running shoes picture
const shoeSelector = document.getElementById('runningshoes');
shoeSelector.addEventListener('mouseover', function() {
    shoeSelector.style.opacity = "1";
});

shoeSelector.addEventListener('mouseout', function() {
    shoeSelector.style.opacity = "0.25";
})

//event listener for chant book picture
const playlistGenerator = document.getElementById("chantbook");
playlistGenerator.addEventListener('mouseover', function() {
    playlistGenerator.style.opacity = "1";



});

playlistGenerator.addEventListener('mouseout', function() {
    playlistGenerator.style.opacity = "0.25";
});



/*const shoeCaption = document.createElement("div");
h2.append(shoeCaption)
shoeCaption.textContent = "Running Shoe Selector"

const chantbookCaption = document.createElement("div");
chantbookCaption.textContent = "Playlist Generator";*/


