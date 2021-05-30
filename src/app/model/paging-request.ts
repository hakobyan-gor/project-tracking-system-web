export class PagingRequest {
  page: number = 1;
  count: number = 100;

  get path(): string {
    return `${this.page - 1}/${this.count}`;
  }
}
