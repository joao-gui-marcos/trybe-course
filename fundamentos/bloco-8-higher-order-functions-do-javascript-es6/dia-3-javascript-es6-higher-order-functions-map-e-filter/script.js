const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const formatedBookNames = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)
//console.log(formatedBookNames)

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
const nameAndAge = books.map((element) => {
  const obj = {}
  obj.author = element.author.name
  obj.age = element.releaseYear - element.author.birthYear
  return obj
})

nameAndAge.sort((a, b) => a.age - b.age)
//console.log(nameAndAge)

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const fantasyOrScienceFiction = books.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica')
//console.log(fantasyOrScienceFiction)

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
const oldBooksOrdered = books.filter((element) => 2022 - element.releaseYear > 60)
oldBooksOrdered.sort((a, b) => a.releaseYear - b.releaseYear)
//console.log(oldBooksOrdered)

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const authorNamesFantasyOrScienceFiction = fantasyOrScienceFiction.map((element) => element.author.name)
authorNamesFantasyOrScienceFiction.sort()
//console.log(authorNamesFantasyOrScienceFiction)

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const nameOldBooksOrdered = oldBooksOrdered.map((element) => element.name)
//console.log(nameOldBooksOrdered)

//  7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const authorNames = books.map((element) => element.author.name)
//console.log(authorNames)
const threeInitials = authorNames.filter((element) => element[1] === '.' && element[4] === '.' && element[7] === '.')
//console.log(threeInitials)
const bookWritenByAuthorWithThreeInitials = books.filter((element) => element.author.name === threeInitials[0])
const bookWritenByAuthorWithThreeInitialsString = bookWritenByAuthorWithThreeInitials[0].name
console.log(bookWritenByAuthorWithThreeInitialsString)