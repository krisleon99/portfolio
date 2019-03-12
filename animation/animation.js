$(function(){

  const $sol = document.getElementById('sol');
  const $luna = document.getElementById('luna');
  const $fin = document.getElementById('fin');

  $luna.addEventListener('animationend', (event) => {

    $sol.style.animationPlayState = 'running';

  });

  $sol.addEventListener('animationend', (event) => {

    $sol.style.display = 'none';
    $fin.style.display = 'inline';

  });

  $fin.addEventListener('animationend', (event) => {

    $fin.style.opacity = '1';

  });

});
