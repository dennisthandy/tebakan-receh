const tebakan = document.querySelector('.tabakan');
const pertanyaan = document.querySelector('.pertanyaan');
const jawaban = document.querySelector('.jawaban');
const button = document.querySelector('.button');

fetch('./data/data.json')
  .then(result => result.json())
  .then(result => showTebakan(result.tebakan))

function showTebakan(data){
  button.addEventListener('click', ()=>{
    let fun = data[Math.floor(Math.random() * (data.length-1)) + 1];
    pertanyaan.innerHTML = fun.pertanyaan;
    jawaban.innerHTML = fun.jawaban;
    jawaban.style.display = 'inline';
  })
}
