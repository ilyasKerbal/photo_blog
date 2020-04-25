import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent} from "./entries";
import {InMemoryEntryService} from "./backend";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],
    providers: [
        EntryService
    ],
    declarations: [
        AppComponent,
        EntryCommentFormComponent,
        EntryComponent,
        EntryListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}