import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../Service/AuthService";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{

constructor(private authService: AuthService, private router:Router){};

canActivate(): boolean {
    
    if(this.authService.isLoggedIn()){
        console.log('Can Active auth guard works');
        return true;
    }
    alert("please login First");
console.log("Auth guard fails");

    this.router.navigate(['/logIn'])
    return false;
}

}