import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Criando uma API com Node.js",
    "/livros": "Entrei na rota Livros",
    "/autores": "Entrei na rota Autores"
}

app.listen(PORT, () => {
    console.log("Servidor on...")
})