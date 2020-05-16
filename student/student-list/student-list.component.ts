import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[] = []
  ComponentToShow = 0;
  studentEdit : Student ;
  constructor(public std_service:StudentService) { }
  onDelete(id: number){
    this.std_service.deleteStudent(id);
  }
  onEdit(id: number){
    this.ComponentToShow = 1;
    let getStudent = this.std_service.getStudent(id);
    this.studentEdit = new Student(getStudent.id,getStudent.name,getStudent.age) ; 
    // console.log(this.studentID);
  }
  showAdd(){
    this.ComponentToShow = 2;
  }
  ngOnInit(): void {
    this.students = this.std_service.getAll()
  }
}
