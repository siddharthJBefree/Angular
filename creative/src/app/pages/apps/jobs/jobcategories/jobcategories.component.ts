import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';

import { jobcategories } from 'src/app/core/data';

@Component({
  selector: 'app-jobcategories',
  templateUrl: './jobcategories.component.html',
  styleUrls: ['./jobcategories.component.scss'],
})

export class JobcategoriesComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  categories: any;
  allcategory: any;
  searchTerm: any;
  searchResults: any;


  constructor() {
  }

  ngOnInit(): void {
    /**
  * BreadCrumb
  */
    this.breadCrumbItems = [
      { label: 'Jobs' },
      { label: 'Job Categories', active: true }
    ];

    // Fetch Data
    setTimeout(() => {
      this.categories = jobcategories;
      this.allcategory = jobcategories;
      document.getElementById('elmLoader')?.classList.add('d-none')
      document.getElementById('loadmore')?.classList.remove('d-none')
    }, 1200)
  }

  performSearch(): void {
    this.searchResults = this.allcategory.filter((item: any) => {
      return (
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.position.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    this.categories = this.searchResults
  }

}
