const $more = document.getElementById("more-gis");
const $gis = document.getElementById("gis");
const $less = document.getElementById("less-gis");

const $leaflet = document.getElementById('leaflet');
const $services = document.getElementById('servi-work');
const $world = document.getElementById('world');
const $desktop = document.getElementById('desktop');

const keyframeLeaf = [{
  transform: 'translateX(0px) translateY(0px) rotate(0deg)'
},
{
  transform: 'translateX(-80px) translateY(-20px) rotate(70deg)'
},
{
  transform: 'translateX(0px) translateY(0px) rotate(0deg)'
},
{
  transform: 'translateX(100px) translateY(-20px) rotate(-20deg)'
},
{
  transform: 'translateX(0px) translateY(0px) rotate(0deg)'
}];
const optionsLeaf = {
  duration: 5000,
  delay: 5000,
  direction: 'alternate',
  easing: 'ease-in-out',
  fill: 'backwards',
  iteration: 'infinite',
  iterationStart: 0,
  endDelay: 3000
}
const keyframeWorld = [{
  transform: 'rotateY(0deg) skewy(0deg)'
},
{
  transform: 'rotateY(180deg) skewy(20deg)'
}];
const keyframeDesktop = [{
  transform: 'translateY(0) rotateZ(0deg)'
},
{
  transform: 'translateY(50px) rotateZ(45deg)'
}];
const optionsDesktop = {
  duration: 5000,
  delay: 3000,
  direction: 'alternate',
  easing: 'ease',
  fill: 'backwards',
  iterationStart: 0,
  endDelay: 300
}
const optionsWorld = {
  duration: 5000,
  delay: 4000,
  direction: 'normal',
  easing: 'linear',
  fill: 'backwards',
  iterationStart: 0,
  endDelay: 3000,
}

$services.addEventListener("click", (event) =>{
  $leaflet.animate(keyframeLeaf, optionsLeaf)
  $world.animate(keyframeWorld, optionsWorld)
  $desktop.animate(keyframeDesktop, optionsDesktop)
});

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
