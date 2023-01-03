import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewselecComponent } from './components/viewselec/viewselec.component';

const routes: Routes = [

  {path:'', component: ViewselecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
