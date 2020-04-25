import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent {
    emojis = ['🚀', '❤️', '🎉', '😋'];
    activeEmoji: string = this.emojis[0];

    changeEmoji() {
        this.activeEmoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
    }
}