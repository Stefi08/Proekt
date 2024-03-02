import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './_modules/shared.module';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent
    ],
    providers: [
        {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
        {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        HomeComponent,
        RegisterComponent,
       SharedModule,
       MemberCardComponent,
       RouterModule.forRoot([])
        
    ]
})
export class AppModule { }
