import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DevListeModule} from './features/dev-liste/dev-liste.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DevListeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
