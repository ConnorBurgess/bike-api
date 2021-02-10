export default class BikeService {
  static async getBike(city) {
    const response = await fetch (`https://bikeindex.org:443/api/v3/search?page=1&per_page=6&location=${city}&distance=10&stolenness=proximity`); 
    return await response.json();
  }
} 


