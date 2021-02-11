import BikeService from './js/bike-service.js';
import $ from 'jquery';
import './css/styles.css';
import {isContent} from './js/utils.js'

async function makeCall(city) {
  const response = await BikeService.getBike(city);

  document.getElementById("output").innerHTML = response.bikes.map(
    (data, i) => {
      const {
        title, 
        thumb, 
        description,
        stolen_location
      } = data
      return`
        <div class="new-entry">
          <h3>Someone lost a ${title}</h3>
          <img src="${isContent(thumb, "assets/images/bikebasic.jpg")}">
          <div id="location">
            ${isContent(stolen_location)}
          </div>
          <div id="description">
            ${isContent(description, "No Content Provided")}
          </div>
        </div>
      `
    }
  ).join('')

  // for (let i = 0; i < response.bikes.length; i++) {
  //   bikeThumbArr.push(`
  //     <div class="new-entry">
  //       <h3>Someone lost a ${response.bikes[i].title}</h3>
  //       <img src="${isContent(response.bikes[i].thumb, "assets/images/bikebasic.jpg")}">
  //       <div id="location">
  //         ${isContent(response.bikes[i].description.stolen_location)}
  //       </div>
  //       <div id="description">
  //         ${isContent(response.bikes[i].description, "No Content Provided")}
  //       </div>
  //     </div>`
  //   );
  // }
  // document.getElementById("output").innerHTML = bikeThumbArr.join('')
}
$(document).ready(function(){
  $('#click-me').click(function(event) {
  const cit = $('#city').val(); 
    makeCall(cit);
  })
});