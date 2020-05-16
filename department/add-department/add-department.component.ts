import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_service/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  dept: Department = new Department();

  constructor(public dept_service : DepartmentService) { }
  onAdd(){
    this.dept_service.addDepartment(this.dept);
    this.dept.id = null ; 
    this.dept.deptName = "";
  }

  ngOnInit(): void {
  }

}
