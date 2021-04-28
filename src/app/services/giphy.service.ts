import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GiphyApiResponse } from '../models/index';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GiphyService {

    private baseUrl = 'https://api.giphy.com';

    constructor(private http: HttpClient) { }

    getTrending() {
        const url = this.baseUrl + '/v1/gifs/trending';

        const params = {
            api_key: environment.giphyApiKey
        }

        return this.http.get<GiphyApiResponse>(url, { params });
    }

    search(q: string) {
        const url = this.baseUrl + '/v1/gifs/search';

        const params = {
            api_key: environment.giphyApiKey,
            q
        }

        return this.http.get<GiphyApiResponse>(url, { params });
    }
}
