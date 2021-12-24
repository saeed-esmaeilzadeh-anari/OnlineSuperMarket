import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  public constructor(private router: Router) {}

  public canActivate(): boolean {
    const isLoggedIn = sessionStorage.getItem("token");
    const userType = sessionStorage.getItem("userType");

    if(isLoggedIn && userType == "ADMIN") {
        return true;
    }

    this.router.navigateByUrl("/home");
    alert("Acess Denied");
    return false;
  }
  
}
