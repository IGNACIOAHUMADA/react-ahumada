const data =[
  {
      "idProducto": 1,
      "nombre": "Macarrons", 
      "precio": 250,
      "imagen":"https://cdn7.kiwilimon.com/recetaimagen/16322/640x426/8271.jpg.webp",
      "stock": 20,
      "catidad": 0
  },
  {
      "idProducto": 2,
      "nombre": "Pavlova",
      "precio": 1500,
      "imagen": "https://www.bing.com/th?id=AMMS_ca4c020b5861c7c0ae53ddbe99f1b2ad&w=331&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1",
      "stock": 10,
      "catidad": 0
  },
  {
      "idProducto": 3,
      "nombre": "Torta Kit Kat",
      "precio": 1200,
      "imagen": "https://th.bing.com/th/id/OIP.N8ayGMmRo2UNscg4jFjBngHaFd?w=217&h=166&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "stock": 20,
      "catidad": 0
  },
  {
      "idProducto": 4,
      "nombre": "Tabletas",
      "precio": 300,
      "imagen": "https://th.bing.com/th/id/OIP.0lR-kEqN59GNYunFPT7sdgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "stock": 20,
      "catidad": 0
  }
  ]

  const getData = new Promise((resolve)=>{
    setTimeout(()=>{
    resolve(data);
}, 1000)
});
export default getData;