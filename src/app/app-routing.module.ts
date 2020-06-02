import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AzerisComponent} from './azeris/azeris.component';


const routes: Routes = [
  {path: '**', component: AzerisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
