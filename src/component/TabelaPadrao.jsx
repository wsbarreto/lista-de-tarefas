import React, { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Icone from '../assets/icon.webp';

function TabelaPadrao({ titulo, lista }){
    
    function clicou(index, lista) {
        console.log('TabelaPadrao');
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    };

    function deleta(index, lista) {
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setLista(listaAux);
    };

    function deletatudo() {
        setLista([]);
    };

    function criarTabela() {
        console.log('criarTabela');
        // Criar a tabela e o cabeçalho
        var tabela = document.createElement("table");
        var cabecalho = tabela.createTHead();
        var linhaCabecalho = cabecalho.insertRow();

        // Adicionar os cabeçalhos das colunas
        for (var chave in lista[0]) {
            var th = document.createElement("th");
            th.textContent = chave;
            linhaCabecalho.appendChild(th);
        }

        // Adicionar os dados às linhas da tabela
        var corpo = tabela.createTBody();
        lista.forEach(function(item) {
            var linha = corpo.insertRow();
            for (var chave in item) {
                var celula = linha.insertCell();
                celula.textContent = item[chave];
            }
        });

        return tabela;
    }

    return ( 
        <div className="listaTarefas">
            <div style={{ textAlign: 'center' }}>
                {
                    lista.length < 1
                    ?
                        <img className="icone-central" src={Icone} />
                    :
                        lista.map((item, index) => (
                        <div
                            key={index}
                            className={item.isCompleted ? "item completo" : "item"}
                        >
                            <span onClick={() => { clicou(index) }}>{item.text}</span>
                            <button onClick={() => { deleta(index, lista) }} className="del">Deletar</button>
                        </div>
                    ))
                }
                {
                    lista.length > 0 &&
                    <button onClick={() => { deletaTudo() }} className="deleteAll">Deletar Todas</button>
                }
            </div>

            

        </div>
    )};

export default TabelaPadrao;