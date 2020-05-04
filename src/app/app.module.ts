import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { CookPageComponent } from './components/cook-page/cook-page.component';
import { ListDishesComponent } from './components/search-page/list-dishes/list-dishes.component';
import { DishCardComponent } from './components/generique/dish-card/dish-card.component';
import { CalendarComponent } from './components/search-page/calendar/calendar.component';
import { SearchFilterComponent } from './components/search-page/search-filter/search-filter.component';
import { OrderInfoComponent } from './components/profile-page/order-info/order-info.component';
import { AddDishCardComponent } from './components/cook-page/add-dish-card/add-dish-card.component';
import { CreateDishComponent } from './components/cook-page/create-dish/create-dish.component';
import { PlanDishComponent } from './components/cook-page/plan-dish/plan-dish.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ProfilePageComponent,
    CookPageComponent,
    ListDishesComponent,
    DishCardComponent,
    CalendarComponent,
    SearchFilterComponent,
    OrderInfoComponent,
    AddDishCardComponent,
    CreateDishComponent,
    PlanDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule, // './app-material/app-material.module'
    MatDialogModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
