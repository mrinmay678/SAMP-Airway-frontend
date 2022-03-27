import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login-component/login.component';

const routes: Routes = [
  {
    path:'login-component',
    component:LoginComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
