import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import { HomeComponent } from './finanhousing/components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { PaymentCalculatorComponent } from './finanhousing/components/payment-calculator/payment-calculator.component';
import { PaidPlanComponent } from './finanhousing/components/paid-plan/paid-plan.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {RegisterComponent} from "./finanhousing/components/register/register.component";
import{LoginComponent} from "./finanhousing/components/login/login.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatCard, MatCardModule} from "@angular/material/card";
import {LayoutComponent} from "./finanhousing/layout/layout.component";

import {DialogChangePasswordComponent} from "./finanhousing/components/dialog-change-password/dialog-change-password.component";
import {DialogChangeEmailComponent} from "./finanhousing/components/dialog-change-email/dialog-change-email.component";
import {DialogSignOffComponent} from "./finanhousing/components/dialog-sign-off/dialog-sign-off.component";


import {MatCardHeader} from "@angular/material/card";
import {MatCardTitle} from "@angular/material/card";
import {MatCardContent} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    PaymentCalculatorComponent,
    PaidPlanComponent,
    RegisterComponent,
    LoginComponent,
    LayoutComponent,
    DialogChangePasswordComponent,
    DialogChangeEmailComponent,
    DialogSignOffComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
