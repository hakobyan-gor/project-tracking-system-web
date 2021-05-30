import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreateProjectComponent} from "./project/create-project/create-project.component";
import {ProjectListComponent} from "./project/project-list/project-list.component";
import {ProjectComponent} from "./project/project/project.component";

const routes: Routes = [
  {path: '', redirectTo: 'project-list', pathMatch: 'full'},
  {path: 'create-project', component: CreateProjectComponent},
  {path: 'project-list', component: ProjectListComponent},
  // {path: 'update-project', component: ProjectComponent},
  {path: 'project/:id', component: ProjectComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
