import { Component, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    public search: string;
    private searchSubject = new ReplaySubject<string>(1);

    doSearch() {
        this.searchSubject.next(this.search);
    }

    @Output()
    public get onSearch() {
        return this.searchSubject.asObservable();
    }

}
