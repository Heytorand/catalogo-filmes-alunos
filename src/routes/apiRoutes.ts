// 🎯 TODO 1: Criar API de filmes (JSON)
import { Router } from "express";
import { readFileSync, writeFileSync } from "fs";
export const apiRoutes = Router();

interface Filme { id:number; titulo:string; diretor:string; ano:number; genero:string; nota:number; }
function carregar(): Filme[] { return JSON.parse(readFileSync("dados/filmes.json","utf-8")); }
function salvar(f: Filme[]) { writeFileSync("dados/filmes.json", JSON.stringify(f,null,2)); }

// 🎯 TODO 2: GET /api/filmes — listar (com filtro ?genero=ficção)
// res.json({ sucesso:true, dados:filmes, total:filmes.length })


// 🎯 TODO 3: POST /api/filmes — criar
// Validar: titulo obrigatório, nota 0-10
// res.status(201).json({ sucesso:true, dados:novo })


// 🎯 TODO 4: DELETE /api/filmes/:id — remover
// res.json({ sucesso:true })

