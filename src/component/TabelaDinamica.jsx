import React, { useState, useEffect } from 'react';
import Icone from '../assets/icon.webp';
import Table from 'react-bootstrap/Table';

export const dadosList = [];
let search = false;

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];

        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);
    
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

function handleInput(e, dados, index) {
    searchTable(e.target.value, dados, index);
};

function searchTable(value, dados, index) {
    if (value.length === 0) {
        return dados; // ESTE RETORNO IRA RESTAURAR OS DADOS ORIGINAIS DO DATA
    }

    search = true;
    const chave = Object.keys(dados[0])[index];

    // Filtrar os dados com base no termo de busca
    const resultado = dados.filter(item =>
        String(item[chave].toLowerCase()).includes(value.toLowerCase()));

    if (resultado) {
        localStorage.setItem('resultSearch', Object.values(resultado));
        dadosList.splice(0, dadosList.length);
        Object.values(resultado).forEach(element => {
            dadosList.push(element);
        });

        console.log('dadosList2: ', dadosList);
    }
}

const ProductTable = (props, title) => {  
    // const [dataList, setDataList] = useState(props.products); 
    // setDataList(props.products);
    const { items, requestSort, sortConfig } = useSortableData(props.products); 
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const https = 'https';
    title = localStorage.getItem('titulo-tabela');
    
    return (
        <Table responsive striped bordered hover variant="dark">
            <caption>{props.title}</caption>
            <thead>
                <tr>
                {/* Renderizar cabeçalhos das colunas */}
                    {Object.keys(items[0]).map((chave, index) => (
                        <th 
                            key={chave} 
                            onClick={() => requestSort(chave)}
                            className={getClassNamesFor(chave)}>{chave} 
                            <input
                                className="form-input"
                                onChange={(e) => handleInput(e, items, index)}
                                id="input-table"
                                placeholder="Ache um busca"/>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* Renderizar linhas da tabela com os dados */}
                {items.map((item, index) => (
                    <tr key={index} >
                        {Object.values(item).map((valor, index) => (
                            String(valor).includes(https)
                            ?
                                <td key={index}><img src={valor} alt="" width={30} /></td>
                            :
                                <td key={index}>{valor}</td>
                        ))}
                        {/* <span onClick={() => { clicou(index) }}>{item.text}</span> */}
                        <td><button onClick={() => { deleta(index, lista) }} className="del">deletar</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default function TabelaDinamica({ titulo, lista }) {
    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }, [lista]);
    
    localStorage.setItem('titulo-tabela', titulo);
    return(
        <div className="App">
            <ProductTable
                products={lista}
                title={titulo}
            />
            </div>
    )
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