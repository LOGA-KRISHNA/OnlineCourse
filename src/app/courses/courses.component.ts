import { Component, inject } from '@angular/core';
import { CourseService } from '../Service/course.service';
import { Course } from '../Models/course';
import { CommonModule } from '@angular/common';
import { Pipe } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courseService:CourseService=inject(CourseService);
  AllCourses:Course[]=this.courseService.courses;

}
