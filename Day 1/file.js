const API_KEY = "BU-HozrQrJfb8tfFsDb1pkyhJDLMt0UEMtWYd9Bfgj8";

const input = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");
const box = document.querySelector(".box");
const form = document.querySelector('form')
let page = 1;

window.addEventListener("DOMContentLoaded", () => {
  getData("nature");
});

const getData = async (query) => {
    box.innerHTML = 'Loading'
  const url = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&client_id=${API_KEY}&query=${query}`
  );
  const json = await url.json();
  box.innerHTML = ''
  console.log(json?.results);
  setData(json?.results);
};

const setData = (items) => {
  items.map((item) => {
    const card = document.createElement("div");
    card.innerHTML = `
            <img src=${item?.urls?.small} alt="" class="image" />
       `;
    box.append(card);
  });
};

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    box.innerHTML = ''
    getData(input.value)
    input.value = ''
})