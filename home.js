const car = document.querySelector(".destiny-car");
const section = document.querySelector(".truth-1");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();

  let progress = (window.innerHeight - rect.top) / window.innerHeight;

  progress = Math.max(0, Math.min(1, progress));

  const downDistance = 300;
  const horizontalDistance = 500;
  const finalDown = 250;

  let x = 0;
  let y = 0;

  if (progress < 0.35) {
    // DOWN
    y = (progress / 0.35) * downDistance;
  } else if (progress < 0.75) {
    // ACROSS
    y = downDistance;

    x = ((progress - 0.35) / 0.4) * horizontalDistance;
  } else {
    // DOWN AGAIN
    y = downDistance + ((progress - 0.75) / 0.25) * finalDown;

    x = horizontalDistance;
  }
});
//================================================================
//                   LOGIN POPUP START
//================================================================
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const closeBtn = document.getElementById("closeBtn");

loginBtn.addEventListener("click", () => {
  loginPopup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  loginPopup.classList.remove("active");
});



function closeNav(){
  const scndNav = document.querySelector(".scnd-nav");
  scndNav.style.display = "none";
}
function openNav(){
  const scndNav = document.querySelector(".scnd-nav");
  scndNav.style.display = "flex";
}






