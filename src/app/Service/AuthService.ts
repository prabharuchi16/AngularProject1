import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    private authMsg = new BehaviorSubject<string>('');

messager$ = this.authMsg.asObservable();

    sendMsg(tokenMsg: string){
        this.authMsg.next(tokenMsg);
    }

    

}