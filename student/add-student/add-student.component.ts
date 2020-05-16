import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  std: Student = new Student();
 
  constructor(public std_service:StudentService) {

   }
   onAdd(){
    this.std_service.addStudent(this.std);
    this.std.id = null ; 
    this.std.name = "";
    this.std.age = null ;
  }
  
  ngOnInit(): void {
  }

}
