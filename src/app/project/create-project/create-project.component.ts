import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {Router} from "@angular/router";
import {ProjectCreateModel} from "../../model/project-create.model";
import {ProjectStatus} from "../../enums/project-status";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  projectCreateModel: ProjectCreateModel = new ProjectCreateModel();
  projectStatus = ProjectStatus

  constructor(private projectService: ProjectService, private router: Router) {
  }

  ngOnInit(): void {
    this.projectCreateModel.projectContacts.push({phoneNumber: '', fullName: '', email: '', id: 0})
  }

  addNewContact() {
    this.projectCreateModel.projectContacts.push({phoneNumber: '', fullName: '', email: '', id: 0})
  }

  onSubmit() {
    this.projectService.createProject(this.projectCreateModel).subscribe(
      data => {
        if (data.success)
          this.router.navigate(['/project-list'])
      },
      error => console.log(error)
    )
  }

  onStatusChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }

  deleteContact(id: number, index: number) {
    this.projectCreateModel.projectContacts.splice(index, 1);
  }

  cancel() {
    this.router.navigate(['project-list'])
  }
}
