import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export const dadosList = [];

export default function TabelaDinamica({ titulo, lista }) {
    const [data, setData] = useState(lista);
    const [dataOriginal] = useState(lista);
    const [keyOrder, setColunaOrdenacao] = useState(null);
    const [sortConfig, setSortConfig] = useState(null);

    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }, [lista]);

    const handleOrdenacao = (e, key) => {

        if (e.target.tagName === 'INPUT') {
            return;
        }
        let direction = 'ascending';

        if (sortConfig !== null){
            if (sortConfig && sortConfig.key === keyOrder && sortConfig.direction === 'ascending') {
                direction = 'descending';
            }
        }
        
        setColunaOrdenacao(key);
        setSortConfig({ key, direction });
    };

    // Função para classificar os dados da tabela com base na coluna e na ordem de classificação
    const dadosOrdenados = data.sort((a, b) => {
        if (sortConfig !== null) {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        }
        return 0;
    });

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    
    const handleFocus = () => {
        // setFocado(true);
    };
    
    const handleBlur = () => {
        // setFocado(false);
    };
    
    function handleInput(e, index) {
        const result = searchTable(e.target.value, index);
        setData(result);
        return result;
    };
    
    function searchTable(value, index) {
        if (value.length === 0) {
            return dataOriginal;
        }
    
        const dadosFiltrados = dataOriginal.slice();
        const chave = Object.keys(dadosFiltrados[0])[index];
        console.log('index: ', index);
        console.log('chave: ', chave);
        console.log('value: ', value);        

        const resultado = dadosFiltrados.filter(item => 
            String(item[chave]).toLowerCase().includes(value.toLowerCase()));

        // const resultado = dadosFiltrados.filter(item => {
        //     if (isNaN(value)) {
        //         String(item[chave]).includes(value);
        //     }
        //     else{
        //         String(item[chave]).toLowerCase().includes(value.toLowerCase())
        //     }
        // });
        
        if (resultado.length <= 0) {
            const keys = Object.keys(dadosFiltrados[0]);
            
            let json = '{';
            keys.forEach(element => {
                json += "\"" + element + "\": " + "\"\", ";
            });
            json = json.substring(0, json.length - 2) + '}';

            resultado.push(JSON.parse(json));
            return resultado;
        }
 
        if (resultado.length > 0) {
            dadosList.splice(0, dadosList.length);
            Object.values(resultado).forEach(element => {
                dadosList.push(element);
            });
            return resultado;
        }
        return dados;
    };
    
    return (
        <Table responsive striped bordered hover variant="dark">
            <caption>{titulo}</caption>
            <thead>
                <tr>
                {/* Renderizar cabeçalhos das colunas */}
                    {Object.keys(data[0]).map((chave, index) => (
                        <th 
                            key={chave} 
                            onClick={(e) => handleOrdenacao(e, chave)}
                            className={getClassNamesFor(chave)}
                            >{chave} <br />
                            <input
                                key={index}
                                className="form-input"
                                onChange={(e) => handleInput(e, index) }
                                id="input-table"
                                placeholder="busca"/>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* Renderizar linhas da tabela com os dados */}
                {
                    data.length <= 0
                    ?
                        <tr><p>nenhum resultado da busca</p></tr>
                    :
                        data.map((item, index) => (
                            <tr key={index} >
                                {Object.values(item).map((valor, index) => (
                                    String(valor).includes('https')
                                    ?
                                        <td key={index}><img src={valor} alt="" width={30} /></td>
                                    :
                                        <td key={index}>{valor}</td>
                                ))}
                                <td><button onClick={() => { deleta(index, data) }} className="del">deletar</button></td>
                            </tr>
                ))}
            </tbody>
        </Table>
    );
};






















// function clicou(index, lista) {
    //     console.log('clicou');
    //     const listaAux = [...lista];
    //     listaAux[index].isCompleted = !listaAux[index].isCompleted;
    //     setLista(listaAux);
    // };

    // function deleta(index, lista) {
    //     console.log('op: ', JSON.parse(lista));
    //     const [listaAux, setLista] = useState(lista != null ? JSON.parse(lista) : []);
    //     // const listaAux = [...lista];
    //     listaAux.splice(index, 1);
    //     setDados(listaAux);
    //     console.log('op2: ');
    // };

    // const [filtro, setFiltro] = useState('');
    // const [ordenacao, setOrdenacao] = useState(null);

    // // Função para filtrar os dados com base no filtro atual
    // const dadosFiltrados = lista.filter(item =>
    //     String(item).toLowerCase().includes(filtro.toLowerCase())
    // );

    // // Função para ordenar os dados com base na coluna selecionada
    // const ordenarDados = (coluna) => {
    //     if (ordenacao && ordenacao.coluna === coluna) {
    //         // Inverte a ordem se a mesma coluna for clicada novamente
    //         setOrdenacao({ coluna, ascendente: !ordenacao.ascendente });
    //     } else {
    //         // Inicializa a ordenação com a coluna clicada
    //         setOrdenacao({ coluna, ascendente: true });
    //     }
    // };

    // // Ordena os dados com base na ordenação atual
    // const dadosOrdenados = ordenacao 
    // ?
    //     dadosFiltrados.slice().sort((a, b) => {
    //         const valueA = a[ordenacao.coluna];
    //         const valueB = b[ordenacao.coluna];
            
    //         if (typeof valueA === 'string' && typeof valueB === 'string') {
    //             return ordenacao.ascendente ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    //         } else {
    //             return ordenacao.ascendente ? valueA - valueB : valueB - valueA;
    //         }
    //     }) 
    // :
    //     dadosFiltrados;

    //     const { products } = lista;
    //     const [sortedField, setSortedField] = React.useState(null);

    //     const ProductsTable = () => {
    //         let sortedProducts = [...products];
    //         if (sortedField !== null) 
    //         {
    //             sortedProducts.sort((a, b) => {
    //             if (a[sortedField] < b[sortedField]) {
    //                 return -1;
    //             }
    //             if (a[sortedField] > b[sortedField]) {
    //                 return 1;
    //             }
    //             return 0;
    //             });
    //         }
    //     }

    //     const https = 'https';
    //     const cor = '#';

    // return (
    //     <div style={{ textAlign: 'center' }}>
    //         <h2 style={{color: 'white', padding: 5}}>{titulo}</h2>
    //         <input
    //     type="text"
    //     placeholder="Filtrar por nome"
    //     value={filtro}
    //     onChange={(e) => setFiltro(e.target.value)}
    //   />
    //         {
    //             lista.length < 1
    //             ?
    //                 <img className="icone-central" src={Icone} />
    //             :
    //                 <Table responsive striped bordered hover variant="dark">
    //                     <thead>
    //                         <tr>
    //                             {/* Renderizar cabeçalhos das colunas */}
    //                             {Object.keys(lista[0]).map(chave => (
    //                                 <th key={chave} onClick={() => setSortedField(chave)}>{chave}</th>
    //                             ))}
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {/* Renderizar linhas da tabela com os dados */}
    //                         {lista.map((item, index) => (
    //                             <tr key={index} >
    //                                 {Object.values(item).map((valor, index) => (
    //                                     String(valor).includes(https)
    //                                     ?
    //                                         <td key={index}><img src={valor} alt="" width={30} /></td>
    //                                     :
    //                                         <td key={index}>{valor}</td>
    //                                 ))}
    //                                 {/* <span onClick={() => { clicou(index) }}>{item.text}</span> */}
    //                                 <button onClick={() => { deleta(index, lista) }} className="del">deletar</button>
    //                             </tr>
    //                         ))}
    //                     </tbody>
    //             </Table>
    //         }
    //         {
    //             lista.length > 0 &&
    //             <button onClick={() => { deletaTudo() }} className="deleteAll">Deletar Todas</button>
    //         }
    //     </div>
    // );