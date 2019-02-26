import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'', 
    component: HomeComponent
  },

  { 
    path: 'reactiveform', 
    loadChildren: './reactiveform/reactiveform.module#ReactiveformModule' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
