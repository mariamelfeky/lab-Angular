import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { AddStudentComponent } from './student/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentEditComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    AddDepartmentComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
