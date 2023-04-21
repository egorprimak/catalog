import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {RecipesDatabaseService} from "../db/recipes.database.service";
import {HttpClientModule} from "@angular/common/http";
import {ToolbarComponent} from "./presentation/components/toolbar/toolbar.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(RecipesDatabaseService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
