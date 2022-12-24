export default class Page<T> {
  content: T[] = [];
  empty: boolean = false;
  first: boolean = false;
  last: boolean = false;
  number!: number;
  numberOfElements!: number;
  pageable!: { offset: number; pageNumber: number; pageSize: number; paged: boolean; sort: Sort; unpaged: boolean; };
  size!: number;
  sort: Sort = new Sort;
  totalElements!: number;
  totalPages!: number;
}

class Sort {
  sorted: boolean = false;
  unsorted: boolean = false;
  empty: boolean = false;
}
