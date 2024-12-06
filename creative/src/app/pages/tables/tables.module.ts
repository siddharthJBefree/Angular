import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// FlatPicker
import { FlatpickrModule } from 'angularx-flatpickr';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Load Icon
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Component pages
import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { GridjsComponent } from './gridjs/gridjs.component';
import { ListjsComponent } from './listjs/listjs.component';

// Ng Search 
import { NgPipesModule } from 'ngx-pipes';

// Sorting page
import { NgbdGridJsSortableHeader } from './../tables/gridjs/gridjs-sortable.directive';
import { NgbdListSortableHeader } from './listjs/listjs-sortable.directive';

@NgModule({ declarations: [
        BasicComponent,
        GridjsComponent,
        ListjsComponent,
        NgbdGridJsSortableHeader,
        NgbdListSortableHeader
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDropdownModule,
        NgbPaginationModule,
        NgbTypeaheadModule,
        FlatpickrModule,
        TablesRoutingModule,
        SharedModule,
        NgPipesModule,
        SimplebarAngularModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class TablesModule { 
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
