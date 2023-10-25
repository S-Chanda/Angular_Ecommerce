import { CanActivateFn } from '@angular/router';
import { AdminService } from './services/admin.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const adminService = inject(AdminService); //to access isSellerLoggedIn from AdminService
  if (localStorage.getItem('admin')) {
    return true;
  }
  return adminService.isAdminLoggedIn; //page not redirecting due to this line

  // return this.adminService.isAdminLoggedIn; //original
};
