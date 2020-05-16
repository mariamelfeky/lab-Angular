import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Input() std : Student ; 
  constructor(public std_service:StudentService) { 
  }
  onEdit(){
    this.std_service.editStudent(this.std);
    this.std.id = null;
    this.std.name ="";
    this.std.age = null ;
  }
  
  ngOnInit(): void {
    
  }

}
