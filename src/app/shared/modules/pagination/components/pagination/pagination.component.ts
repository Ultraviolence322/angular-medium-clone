import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() total!: number
  @Input() limit!: number
  @Input() currentPage!: number
  @Input() url!: string

  countOfPages!: number
  pages!: number[] 

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.countOfPages = Math.ceil(this.total / this.limit)
    console.log('this.currentPage', this.currentPage);
    
    this.pages = this.utilsService.range(1, this.countOfPages)
  }
}
