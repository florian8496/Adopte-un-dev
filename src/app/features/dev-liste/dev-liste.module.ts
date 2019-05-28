import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevListeComponent} from './dev-liste/dev-liste.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [DevListeComponent],
  exports: [DevListeComponent]
})
export class DevListeModule { }
