import {Injectable} from "@angular/core";
import {EntryModel} from "./entry.model";
import {Http} from "@angular/http";

@Injectable()
export class EntryService {
    constructor(public http: Http) {
    }

    getEntries(): Promise<EntryModel[]> {
        return this.http.get('/app/entries')
            .toPromise()
            .then(res => res.json().data as EntryModel[]);
    }
}