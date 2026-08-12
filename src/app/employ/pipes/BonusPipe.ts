import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'bonus'
})

export class BonusPipe implements PipeTransform{
    transform(value: number): number {
        return value + (value*10/100);
    }
}