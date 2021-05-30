export class ApiResponseModel<T = any> {
  success!: boolean;
  message!: string;
  data!: T;
}
