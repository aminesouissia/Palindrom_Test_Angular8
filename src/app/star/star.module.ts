import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRoutingModule } from './star-routing.module';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { FluxHttpComponent } from './flux-http/flux-http.component';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [ PalindromeComponent, StarComponent , FluxHttpComponent ],
  imports: [
    CommonModule,
    StarRoutingModule
  ]
})
export class StarModule { }
