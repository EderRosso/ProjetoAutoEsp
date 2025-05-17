const mongoose = require('mongoose');
require('dotenv').config(); // Certifique-se de chamar isso antes de acessar process.env

// mongoose.connect(process.env.MONGO_CONNECT, ()=>{
//     console.log("Conectado!!")
// })


const user = process.env.MONGO_USER;
const password = encodeURIComponent(process.env.MONGO_PASSWORD); // codifica senha com caracteres especiais
const uri = `mongodb+srv://${user}:${password}@cluster0.mwboe3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
  .then(() => console.log("Conectado!!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));