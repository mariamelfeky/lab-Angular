import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students:Student[]=[
    new Student(1,"Mariam",23),
    new Student(2,"mohamed",20),
    new Student(3,"Ahmed",30),
  ];
  getAll(){
    return this.students;
  }
  addStudent(std:Student){
    this.students.push(new Student(std.id,std.name,std.age));
  }
  getStudent(id:number):Student{
    const index = this.students.findIndex(s => s.id === id);
    if (index != -1){
      return this.students[index];
    }
    return null;
  }
  deleteStudent(id:number){
    this.students.splice(id, 1);
  }
  editStudent(std: Student){
    const index = this.students.findIndex(s => s.id === std.id);
    this.students[index]=new Student(std.id,std.name,std.age);
  }
  constructor() { }
}
