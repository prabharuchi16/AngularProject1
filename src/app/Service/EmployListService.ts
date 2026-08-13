import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class EmployListService {
    private empSubject = new BehaviorSubject<object>({});

    message$ = this.empSubject.asObservable();

    sendEmploy(employ: object) {        
        this.empSubject.next(employ);
    }
}