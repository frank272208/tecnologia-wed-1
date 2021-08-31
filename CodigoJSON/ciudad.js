//const header = document.querySelector('header');
//const section = document.querySelector('section');
const requestURL = "https://faviolasoliz.github.io/MiRepositorio/Practicas/JSON/ciudad.json";
//const requestURL = "https://frank272208.github.io/tecnologia-wed-1/CodigoJSON/ciudad.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const ObjetoJson = request.response;
    console.log(ObjetoJson);
    MostrarTitulo(ObjetoJson);
    MostrarCiudades(ObjetoJson);
  }

  function MostrarTitulo(jsonObj) {

    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Titulo'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Pais: ' + jsonObj['pais'];
    header.appendChild(myPara);
  }

  function MostrarCiudades(jsonObj) {

    const section1 = document.querySelector('section');

    const ciudad = jsonObj['ciudades'];
  
    for (var i = 0; i < ciudad.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = 'Ciudad';
      myPara1.textContent = 'Ciudad: ' + ciudad[i].nombre;
      myPara2.textContent = 'Fundada el: ' + ciudad[i].fundacion;
      myPara3.textContent = 'Lugares turisticos:';
  
      const lugares = ciudad[i].lugares_turisticos;
      for (var j = 0; j < lugares.length; j++) 
      {
        const listItem = document.createElement('li');
        listItem.textContent = lugares[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
      section1.appendChild(myArticle);
    }
  }