import {Component, EventEmitter, Output, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'entry-comment-form',
    templateUrl: 'entry-comment-form.component.html',
    styleUrls: [
        'entry-comment-form.component.css'
    ]
})
export class EntryCommentFormComponent {
    name: string = "";
    comment: string = "";
    @Output() onCommentAdded = new EventEmitter<{name: string, comment: string}>();
    @ViewChild('commentForm') commentForm: NgForm;
    onSubmit(commentForm: NgForm){
        let comment = {name: this.name, comment: this.comment};
        this.onCommentAdded.emit(comment);
        this.commentForm.resetForm();
    }
}