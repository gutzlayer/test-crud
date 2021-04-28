# AKNA Lib :book:

## Considerações iniciais

Eu fiz esse projeto de acordo com o teste que me foi enviado na segunda-feira(26/04) para ser entregue na quarta-feira(28/04), espero que gostem do conteúdo e aguardo para uma possível conversa.

## Sobre o Projeto :memo:

Eu fiz um CRUD imaginando um possível estoquista de loja e seu controle sobre os produtos.

Eu vi que era para ser feito em duas telas, porém o esquema de "Single Page" se encaixou melhor.

Outra coisa também, foi o DropDown, ele ia ficar um pouco feio com o padrão tabela e não entendi muito bem como ele se encaixaria.

Mas como disse antes, eu pensei num estoquista e coloquei o ID para referenciar os produtos, com isso as colunas são:

1- ID, 2-LIVRO, 3-AUTOR, 4-PREÇO e 5-AÇÕES(botões de Editar e Excluir).

## Futuras melhorias :memo:

Futuramente poderá ser adicionado um filtro de ordem e um filtro de adicionados nos elementos ID, Livros, Autor e preço, depois de uma certa quantidade de livros ter uma paginação embaixo das lista e além de uma cara nova pro futuro site.

## Tecnologias usadas :heavy_check_mark:

Eu desenvolvi o projeto com React como principal tecnologia, onde utilizei um pouco de JavaScript em alguns casos, para fazer os botões e os estilos dos formulários eu utilizei, pela primeira vez, o Bootstrap e também um gerenciador de pacotes NPM.

### Para rodar o projeto

Para rodar o projeto você deverá iniciá-lo com npm start.

### Exemplo do código

const data = [
{ id: 1, livro: "O Primo Basílio", autor: "Eça de Queirós", preco:"25"},
{ id: 2, livro: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", preco:"25"},
{ id: 3, livro: "Sherlock Holmes", autor: "Arthur Conan Doyle", preco:"25"},
{ id: 4, livro: "O Conde de Monte Cristo", autor: "Alexandre Dumas", preco:"25"},
{ id: 5, livro: "O pequeno Príncipe", autor: "Antoine de Saint-Exupéry e Robson Luis Nicolay", preco:"25"},
];

class App extends React.Component{
state= {
data:data,
form:{
id:'',
livro:'',
autor:'',
preco:'',
},
modalAdicionar: false,
modalEditar: false,
};

    ...

    ...

    ...

### Considerações finais

Desde já agradeço a oportunidade.

Muito obrigado pelo apoio e tomara que dê tudo certo para continuarmos no processo.

Até mais :handshake: , Gustavo Silva
