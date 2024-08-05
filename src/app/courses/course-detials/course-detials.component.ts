import { Component, inject } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Service/course.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-course-detials',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './course-detials.component.html',
  styleUrl: './course-detials.component.css'
})
export class CourseDetialsComponent {
  selectedCourse:Course;
  courseId:number;
  courseService:CourseService=inject(CourseService);
  activeRoute:ActivatedRoute=inject(ActivatedRoute);

  ngOnInit(){
    // this.selectedCourse=this.activeRoute.snapshot.params['id']; old way
    //this.courseId=+this.activeRoute.snapshot.paramMap.get('id');
    this.activeRoute.paramMap.subscribe((parm)=>{
        this.courseId=+parm.get('id');
        this.selectedCourse=this.courseService.courses.find(i=>i.id === this.courseId);
    })
    //console.log(this.courseId);
   
    //console.log(this.selectedCourse);
    
  }
}
