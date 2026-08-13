import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-employ',
  templateUrl: './view-employ.component.html',
  styleUrls: ['./view-employ.component.scss']
})
export class ViewEmployComponent {

  employeeId!: number
  empName!: string
  department!: string
  email!: string

  employee:any
    constructor (private route: ActivatedRoute, private router: Router){
  
      // this.employee = history.state.employ;
      this.employee = this.router.getCurrentNavigation()?.extras.state?.['employ'];

  
      // this.employeeId = Number( this.route.snapshot.paramMap.get('id'));

      // this.route.params.subscribe(params => {
      //   this.employeeId = params['id']
      // })
        this.route.paramMap.subscribe(params => {
        this.employeeId = Number(params.get('id'));
      })

      this.route.queryParamMap.subscribe(params => {
        this.empName = params.get('name')!;
        this.department = params.get('department')!;
        this.email = params.get('email')!;
      })



    }

}
