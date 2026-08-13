import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'numberMask'
})
export class numberMask implements PipeTransform{
    transform(value:string| number): string {
        const number = value.toString();
        if(number.length <=4){
            return number;
        }
        const lastFour = number.slice(-5);
        return '+91-XXXX' + lastFour;
    }
}