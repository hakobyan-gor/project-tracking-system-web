import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {PagingRequest} from "../../model/paging-request";
import {ProjectListModel} from "../../model/project-list.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  paging: PagingRequest = new PagingRequest();
  projects: ProjectListModel[] = [];

  constructor(
    private router: Router,
    private projectService: ProjectService,
  ) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  deleteProject(id: number, index: number): void {
    this.projects.splice(index, 1);
    this.projectService.deleteProject(id)
      .subscribe();
  }

  private getProjects(): void {
    this.projectService.getProjects(this.paging)
      .subscribe((data) => {
        this.projects = data.data.content;
      });
  }

  addNewProject() {
    this.router.navigate(['create-project'])
  }
}
