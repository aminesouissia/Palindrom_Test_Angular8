import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { FluxHttpComponent } from './flux-http/flux-http.component';
import { StarComponent } from './star/star.component';


const routes: Routes = [
          {
            path: '',
            redirectTo: 'star',
            pathMatch: 'full',
          },
          {
              path: 'star',
              component: StarComponent,
              data: {
                title: 'star',
                caption: 'star',
                status: true,
                havePath: true,
              }, children: [
                {
                  path: 'flux-http',
                  component: FluxHttpComponent,
                  data: {
                    title: 'flux-http',
                    caption: 'flux-http',
                    status: true,
                    havePath: true,
                  },
                },
              ],
          },
           {
            path: '**',
            component: PalindromeComponent,
          },
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarRoutingModule { }
