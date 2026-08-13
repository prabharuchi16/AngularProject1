import { Component, OnInit } from '@angular/core';
import { EmployListService } from '../../Service/EmployListService';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/AuthService';

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.scss']
})
export class EmployListComponent implements OnInit {
employees = [
  {
    id: 1,
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    department: 'IT',
    designation: 'Software Developer',
    salary: 65000,
    experience: 2,
    isActive: true
  },
  {
    id: 2,
    name: 'Priya Verma',
    email: 'priya.verma@example.com',
    department: 'HR',
    designation: 'HR Executive',
    salary: 52000,
    experience: 3,
    isActive: true
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    email: 'rahul.mehta@example.com',
    department: 'Finance',
    designation: 'Financial Analyst',
    salary: 72000,
    experience: 5,
    isActive: true
  },
  {
    id: 4,
    name: 'Sneha Patel',
    email: 'sneha.patel@example.com',
    department: 'IT',
    designation: 'Frontend Developer',
    salary: 68000,
    experience: 3,
    isActive: true
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    department: 'Sales',
    designation: 'Sales Executive',
    salary: 48000,
    experience: 2,
    isActive: false
  },
  {
    id: 6,
    name: 'Neha Gupta',
    email: 'neha.gupta@example.com',
    department: 'Marketing',
    designation: 'Marketing Executive',
    salary: 55000,
    experience: 4,
    isActive: true
  },
  {
    id: 7,
    name: 'Rohan Kapoor',
    email: 'rohan.kapoor@example.com',
    department: 'IT',
    designation: 'Backend Developer',
    salary: 78000,
    experience: 5,
    isActive: true
  },
  {
    id: 8,
    name: 'Ananya Joshi',
    email: 'ananya.joshi@example.com',
    department: 'HR',
    designation: 'Recruiter',
    salary: 50000,
    experience: 2,
    isActive: true
  },
  {
    id: 9,
    name: 'Karan Malhotra',
    email: 'karan.malhotra@example.com',
    department: 'Finance',
    designation: 'Accountant',
    salary: 58000,
    experience: 4,
    isActive: false
  },
  {
    id: 10,
    name: 'Meera Iyer',
    email: 'meera.iyer@example.com',
    department: 'IT',
    designation: 'UI/UX Designer',
    salary: 62000,
    experience: 3,
    isActive: true
  },
  {
    id: 11,
    name: 'Aditya Rao',
    email: 'aditya.rao@example.com',
    department: 'Sales',
    designation: 'Sales Manager',
    salary: 85000,
    experience: 7,
    isActive: true
  },
  {
    id: 12,
    name: 'Kavya Nair',
    email: 'kavya.nair@example.com',
    department: 'Marketing',
    designation: 'Content Strategist',
    salary: 60000,
    experience: 4,
    isActive: true
  },
  {
    id: 13,
    name: 'Arjun Desai',
    email: 'arjun.desai@example.com',
    department: 'IT',
    designation: 'DevOps Engineer',
    salary: 90000,
    experience: 6,
    isActive: true
  },
  {
    id: 14,
    name: 'Pooja Mishra',
    email: 'pooja.mishra@example.com',
    department: 'HR',
    designation: 'HR Manager',
    salary: 82000,
    experience: 8,
    isActive: true
  },
  {
    id: 15,
    name: 'Manish Yadav',
    email: 'manish.yadav@example.com',
    department: 'Finance',
    designation: 'Senior Accountant',
    salary: 75000,
    experience: 6,
    isActive: false
  },
  {
    id: 16,
    name: 'Ishita Sinha',
    email: 'ishita.sinha@example.com',
    department: 'IT',
    designation: 'Software Tester',
    salary: 57000,
    experience: 2,
    isActive: true
  },
  {
    id: 17,
    name: 'Nikhil Bansal',
    email: 'nikhil.bansal@example.com',
    department: 'Sales',
    designation: 'Business Development Executive',
    salary: 54000,
    experience: 3,
    isActive: true
  },
  {
    id: 18,
    name: 'Simran Kaur',
    email: 'simran.kaur@example.com',
    department: 'Marketing',
    designation: 'SEO Specialist',
    salary: 59000,
    experience: 3,
    isActive: true
  },
  {
    id: 19,
    name: 'Yash Thakur',
    email: 'yash.thakur@example.com',
    department: 'IT',
    designation: 'Full Stack Developer',
    salary: 95000,
    experience: 7,
    isActive: true
  },
  {
    id: 20,
    name: 'Divya Agarwal',
    email: 'divya.agarwal@example.com',
    department: 'HR',
    designation: 'Talent Acquisition Specialist',
    salary: 63000,
    experience: 5,
    isActive: false
  }
];

constructor (private employService: EmployListService, private router: Router, private authService: AuthService){ }

ngOnInit(): void {
  this.authService.messager$.subscribe(msg=> console.log("Message recieved: ",msg))
}

send(){
  this.employService.sendEmploy(this.employees);
}
viewEmploy(employ: any) {
  this.router.navigate(['/view-employe'], {
    state: {
      employ:employ
    }
  })
}

}
