import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    AdminHomeComponent,
    LoginComponent,
    AdminAddProductComponent,
    AdminUpdateProductComponent,
    SearchComponent,
    ProductDetailsComponent,
    UserAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //for form
    HttpClientModule, FontAwesomeModule, NgbModule, //for data access api
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
