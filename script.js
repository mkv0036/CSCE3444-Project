document.getElementById("submit").addEventListener("click", function() {
  window.location.href = 'home.html';
});

const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = 'a0701856';
const APP_KEY = 'dd1f112182912aeaf4f5de60f8adac62';


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
});

async function fetchAPI(){
  const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=a0701856&app_key=dd1f112182912aeaf4f5de60f8adac62
&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log(data);
}
