import express from "express";
import{Request, Response} from "express";
const app = express();

//funcionalidades
//Metodos/Verbos HTTP -> POST e GET
//quando requisicao for metodo GET

app.get("/", (request: Request, response: Response) =>{
    response.send("Hello World!");
});

app.get("/jogo/listar/:param1", (request: Request, response: Response) => {
   const jogo = {
       titulo:"CS",
       plataforma:"PC",
       valor:50.99,
       genero:"FPS"
   }; 

    response.json(jogo);
});

app.listen(3000, () => {
    console.log("O servidor está rodando...");
});





//constante tipo numerico
//const texto: number = 123;
//variavel tipo numerico
//let texto: number;
