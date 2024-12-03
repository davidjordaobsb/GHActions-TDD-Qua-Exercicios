function fatorial(number) {
  let numeroConvertido = parseInt(number);

  if (isNaN(numeroConvertido)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (numeroConvertido < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }

  if (numeroConvertido === 0) {
    return 1
  };

  let resultado = 1;
  for (let i = 1; i <= numeroConvertido; i++) {
    resultado = resultado * i;
  }

  return resultado;
}

function fibonnacci(number) {

  let numeroConvertido = parseInt(number);

  if (isNaN(numeroConvertido)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (numeroConvertido <= 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  }

  let a = 1, b = 1;
  for (let i = 3; i <= numeroConvertido; i++) {
    let proximoNumero = a + b;
    a = b;
    b = proximoNumero;
  }

  return b;
}

function ehPrimo(numero) {
  let numeroConvertido = parseInt(numero);

  if (isNaN(numeroConvertido)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (numeroConvertido <= 1) {
    throw new Error("Não número primo de número menor ou igual a 1");
  }

  for (let i = 2; i < numeroConvertido; i++) {
    if (numeroConvertido % i === 0) {
      return false; 
    }
  }
  return true; 
}


module.exports = {
  fatorial,
  fibonnacci,
  ehPrimo
}