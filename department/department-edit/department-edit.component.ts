import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_service/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  @Input() dept : Department ; 
  constructor(public dept_service:DepartmentService) { 
  }
  onEdit(){
    this.dept_service.editDepartment(this.dept);
    this.dept.id = null;
    this.dept.deptName ="";
  }
  ngOnInit(): void {
  }

}
