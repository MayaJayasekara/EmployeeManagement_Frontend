import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 'sb4ed4cc-f31b-44b-a06e-05ce7b322892',
      name: 'John Doe',
      email: 'Jhon.doe@email.com',
      phone: 998877665,
      salary: 6000,
      department:'Human Reources'
    },
    {
      id: 'c705cd8b-0297-441c-af5b-102620816a70',
      name: 'Sameer Saini',
      email: 'sameer.saini@email.com',
      phone: 789789789,
      salary: 7000,
      department:'Information Tecnology'
    },
    {
      id: 'sb4ed4cc-f31b-44b-a06e-05ce7b322892',
      name: 'John Doe',
      email: 'Jhon.doe@email.com',
      phone: 998877665,
      salary: 6000,
      department:'Human Reources'
    }
  ];
  constructor() { }

  ngOnInit(): void{
    
    this.employees.push()

  }

}
