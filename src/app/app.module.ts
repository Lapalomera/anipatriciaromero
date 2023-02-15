import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FooterComponent } from './layout/footer/footer.component';
import { NavegationComponent } from './layout/navegation/navegation.component';
import { SectionComponent } from './layout/section/section.component';
import { GaleryComponent } from './layout/galery/galery.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavegationComponent,
    SectionComponent,
    GaleryComponent,
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
