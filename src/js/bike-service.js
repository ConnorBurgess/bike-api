export default class BikeService {
  static async getBike(city) {
    const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=6&location=${city}&distance=10&stolenness=proximity`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log('not 200');
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      console.log('catch')
      return Error(error.message);
    }
  }
} 


