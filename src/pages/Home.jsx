import React, { useState, useEffect } from "react";
import TituloPrincipal from '../component/TituloPrincipal';
import Menu from '../component/Menu';
import Rodape from '../component/Rodape';
import Cabecalho from '../component/Cabecalho';
import TabelaDinamica from '../component/TabelaDinamica';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Home(){
    const lista =
    [{
        "ordem": 1,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2019\/02\/04\/botafogo-svg.svg",
        "nome_popular": "Botafogo",
        "pontos": 9,
        "jogos": 4,
        "vitorias": 3,
        "empates": 0,
        "derrotas": 1,
        // "faixa_classificacao_cor": "#0000ff",
        "gols_contra": 4,
        "gols_pro": 10,
        "saldo_gols": 6,
        "sigla": "BOT",
        "ultimos_jogos": ["d", "v", "v", "v"]
    }, {
        "ordem": 2,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2018\/03\/10\/atletico-mg.svg",
        "nome_popular": "Atl\u00e9tico-MG",
        "pontos": 9,
        "jogos": 5,
        "vitorias": 2,
        "empates": 3,
        "derrotas": 0,
        // "faixa_classificacao_cor": "#0000ff",
        "gols_contra": 3,
        "gols_pro": 9,
        "saldo_gols": 6,
        "sigla": "CAM",
        "ultimos_jogos": ["e", "e", "v", "v", "e"]
    }, {
        "ordem": 3,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2021\/06\/28\/bragantino.svg",
        "nome_popular": "Bragantino",
        "pontos": 9,
        "jogos": 5,
        "vitorias": 2,
        "empates": 3,
        "derrotas": 0,
        // "faixa_classificacao_cor": "#0000ff",
        "gols_contra": 5,
        "gols_pro": 7,
        "saldo_gols": 2,
        "sigla": "RBB",
        "ultimos_jogos": ["e", "v", "v", "e", "e"]
    }, {
        "ordem": 4,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2018\/04\/10\/Flamengo-2018.svg",
        "nome_popular": "Flamengo",
        "pontos": 8,
        "jogos": 5,
        "vitorias": 2,
        "empates": 2,
        "derrotas": 1,
        // "faixa_classificacao_cor": "#0000ff",
        "gols_contra": 5,
        "gols_pro": 5,
        "saldo_gols": 0,
        "sigla": "FLA",
        "ultimos_jogos": ["v", "v", "e", "d", "e"]
    }, {
        "ordem": 5,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2019\/09\/09\/Athletico-PR.svg",
        "nome_popular": "Athletico-PR",
        "pontos": 7,
        "jogos": 4,
        "vitorias": 2,
        "empates": 1,
        "derrotas": 1,
        // "faixa_classificacao_cor": "#00ffff",
        "gols_contra": 3,
        "gols_pro": 6,
        "saldo_gols": 3,
        "sigla": "CAP",
        "ultimos_jogos": ["v", "d", "v", "e"]
    }, {
        "ordem": 6,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2018\/03\/11\/bahia.svg",
        "nome_popular": "Bahia",
        "pontos": 7,
        "jogos": 4,
        "vitorias": 2,
        "empates": 1,
        "derrotas": 1,
        // "faixa_classificacao_cor": "#00ffff",
        "gols_contra": 5,
        "gols_pro": 6,
        "saldo_gols": 1,
        "sigla": "BAH",
        "ultimos_jogos": ["d", "v", "e", "v"]
    }, {
        "ordem": 7,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2018\/03\/11\/internacional.svg",
        "nome_popular": "Internacional",
        "pontos": 7,
        "jogos": 4,
        "vitorias": 2,
        "empates": 1,
        "derrotas": 1,
        // "faixa_classificacao_cor": "#008040",
        "gols_contra": 3,
        "gols_pro": 4,
        "saldo_gols": 1,
        "sigla": "INT",
        "ultimos_jogos": ["v", "v", "d", "e"]
    }, {
        "ordem": 8,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2021\/02\/13\/cruzeiro_2021.svg",
        "nome_popular": "Cruzeiro",
        "pontos": 7,
        "jogos": 4,
        "vitorias": 2,
        "empates": 1,
        "derrotas": 1,
        // "faixa_classificacao_cor": "#008040",
        "gols_contra": 7,
        "gols_pro": 7,
        "saldo_gols": 0,
        "sigla": "CRU",
        "ultimos_jogos": ["v", "e", "d", "v"]
    }, {
        "ordem": 9,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2018\/03\/12\/gremio.svg",
        "nome_popular": "Gr\u00eamio",
        "pontos": 6,
        "jogos": 4,
        "vitorias": 2,
        "empates": 0,
        "derrotas": 2,
        // "faixa_classificacao_cor": "#008040",
        "gols_contra": 3,
        "gols_pro": 4,
        "saldo_gols": 1,
        "sigla": "GRE",
        "ultimos_jogos": ["d", "v", "v", "d"]
    }, {
        "ordem": 10,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2021\/09\/19\/Fortaleza_2021_1.svg",
        "nome_popular": "Fortaleza",
        "pontos": 6,
        "jogos": 4,
        "vitorias": 1,
        "empates": 3,
        "derrotas": 0,
        // "faixa_classificacao_cor": "#008040",
        "gols_contra": 3,
        "gols_pro": 4,
        "saldo_gols": 1,
        "sigla": "FOR",
        "ultimos_jogos": ["v", "e", "e", "e"]
    }, {
        "ordem": 11,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2024\/03\/28\/Criciuma-2024.svg",
        "nome_popular": "Crici\u00fama",
        "pontos": 5,
        "jogos": 3,
        "vitorias": 1,
        "empates": 2,
        "derrotas": 0,
        // "faixa_classificacao_cor": "#008040",
        "gols_contra": 2,
        "gols_pro": 6,
        "saldo_gols": 4,
        "sigla": "CRI",
        "ultimos_jogos": ["e", "e", "v"]
    }, {
        "ordem": 12,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2019\/09\/30\/Corinthians.svg",
        "nome_popular": "Corinthians",
        "pontos": 5,
        "jogos": 5,
        "vitorias": 1,
        "empates": 2,
        "derrotas": 2,
        // "faixa_classificacao_cor": "#008040",
        "gols_contra": 3,
        "gols_pro": 3,
        "saldo_gols": 0,
        "sigla": "COR",
        "ultimos_jogos": ["e", "d", "d", "v", "e"]
    }, {
        "ordem": 13,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2019\/07\/06\/Palmeiras.svg",
        "nome_popular": "Palmeiras",
        "pontos": 5,
        "jogos": 4,
        "vitorias": 1,
        "empates": 2,
        "derrotas": 1,
        // "faixa_classificacao_cor": null,
        "gols_contra": 1,
        "gols_pro": 1,
        "saldo_gols": 0,
        "sigla": "PAL",
        "ultimos_jogos": ["v", "d", "e", "e"]
    }, {
        "ordem": 14,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2021\/04\/29\/Juventude-2021-01.svg",
        "nome_popular": "Juventude",
        "pontos": 5,
        "jogos": 4,
        "vitorias": 1,
        "empates": 2,
        "derrotas": 1,
        // "faixa_classificacao_cor": null,
        "gols_contra": 7,
        "gols_pro": 5,
        "saldo_gols": -2,
        "sigla": "JUV",
        "ultimos_jogos": ["e", "v", "d", "e"]
    }, {
        "ordem": 15,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2018\/03\/11\/fluminense.svg",
        "nome_popular": "Fluminense",
        "pontos": 5,
        "jogos": 5,
        "vitorias": 1,
        "empates": 2,
        "derrotas": 2,
        // "faixa_classificacao_cor": null,
        "gols_contra": 10,
        "gols_pro": 7,
        "saldo_gols": -3,
        "sigla": "FLU",
        "ultimos_jogos": ["e", "d", "v", "d", "e"]
    }, {
        "ordem": 16,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2018\/03\/11\/sao-paulo.svg",
        "nome_popular": "S\u00e3o Paulo",
        "pontos": 4,
        "jogos": 4,
        "vitorias": 1,
        "empates": 1,
        "derrotas": 2,
        // "faixa_classificacao_cor": null,
        "gols_contra": 4,
        "gols_pro": 5,
        "saldo_gols": 1,
        "sigla": "SAO",
        "ultimos_jogos": ["d", "d", "v", "e"]
    }, {
        "ordem": 17,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2021\/09\/04\/vasco_SVG.svg",
        "nome_popular": "Vasco",
        "pontos": 3,
        "jogos": 4,
        "vitorias": 1,
        "empates": 0,
        "derrotas": 3,
        // "faixa_classificacao_cor": "#ff0000",
        "gols_contra": 9,
        "gols_pro": 4,
        "saldo_gols": -5,
        "sigla": "VAS",
        "ultimos_jogos": ["v", "d", "d", "d"]
    }, {
        "ordem": 18,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2024\/04\/09\/escudo-vitoria-svg-69281.svg",
        "nome_popular": "Vit\u00f3ria",
        "pontos": 1,
        "jogos": 3,
        "vitorias": 0,
        "empates": 1,
        "derrotas": 2,
        // "faixa_classificacao_cor": "#ff0000",
        "gols_contra": 6,
        "gols_pro": 3,
        "saldo_gols": -3,
        "sigla": "VIT",
        "ultimos_jogos": ["d", "e", "d"]
    }, {
        "ordem": 19,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2020\/07\/02\/atletico-go-2020.svg",
        "nome_popular": "Atl\u00e9tico-GO",
        "pontos": 1,
        "jogos": 4,
        "vitorias": 0,
        "empates": 1,
        "derrotas": 3,
        // "faixa_classificacao_cor": "#ff0000",
        "gols_contra": 7,
        "gols_pro": 2,
        "saldo_gols": -5,
        "sigla": "ACG",
        "ultimos_jogos": ["d", "d", "d", "e"]
    }, {
        "ordem": 20,
        "escudo": "https:\/\/s.sde.globo.com\/media\/organizations\/2018\/12\/26\/Cuiaba_EC.svg",
        "nome_popular": "Cuiab\u00e1",
        "pontos": 0,
        "jogos": 3,
        "vitorias": 0,
        "empates": 0,
        "derrotas": 3,
        // "faixa_classificacao_cor": "#ff0000",
        "gols_contra": 8,
        "gols_pro": 0,
        "saldo_gols": -8,
        "sigla": "CUI",
        "ultimos_jogos": ["d", "d", "d"]
    }
    ];

    const [lista2, setDados] = useState([
        { nome: "João", idade: 30, cidade: "São Paulo" },
        { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
        { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
    ]);
    
    return ( 
        <div>
            <Cabecalho />
            <Menu />
            <TituloPrincipal titulo='Home' />
            &nbsp;
            <TabelaDinamica titulo ="tabela brasileirão" lista={lista}/>
            <Rodape />
        </div> 
    )};
