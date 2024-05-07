import React, { useState, useEffect } from 'react';
import Icone from '../assets/icon.webp';
import Table from 'react-bootstrap/Table';

    // Array global
    const arrayGlobal = [];

export default class TabelaDinamica2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          // Você pode inicializar o estado com o array global se precisar modificá-lo localmente
          items: arrayGlobal
        };

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
      }

    
    
    
    



















  render() {
    // useEffect(() => {
    //     localStorage.setItem('lista', JSON.stringify(this.props.lista));
    // }, [this.props.lista]);
    
    // localStorage.setItem('titulo-tabela', this.props.titulo);
    // console.log('props: ', this.props);
    return(
        <div className="App">
            <ProductTable
                products={null}
                title={'titulo'}
            />
            </div>
    )
  }
}


