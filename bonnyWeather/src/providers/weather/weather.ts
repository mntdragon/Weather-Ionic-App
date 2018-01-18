import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; //use observable and map

@Injectable()
export class WeatherProvider {
  apiKey = '76c9b2f990612b5d';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state){
    return this.http.get(this.url + '/' + state + '/' + city + '.json')
    .map(res => res.json());
  }
}
