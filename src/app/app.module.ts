import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenPageComponent } from './men-page/men-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
// import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
//   MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
//   MatSlideToggleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenPageComponent,
    WomenPageComponent,
    KidsPageComponent,
    FavoritesPageComponent,
    ShoppingCartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule,
    // MatAutocompleteModule,
     MatButtonModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
