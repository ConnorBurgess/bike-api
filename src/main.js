import BikeService from './js/bike-service.js';
import $ from 'jquery';
import './css/styles.css';
import {isContent} from './js/utils.js'
import bikeBasic from './assets/images/bikebasic.jpg';

async function makeCall(city) {
  const response = await BikeService.getBike(city);

  document.getElementById("output").innerHTML = response.bikes.map(
    (data) => {
      const {
        title, 
        thumb, 
        description,
        stolen_location
      } = data;
      return`
        <div class="new-entry">
          <h3>Someone lost a ${title}</h3>
          <img src="${isContent(thumb, bikeBasic)}">
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
$(document).ready(function(){
  makeCall('portland');
  $('#click-me').click(function(event) {
  const city = $('#city').val(); 
    
  })
});