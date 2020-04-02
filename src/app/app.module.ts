import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { CookPageComponent } from './components/cook-page/cook-page.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ProfilePageComponent,
    CookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule, // './app-material/app-material.module'
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
