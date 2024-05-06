import React, { useState, useEffect } from "react";
import TituloPrincipal from '../component/TituloPrincipal';
import Menu from '../component/Menu';
import Rodape from '../component/Rodape';
import Cabecalho from '../component/Cabecalho';
import Tabela from '../component/TabelaPadrao';

function TodoList(){
    const listaStorage = localStorage.getItem('Lista');
    const [lista, setLista] = useState(listaStorage != null ? json.parse(listaStorage) : []);
    const [novoItem, setNovoItem] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [data, setData] = useState("");
    const [items, setNovo] = useState([]);

    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }, [lista]);

    const isValid = () =>{
        if (!tarefa || !data) {
            return true;
        }
        else{
            return false;
        }
    }

    function adicionaItem(form) {
        form.preventDefault();
        if (isValid()) {
            return;
        }

        setLista([...lista, 
        { 
            text: novoItem, 
            isCompleted: false 
        }]);

        setNovoItem("");
        document.getElementById('tarefa').focus();
    }

    return(
        <div>
            <Cabecalho />
            <Menu/>

            <div style={{margin: '3%'}}>
                <TituloPrincipal titulo='Lista de Tarefas' />

                <form className='formularioPrincipal' onSubmit={adicionaItem}>
                    <input 
                        type="text"
                        id='tarefa'
                        className='txt'
                        value={tarefa}
                        onChange={(e) => { setTarefa(e.target.value) }}
                        placeholder='digite a tarefa' 
                    />
                    &nbsp;
                    <input 
                        type="text" 
                        id='dataConclusao'
                        className='txt'
                        value={data}
                        onChange={(e) =>{ setData(e.target.value) }}
                        placeholder='digite a data de conclusão'
                    />
                    &nbsp;
                    <button 
                        type='submit' 
                        name='submit'
                        className='add'>add
                    </button>
                </form>

                <Tabela lista={lista}/>
            </div>
            <Rodape />
        </div>
    )};

export default TodoList;