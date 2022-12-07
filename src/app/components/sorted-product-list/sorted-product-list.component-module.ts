import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SortedProductListComponent } from './sorted-product-list.component';
import {FlexModule} from "@angular/flex-layout";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, FlexModule],
  declarations: [SortedProductListComponent],
  providers: [],
  exports: [SortedProductListComponent]
})
export class SortedProductListComponentModule {
}
