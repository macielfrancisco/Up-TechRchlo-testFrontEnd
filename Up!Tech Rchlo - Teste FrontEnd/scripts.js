// Declarando variáveis e pegando o elemento HTML pelo ID

let name = document.getElementById('fullName')
let email = document.getElementById('email')
let cpf = document.getElementById('cpf')
let amount = document.getElementById('amount')
let flagCard = document.getElementById('flagCard')
let numberCard = document.getElementById('numberCard')
let shelfLife = document.getElementById('shelfLife')
let cvv = document.getElementById('cvv')

// Função que irá adicionar um evento que ao escolher um número, ativará a função que mostrará o total do valor de quantos produtos o cliente escolheu

amount.addEventListener('change', event => {
  document.getElementById('price').value =
    'R$ ' + sumProduct(amount.value).replace('.', ',')
})

// Função que irá somar a quantidade de itens que o cliente irá adquirir e retornar o total a pagar (Limitado a apenas 5 itens em estoque disponíveis )

function sumProduct(total) {
  let price = document.getElementById('price')
  let priceNumber = price.value.replace('R$', ' ').replace(',', '.')

  console.log(price)
  console.log(priceNumber)

  if (total == 0) {
    total = 0
    priceNumber = 69.9
    total *= Number(priceNumber)
  } else if (total == 1) {
    total = 1
    priceNumber = 69.9
    total *= Number(priceNumber)
  } else if (total == 2) {
    total = 2
    priceNumber = 69.9
    total *= Number(priceNumber)
  } else if (total == 3) {
    total = 3
    priceNumber = 69.9
    total *= Number(priceNumber)
  } else if (total == 4) {
    total = 4
    priceNumber = 69.9
    total *= Number(priceNumber)
  } else if (total == 5) {
    total = 5
    priceNumber = 69.9
    total *= Number(priceNumber)
  } else {
    total = Number(priceNumber)
  }

  return total.toFixed(2)
}

// Manipulando erros do formulário

name.oninvalid = function () {
  // remove mensagens de erro padrão
  this.setCustomValidity('')

  // faz a validação novamente
  if (!this.validity.valid) {
    // se estiver inválido, coloca a mensagem
    this.setCustomValidity('Esse campo é obrigatório!')
    name.style.borderColor = 'red'
  } else {
    this.setCustomValidity('')
    name.style.borderColor = 'green'
  }
}

email.oninvalid = function () {
  // remove mensagens de erro padrão
  this.setCustomValidity('')
  // faz a validação novamente
  if (!this.validity.valid) {
    // se estiver inválido, coloca a mensagem
    this.setCustomValidity(
      'E-mail obrigatório e que seja válido! Exemplo: example@example.com'
    )
    email.style.borderColor = 'red'
  } else {
    this.setCustomValidity('')
    email.style.borderColor = 'green'
  }
}

cpf.oninvalid = function () {
  // remove mensagens de erro padrão
  this.setCustomValidity('')
  // faz a validação novamente
  if (!this.validity.valid) {
    // se estiver inválido, coloca a mensagem
    this.setCustomValidity(
      'CPF obrigatório e que seja válido! Exemplo: 000.000.000-00'
    )
    cpf.style.borderColor = 'red'
  } else {
    this.setCustomValidity('')
    cpf.style.borderColor = 'green'
  }
}

amount.oninvalid = function () {
  // remove mensagens de erro padrão
  this.setCustomValidity('')
  // faz a validação novamente
  if (!this.validity.valid) {
    // se estiver inválido, coloca a mensagem
    this.setCustomValidity('Esse campo é obrigatório!')
    amount.style.borderColor = 'red'
  } else {
    this.setCustomValidity('')
    amount.style.borderColor = 'green'
  }
}

flagCard.oninvalid = function () {
  // remove mensagens de erro padrão
  this.setCustomValidity('')
  // faz a validação novamente
  if (!this.validity.valid) {
    // se estiver inválido, coloca a mensagem
    this.setCustomValidity('Esse campo é obrigatório!')
    flagCard.style.borderColor = 'red'
  } else {
    this.setCustomValidity('')
    flagCard.style.borderColor = 'green'
  }
}

numberCard.oninvalid = function () {
  // remove mensagens de erro padrão
  this.setCustomValidity('')
  // faz a validação novamente
  if (!this.validity.valid) {
    // se estiver inválido, coloca a mensagem
    this.setCustomValidity('Esse campo é obrigatório!')
    numberCard.style.borderColor = 'red'
  } else {
    this.setCustomValidity('')
    numberCard.style.borderColor = 'green'
  }
}

shelfLife.oninvalid = function () {
  // remove mensagens de erro padrão
  this.setCustomValidity('')
  // faz a validação novamente
  if (!this.validity.valid) {
    // se estiver inválido, coloca a mensagem
    this.setCustomValidity('Esse campo é obrigatório!')
    shelfLife.style.borderColor = 'red'
  } else {
    this.setCustomValidity('')
    shelfLife.style.borderColor = 'green'
  }
}

cvv.oninvalid = function () {
  // remove mensagens de erro padrão
  this.setCustomValidity('')
  // faz a validação novamente
  if (!this.validity.valid) {
    // se estiver inválido, coloca a mensagem
    this.setCustomValidity('Padrão inválido para o CVV')
    cvv.style.borderColor = 'red'
  } else {
    this.setCustomValidity('')
    cvv.style.borderColor = 'green'
  }
}
