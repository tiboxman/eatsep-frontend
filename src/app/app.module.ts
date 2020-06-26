import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';


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
import { PlanDishInfoComponent } from './components/cook-page/plan-dish-info/plan-dish-info.component';
import { CreateDishInfoComponent } from './components/cook-page/create-dish-info/create-dish-info.component';
import { ValidateReservationCardComponent } from './components/cook-page/validate-reservation-card/validate-reservation-card.component';
import { ValidateReservationComponent } from './components/cook-page/validate-reservation/validate-reservation.component';
import { OrderDishComponent } from './components/search-page/list-dishes/order-dish/order-dish.component';

import { DishService } from './services/dish-service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



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
    PlanDishComponent,
    PlanDishInfoComponent,
    CreateDishInfoComponent,
    ValidateReservationCardComponent,
    ValidateReservationComponent,
    OrderDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule, // './app-material/app-material.module'
    MatDialogModule,
    FlexLayoutModule,
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
