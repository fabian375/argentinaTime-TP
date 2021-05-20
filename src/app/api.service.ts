import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    path : string = 'https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=38d0827b4fd44e439c267ef3bb5c3733';

    constructor(private http: HttpClient) {}

    getNews(){
        return this.http.get(this.path)
    }
}
