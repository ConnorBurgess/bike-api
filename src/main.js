import BikeService from './js/bike-service.js';
import $ from 'jquery';
import './css/styles.css';


async function makeCall(city) {
  const response = await BikeService.getBike(city);

  let bikeThumbArr = []
  for (let i = 0; i < response.bikes.length; i++) {
    bikeThumbArr.push(`
      <div class="new-entry">
        <h3>Someone lost a ${response.bikes[i].title}</h3>
        <img src="${
          response.bikes[i].thumb !== null ?
          response.bikes[i].thumb :
          "assets/images/bikebasic.jpg"
        }">
        <div id ="description">${ 
          response.bikes[i].description}
        </div>
      </div>`
    );
  }
  document.getElementById("output").innerHTML = bikeThumbArr.join('')
}
$(document).ready(function(){
  $('#click-me').click(function(event) {
  const cit = $('#city').val(); 
    makeCall(cit);
  })
});