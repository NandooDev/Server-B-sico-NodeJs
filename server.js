import app from './src/app.js';

const PORT = 3000; // definicao da porta

// escutar a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});