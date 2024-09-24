//Obtener los datos usando jsonsplaceholder

const url = 'https://jsonplaceholder.typicode.com/users';

//obtener los datos 

const btn_pedirtodo = document.getElementById("btn_todo");
const btn_FiltrarNombre = document.getElementById("btn_filtrarNombre");
const btn_Sort = document.getElementById("btn_Sort");
const btn_ID = document.getElementById("btn_Identificador");


//Listado de botones 


btn_pedirtodo.onclick = originalFetch();
btnFiltrarNombre.onclick = filtrarNombre;
btnSort.onclick = sortData;
btnID.onclick = filtrarID;


//Consultas funciones 

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  
  async function originalFetch() 
  {
    const data = await fetchData();
    console.log(data);
  }
  
  
  async function filtrarNombre() {
    const data = await fetchData();
    data.forEach(function(user) {
      console.log(user.name);
    });
  }
  
  
  async function sortData() {
    const data = await fetchData();
    const sortedData = data.sort((a, b) => (a.id > b.id ? 1 : -1));
    console.log(sortedData);
  
  }
  
  
  async function filtrarID() {
    const data = await fetchData();
    const idEven = data.filter(i => i.id > 3);
    console.log(idEven);
  
  }
  
  
  async function reduceData() {
  
    const data = await fetchData();
    const total = data.reduce(function(t, i) {
      return t + i.id;
    }, 0);
    console.log(total);
  
  }
  
  
  async function mapData() {
    const data = await fetchData();
    const resultadoMap =document.getElementById("resultado-map");
    const testmap = data.map(function(m) {
      return `${m.name} [${m.address.street} - ${m.address.city}]`;
    });
    resultadoMap.innerHTML = "";
    testmap.forEach(function(item) {
        resultadoMap.innerHTML += `<p>${item}</p>`;

    });
    }

    //console.log(testmap);
  