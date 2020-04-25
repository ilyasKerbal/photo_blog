import {Component, Input} from "@angular/core";
import {EntryModel} from "../shared/entry.model";

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: [
        'entry.component.css'
    ]
})
export class EntryComponent {
    @Input() entry: EntryModel;
    isLiked: boolean;
    showComments: boolean;

    onCommentAdded(comment: {name: string, comment: string}){
        this.entry.comments.push(comment);
    }
}