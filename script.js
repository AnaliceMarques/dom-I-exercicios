const frutas = ["laranja", "limão", "uva"];

for (let i = 0; i < frutas.length; i++) {
  //   let fruta = (document.getElementById(`fruta-${i + 1}`).innerHTML = frutas[i]);
  //   console.log(fruta);
  document.getElementById(`fruta-${i + 1}`).innerHTML = frutas[i];
}

// const fruta1 = document.getElementById("fruta-1");
// fruta1.innerHTML = frutas[0];

// const fruta2 = document.getElementById("fruta-2");
// fruta2.innerHTML = frutas[1];

// const fruta3 = document.getElementById("fruta-3");
// fruta3.innerHTML = frutas[2];

// const adicionarFruta = () => {
//   const inputFruta = document.getElementById("fruta"); //Só consigo limpar o input se não colocar o .value aqui
//   const fruta4 = document.getElementById("fruta-4");
//   fruta4.innerHTML = inputFruta.value;
//   inputFruta.value = "";
// };

const inserirFruta = () => {
  const inputFruta = document.getElementById("fruta");
  if (frutas.length == 3) {
    frutas.push(inputFruta.value);
    const fruta4 = document.getElementById("fruta-4");
    fruta4.innerHTML = frutas[3];
  } else {
    frutas.push(inputFruta.value);
    let novaLista = document.getElementById("lista-de-frutas");
    novaLista.innerHTML += `<li>${inputFruta.value}</li>`;
    console.log(novaLista);
    console.log(frutas);
  }

  inputFruta.value = "";
};
