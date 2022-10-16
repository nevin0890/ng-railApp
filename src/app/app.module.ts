import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewalltrainsComponent } from './viewalltrains/viewalltrains.component';
import { BindingComponent } from './binding/binding.component';
import { ViewAllComponent } from './view-all/view-all.component';

const routes: Routes = [
  { path: '', component: ViewalltrainsComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'viewall', component: ViewAllComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewalltrainsComponent,
    BindingComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
