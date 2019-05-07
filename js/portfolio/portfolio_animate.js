const $more = document.getElementById("more-gis");
const $gis = document.getElementById("gis");
const $less = document.getElementById("less-gis");

function display(id, status){
  id.style.display = status;
}

$more.addEventListener("click", (event) =>{
  display($gis,"block")
  display($less,"block")
  display($more,"None")
});

$less.addEventListener("click", (event) =>{
  display($gis,"None")
  display($less,"None")
  display($more,"block")
});

function forToggle(id, name){
  for (var i = 0; i < id.length; i++) {
    id[i].classList.toggle(name)
  }
}
function forRemove(id, name){
  for (var i = 0; i < id.length; i++) {
    if (id[i].classList.contains(name)) {
      id[i].classList.remove(name)
    }
  }
}
function forAdd(id, name){
  for (var i = 0; i < id.length; i++) {
    if (!id[i].classList.contains(name)) {
      id[i].classList.add(name)
    }
  }
}
function addById(id, name){
  id.classList.toggle(name)
}
function removeById(id, name){
  if (id.classList.contains(name)) {
    id.classList.remove(name)
  }
}
// Buttons
const $frontend = document.getElementById("frontend");
const $backEnd = document.getElementById("backend");
const $english = document.getElementById("english");
const $devOps = document.getElementById("DevOps");
// images
const $front = document.getElementsByClassName("front-selector");
const $back = document.getElementsByClassName("back-selector");
const $en = document.getElementsByClassName("english-selector");
const $dev = document.getElementsByClassName("dev-selector");

addById($frontend,'actives')
// images
forAdd($back, 'hidden')
forAdd($back, 'hidden')
forAdd($en, 'hidden')
forAdd($dev, 'hidden')

$frontend.addEventListener("click", (event)=>{
  addById($frontend,'actives')
  removeById($english,'actives')
  removeById($backEnd,'actives')
  removeById($devOps,'actives')

  forToggle($front, 'hidden')
  forAdd($back, 'hidden')
  forAdd($en, 'hidden')
  forAdd($dev, 'hidden')
});

$english.addEventListener("click", (event)=>{
  addById($english,'actives')
  removeById($frontend,'actives')
  removeById($backEnd,'actives')
  removeById($devOps,'actives')

  forToggle($en, 'hidden')
  forAdd($back, 'hidden')
  forAdd($front, 'hidden')
  forAdd($dev, 'hidden')
});

$backEnd.addEventListener("click", (event)=>{
addById($backEnd,'actives')
removeById($frontend,'actives')
removeById($english,'actives')
removeById($devOps,'actives')

forToggle($back, 'hidden')
forAdd($en, 'hidden')
forAdd($front, 'hidden')
forAdd($dev, 'hidden')
});
$devOps.addEventListener("click", (event)=>{
addById($devOps,'actives')
removeById($frontend,'actives')
removeById($english,'actives')
removeById($backEnd,'actives')

forToggle($dev, 'hidden')
forAdd($en, 'hidden')
forAdd($front, 'hidden')
forAdd($back, 'hidden')
});
