import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'admin',
    component: AdminComponent,
  },

  {
    path: 'admin-home',
    component: AdminHomeComponent,
    canActivate: [authGuard],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'admin-add-product',
    component: AdminAddProductComponent,
    canActivate: [authGuard],
  },

  {
    path: 'admin-update-product/:id',
    component: AdminUpdateProductComponent,
    canActivate: [authGuard],
  },

  {
    path: 'search/:query',
    component: SearchComponent,
  },

  {
    path: 'product-details/:productId',
    component: ProductDetailsComponent,
  },

  {
    path: 'user-auth',
    component: UserAuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
