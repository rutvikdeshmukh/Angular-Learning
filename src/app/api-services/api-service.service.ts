import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private httpClient: HttpClient) {}
  allSubredditsData() {
    return this.httpClient.get('https://meme-api.herokuapp.com/gimme/15');
  }
  userSpecificSubreddits(subredditName: string) {
    return this.httpClient.get(
      `https://meme-api.herokuapp.com/gimme/${subredditName}/10`
    );
  }
  usersInformation() {
    return this.httpClient.get(`https://randomuser.me/api/?results=50`);
  }
}
