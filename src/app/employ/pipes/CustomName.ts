import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'firstName'
})

export class CustomName implements PipeTransform{

transform(value: string): string {
 const  res =  value.split(' ');
   return res[0];
}

}