//rng
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//containing element to hold the cheetah
var dialog = document.createElement("dialog");
//cheetah image element itself
var image = document.createElement("img");
var cheetahExists = false;

//puts image element inside the dialog element
dialog.appendChild(image);
//puts dialog element inside document
document.body.appendChild(dialog);
//setting the source file for the cheetah image
image.src = chrome.runtime.getURL("images/picture.png");
//styling for image and dialog elements
dialog.style.overflow = "hidden";
dialog.style.color = "transparent";
dialog.style.background = "transparent";
image.style.width = "30vh";
image.style.height = "40vh";
dialog.style.width = "100%";
dialog.style.width = "100%";

//rng for cheetah coordinates
var randomx = random(10, 80);
var randomy = random(10, 80);
image.style.marginLeft = randomx + "vw";
image.style.marginTop = randomy + "vh";

//if there are no cheetahs, then a cheetah image is generated
if (!cheetahExists){
    //generates dialog element
    dialog.showModal();
    //sets variable to show that there is an active cheetah element
    cheetahExists = true;
    //waits 4 seconds before closing the cheetah dialog element
    setTimeout(function() {
      cheetahExists = false;
      dialog.close();
  }, 4000);
}

//listener to close the cheetah dialog element when clicked
image.addEventListener("click", function() {
  //sets flag to false (no cheetahs on screen)
  cheetahExists = false;
  //closes dialog
  dialog.close();
  //incrementing score
  counter = counter + 1;
});