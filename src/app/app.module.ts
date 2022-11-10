import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { CardsectionComponent } from './shared/component/cardsection/cardsection.component';
import { CardDetailsComponent } from './shared/component/card-details/card-details.component';
import { FairlistComponent } from './shared/component/fairlist/fairlist.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsectionComponent,
    CardDetailsComponent,
    FairlistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
