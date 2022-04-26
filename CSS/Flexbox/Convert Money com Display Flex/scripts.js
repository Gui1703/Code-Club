const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const PA = 0.052; // Valor do Peso Argentino 25/01/2022
const bitcoin = 202166.11; // Valor do Bitcoin 25/01/2022

// Função de Converter Moedas
const convertValues = async () => {
  const inputReais = document.getElementById("input-real").value; // Valor do input
  const realValueText = document.getElementById("real-value-text"); // Valor em Real
  const currencyValueText = document.getElementById("currency-value-text"); // Valor em Dólar

  // API de cotação das moedas
  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const dolar = data.USDBRL.high; // Tempo real do valor do Dolar

  const euro = data.EURBRL.high; // Tempo real do valor do Euro

  // Formatação do dinheiro em Real
  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar Americano") {
    // Formatação do dinheiro em Dólar
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    // Formatação do dinheiro em Euro
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }

  if (select.value === "₿ Bitcoin") {
    // Formatação do dinheiro em Bitcoin
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputReais / bitcoin);
  }

  if (select.value === "$ Peso Argentino") {
    // Formatação do dinheiro em Peso Argentino
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "ARS",
    }).format(inputReais / bitcoin);
  }
};

//Função Select de Moeda
const changeCurrency = () => {
  const currencyNameDolar = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  // Trocar texto e imagem para Euro
  if (select.value === "€ Euro") {
    currencyNameDolar.innerHTML = "Euro";
    currencyImg.src = "./assets/Euro.png";
  }

  // Trocar texto e imagem para Dólar
  if (select.value === "US$ Dólar Americano") {
    currencyNameDolar.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/Dolar.png";
  }

  // Trocar texto e imagem para Bitcoin
  if (select.value === "₿ Bitcoin") {
    currencyNameDolar.innerHTML = "Bitcion";
    currencyImg.src = "./assets/Bitcoin.png";
  }

  // Trocar texto e imagem para Peso Argentino
  if (select.value === "$ Peso Argentino") {
    currencyNameDolar.innerHTML = "Peso Argentino";
    currencyImg.src = "./assets/PesoArgentino.png";
  }

  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
