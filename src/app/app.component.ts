import { HomeworkServiceService } from './helper/homework-service.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books: any = [];
  response: any;
  isDesktop = false;
  sortByTitle = true;
  constructor(private homeworkServiceService: HomeworkServiceService) { }

  @HostListener('window:resize', ['$event'])

  ngOnInit() {
    this.getBookInfo();
    this.checkScreenSize();
  }

  toggleSort() {
    this.sortByTitle = !this.sortByTitle;
    this.sortByTitle ? this.books.sort((a: any, b: any) => a.title.localeCompare(b.title)) : this.books.sort((a: any, b: any) => a.PublishDate.localeCompare(b.PublishDate));
  }

  getBookInfo() {
    this.homeworkServiceService.getBookInfo().subscribe((response) => {
      this.response = response.data;
      this.books = response.data.books;
    });
  }

  removeBook(index: number) {
    this.books.splice(index, 1);
  }

  checkScreenSize() {
    window.innerWidth < 768 ? this.isDesktop = false : this.isDesktop = true;
  }

}
