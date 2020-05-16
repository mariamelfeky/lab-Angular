import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private depts:Department[]=[
    new Department(1,"OS"),
    new Department(2,"SD"),
    new Department(3,"test"),
  ];
  getAll(){
    return this.depts;
  }
  addDepartment(dept:Department){
    this.depts.push(new Department(dept.id,dept.deptName));
  }
  getDepartment(id:number):Department{
    const index = this.depts.findIndex(d => d.id === id);
    if (index != -1){
      return this.depts[index];
    }
    return null;
  }
  deleteDepartment(id:number){
    this.depts.splice(id, 1);
  }
  editDepartment(dept: Department){
    const index = this.depts.findIndex(s => s.id === dept.id);
    this.depts[index]=new Department(dept.id,dept.deptName);
  }
  constructor() { }
}
