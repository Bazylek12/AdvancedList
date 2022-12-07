import { NgModule } from '@angular/core';
import { SortedEmployeeListComponent } from './sorted-employee-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    FlexModule
  ],
  declarations: [SortedEmployeeListComponent],
  providers: [],
  exports: [SortedEmployeeListComponent]
})
export class SortedEmployeeListComponentModule {
}
