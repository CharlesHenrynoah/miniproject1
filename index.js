/*Cette variable va dans le doc html prends le tag par 
son nom body en indexant le premier élément de celui-ci*/
const body = document.getElementsByTagName("body")[0]
/*nous avons changer la couleur du background*/
/*body.style.backgroundColor = "red"*/

/*Création de la fonction qui va changer la coueleur du background 
en prennant en paramètre le nom de cette couleur*/
function setColor(name){
  body.style.backgroundColor = name;
}

function randomColor() {
  /*Ceci sont les constante qui von définir la variablité du 
  ton de la couleur de manière aléatoire sur un spectre allant jusqu'à 255 */
  const red = Math.round(Math.random()*255)
  const green = Math.round(Math.random()*255)
  const blue = Math.round(Math.random()*255)
  /*Cette partie concerne la définition de la constante couleur qui sera une couleur rgb, 
  representant différentes couleur*/
  const color = `rgb(${red},${green}, ${blue})`
  body.style.backgroundColor = color; 
}

