// 986592cac35e7c6455536dcc37352645986592cac35e7c6455536dcc37352645
// id potosi 4404348
// id cochabamba 3919966
// url api.openweathermap.org/data/2.5/weather?id=4404348&units=metric&appid={986592cac35e7c6455536dcc37352645986592cac35e7c6455536dcc37352645}

const requestURL="api.openweathermap.org/data/2.5/weather?id=4404348&units=metric&appid={986592cac35e7c6455536dcc37352645986592cac35e7c6455536dcc37352645}"
const request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType='json';
request.send();

// obteniendo los datos json

request.onload=function()
{
    const clima_json= request.response;
    console.log(clima_json); 
}