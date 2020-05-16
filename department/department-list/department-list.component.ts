import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  depts:Department[] = []
  ComponentToShow = 0;
  deptEdit : Department ;
  constructor(public dept_service:DepartmentService) { }
  onDelete(id: number){
    this.dept_service.deleteDepartment(id);
  }
  onEdit(id: number){
    this.ComponentToShow = 1;
    let getDepartment = this.dept_service.getDepartment(id);
    this.deptEdit = new Department(getDepartment.id,getDepartment.deptName) ; 
    // console.log(this.studentID);
  }
  showAdd(){
    this.ComponentToShow = 2;
  }
  ngOnInit(): void {
    this.depts = this.dept_service.getAll()
  }

}
