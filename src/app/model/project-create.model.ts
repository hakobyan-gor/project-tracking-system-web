import {ContactCreateModel} from "./contact-create.model";

export class ProjectCreateModel {
  title: string = '';
  status: number = 0;
  projectContacts: Array<ContactCreateModel> = new Array<ContactCreateModel>();
}
