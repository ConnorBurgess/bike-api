import PokeService from './js/poke-service.js';
import BikeService from './js/bike-service.js';
import $ from 'jquery';
import './css/styles.css';
import {isContent} from './js/utils.js'
import bikeBasic from './assets/images/bikebasic.jpg';

async function makeCall(city) {
  const response = await BikeService.getBike(city);
  document.getElementById("output").innerHTML = (response instanceof Error) ? "ERROR LOADING IMAGES" :
    response.bikes.map(
      (data, i) => {
        const {title, thumb, description, stolen_location} = data;
        return`
          <div class="new-entry">
            <h3>Someone lost a ${title}</h3>
            <img id="picture-${i + 1}" src="${isContent(thumb, bikeBasic)}">
            <div class="location">
              ${isContent(stolen_location)}
            </div>
            <div class="description">
              ${isContent(description, "No Content Provided")}
            </div>
          </div>
        `
      }
    ).join('');
}
const random = (x) => Math.floor(Math.random() * x + 1);
const replaceCard = async  () => {
  const randomCard = random(6);
  const randomPokemon = random(140);
  const response = await PokeService.getPokemon(randomPokemon)
  document.getElementById(`picture-${randomCard}`).src = response.sprites.front_shiny;
}


$(document).ready(function() { 
  $('#click-me').click(function(event) {
    const city = $('#city').val(); 
    makeCall(city).then(() => replaceCard());
  })
});