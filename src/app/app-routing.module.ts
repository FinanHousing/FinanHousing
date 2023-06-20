import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {LoginComponent} from "./finanhousing/components/login/login.component";
import {RegisterComponent} from "./finanhousing/components/register/register.component";
import {LayoutComponent} from "./finanhousing/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts/login',
  },
  {
    path: 'accounts/login',
    component: LoginComponent,
  },
  {
    path: 'accounts/register',
    component: RegisterComponent,
  },

  {
    path: 'accounts/Home',
    component: LayoutComponent,
  },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
