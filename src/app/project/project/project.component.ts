import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectCreateModel} from "../../model/project-create.model";
import {ContactService} from "../../service/contact-service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: ProjectCreateModel = new ProjectCreateModel();

  constructor(
    private router: Router,
    private contactService: ContactService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  updateProject(): void {
    const {id} = this.activatedRoute.snapshot.params;
    if (this.project.projectContacts === null)
      this.project.projectContacts = []
    this.projectService.updateProject(id, this.project)
      .subscribe((data) => {
          if (data.success)
            this.router.navigate(['project-list'])
          else
            console.log(data.message)
        },
        (error) => {
          console.log(error)
        });
  }

  private getProjectDetails(): void {
    const {id} = this.activatedRoute.snapshot.params;
    this.projectService.getById(id)
      .subscribe((response) => {
        const {data} = response;
        this.project.title = data.title;
        this.project.status = data.status;
        this.project.projectContacts = data.projectContacts
        console.log(data.contact)
      });
  }

  deleteContact(id: number, index: number) {
    this.project.projectContacts.splice(index, 1);
    if (id) {
      this.contactService.deleteProjectContact(id)
        .subscribe();
    }
  }

  addNewContact() {
    this.project.projectContacts.push({phoneNumber: '', fullName: '', email: '', id: 0})
  }

  onStatusChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }

  cancel() {
    this.router.navigate(['project-list'])
  }
}
