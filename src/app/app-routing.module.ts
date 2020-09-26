import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FluxHttpComponent } from './star/flux-http/flux-http.component';


const routes: Routes = [
   {
    path: '',
   // tslint:disable-next-line: max-line-length
   loadChildren: () => import('../app/star/star.module').then(mod => mod.StarModule),
    data: {
      title: 'star',
      caption: 'star',
      havePath: true,
    },

   },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
