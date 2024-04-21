let ed = document.querySelector(".education");
let ed1 = document.querySelector(".education1");

let ab = document.querySelector(".about");
let ab1 = document.querySelector(".about1");

let sk = document.querySelector(".skill");
let sk1 = document.querySelector(".skill1");

let pr=document.querySelector(".project");
let pr1=document.querySelector(".project1");

let re=document.querySelector(".resume");
let re1=document.querySelector(".resume1");

ed.addEventListener("click", () => {
  ed1.style.display = "block";
  ab1.style.display="none";
  sk1.style.display = "none";
  pr1.style.display="none";
  re1.style.display="none";
});

ab.addEventListener("click", () => {
  ab1.style.display = "block";
  ed1.style.display="none";
  sk1.style.display = "none";
  pr1.style.display="none";
  re1.style.display="none";

});

sk.addEventListener("click", () => {
  sk1.style.display = "block";
  ed1.style.display="none";
  ab1.style.display="none";
  pr1.style.display="none";
  re1.style.display="none";

});

pr.addEventListener("click", () => {
  sk1.style.display = "none";
  ed1.style.display="none";
  ab1.style.display="none";
  pr1.style.display="block";
  re1.style.display="none";

});


re.addEventListener("click", () => {
  re1.style.display="block";
  sk1.style.display ="none";
  ed1.style.display="none";
  ab1.style.display="none";
  pr1.style.display="none";
});

