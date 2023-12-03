import express from 'express'; 

import conexao from '../infra/conexao.js'; 

const app = express(); 

app.use(express.json()); 
    

// ROTAS

app.get('/selecoes', (req, res) => {
    const SQL = "SELECT * FROM selecoes"
    conexao.query(SQL, (erro, result) => {
        if(erro) {
            res.status(404).json({ "erro": erro })
        } else {
            res.status(200).json(result)
        }
    });
});

app.get('/selecoes/:id', (req, res) => {
    const ID = req.params.id
    const SQL = "SELECT * FROM selecoes WHERE id=?"
    conexao.query(SQL, ID, (erro, result) => {
        const LINHA = result[0]
        if(erro) {
            res.status(404).json({ "erro": erro })
        } else {
            res.status(200).json(LINHA)
        }
    });
});

app.post('/selecoes', (req, res) => {
    const SELECAO = req.body
    const SQL = "INSERT INTO selecoes SET ?"
    conexao.query(SQL, SELECAO, (erro, result) => {
        if(erro) {
            res.status(400).json({ "erro": erro })
        } else {
            res.status(201).json(result)
        }
    });
});

app.delete('/selecoes/:id', (req, res) => {
    const ID = req.params.id
    const SQL = "DELETE FROM selecoes WHERE id=?"
    conexao.query(SQL, ID, (erro, result) => {
        if(erro) {
            res.status(404).json({ "erro": erro })
        } else {
            res.status(200).json(result)
        }
    });
});

app.put('/selecoes/:id', (req, res) => {
    const SELECAO = req.body
    const ID = req.params.id
    const SQL = "UPDATE selecoes SET ? WHERE id=?"
    conexao.query(SQL, [SELECAO, ID], (erro, result) => {
        if(erro) {
            res.status(400).json({ "erro": erro })
        } else {
            res.status(200).json(result)
        }
    });
});

export default app;