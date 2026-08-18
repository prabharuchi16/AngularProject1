import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    private loggedIn = false;
    
    login() {
        this.loggedIn = true;
        localStorage.setItem('isLoggedIn', 'true')
    }

    logout(){
        this.loggedIn = false;
        return localStorage.removeItem('isLoggedIn') ;
    }

    isLoggedIn(): boolean{
        return localStorage.getItem('isLoggedIn') === 'true';
    }


    private authMsg = new BehaviorSubject<string>('');
messager$ = this.authMsg.asObservable();
    sendMsg(tokenMsg: string){
        this.authMsg.next(tokenMsg);
    }

    

}