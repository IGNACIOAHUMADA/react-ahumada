const data =[
  {
      "idProducto": 1,
      "nombre": "Macarrons", 
      "precio": 250,
      "imagen":"../../components/ItemList/imagenes/macarrones.jpeg",
      "stock": 20,
      "catidad": 0
  },
  {
      "idProducto": 2,
      "nombre": "Pavlova",
      "precio": 1500,
      "imagen": "../../components/ItemList/imagenes/pavlova.jpeg",
      "stock": 10,
      "catidad": 0
  },
  {
      "idProducto": 3,
      "nombre": "Torta Kit Kat",
      "precio": 1200,
      "imagen": "../../imagenes/torta_colores.jpeg",
      "stock": 20,
      "catidad": 0
  },
  {
      "idProducto": 4,
      "nombre": "Tabletas",
      "precio": 300,
      "imagen": "../../imagenes/tabletas.jpeg",
      "stock": 20,
      "catidad": 0
  }
  ]

  const getData = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(data);
    }, 3000)
  });
  export default getData