'use strict';
//selecionar elementos del dom
let myTitle = document.getElementById("titulo")  //Get tomar informacion ; Set dar un valor
//selecionar por el name
//console.log(myTitle);
let tagName = document.getElementsByName("art1");
//slecion por etiqueta
let etiqueta = document.getElemnetsByTagName("h3");
//console.log(etiqueta);
//QuerySelector
let queryContainer = document.querySeleector("#container");
//QuerySelector class
let myMenu =document.querySelector(".menu");
//console.log(myMenu);
//QuerySelector etiquetas
let myOl =document.querySelector("ol");
console.log(myOl);
// all
let allArt = document. quierySelecroAll("article");
console.log(allArt);
let miParrafo = document.createElement ("p");
miParrafo.id="parrafo";
miParrafo.className="Parrafo";
miParrafo.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores, quisquam ea minima ratione excepturi aspernatur totam assumenda architecto impedit rerum earum aperiam qui sit. Autem sint dolor reiciendis! Quam"
miParrafo.innerHTML = "<h2>esto es otro titulo</h2>Lorem ipsum dolor sit amet <strong> Consectetur </strong";
//insertar elemento en el DOM Inner me recibe las etiquetas
document.body.appendChild(miParrafo);
//Selecion elemento
let seccion1 = document.getElementById("section1");
seccion1.appendChild(miParrafo);

//Evento por propiedad
const btnPropiedad = document.getElementById('btnPropiedad');
btnPropiedad.onclick = function(){
 alert('click generado por proiedad');
}

//Evento por el método addEventListener
const inputName = documenbt.getElementById('nombre')
inputName.addEventListener('click',()=>{
    console.log(inputName.value);

});
