const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = 'https://frank272208.github.io/tecnologia-wed-1/ejemplo/ciudades.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
//conexion
request.responseType = 'json';
request.send();
//obteniendo los dalos de json
request.onload = function () {
    const ciudades_json = request.response;
    console.log(ciudades_json);
    //   populateHeader(superHeroes);
    // showHeroes(superHeroes);
    mostrartitulo(ciudades_json);
    mostrarciudades(ciudades_json);
}
function mostrartitulo(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['titulo'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'pais: ' + jsonObj['pais'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}
function mostrarciudades(jsonObj) {
    const ciudades1 = jsonObj['ciudades'];

    for (var i = 0; i < ciudades1.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        //  const myPara2 = document.createElement('p');
        //   const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        //nombre de la ciudad
        myH2.textContent = ciudades1[i].nombre;
        // para mostrar la fecha de fundacion
        myPara1.textContent = 'fundado el : ' + ciudades1[i].fundacion;
        //myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'lugares turisticos:';

        const lugares = ciudades1[i].lugares_turisticos;
        for (var j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = ciudades1[j];
            myList.appendChild(listItem);
        }
    }
}