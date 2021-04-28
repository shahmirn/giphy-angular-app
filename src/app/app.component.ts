import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { GiphyApiResponse } from './models';
import { GiphyService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'giphy-angular-app';
    public images: { thumbnail: string, full: string }[];

    constructor(private giphyService: GiphyService) {
        
    }

    ngOnInit() {
        this.giphyService.getTrending().pipe(
            take(1)
        ).subscribe(trendingResponse => {
            this.images = this.mapResponse(trendingResponse);
        });
    }

    doSearch(q: string) {
        this.giphyService.search(q).pipe(
            take(1)
        ).subscribe(trendingResponse => {
            this.images = this.mapResponse(trendingResponse);
        });
    }

    private mapResponse(response: GiphyApiResponse) {
        return response.data.map(datum => ({
            thumbnail: datum.images.downsized.url,
            full: datum.images.downsized.url
        }));
    }
}
