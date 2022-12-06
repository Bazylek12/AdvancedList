import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FilteredProductListComponent} from './components/filtered-product-list/filtered-product-list.component';
import {SortedProductListComponent} from './components/sorted-product-list/sorted-product-list.component';
import {
  FilteredProductListComponentModule
} from './components/filtered-product-list/filtered-product-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {ProductsServiceModule} from './services/products.service-module';
import {SortedProductListComponentModule} from './components/sorted-product-list/sorted-product-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: FilteredProductListComponent}, {
    path: 'product',
    component: SortedProductListComponent
  }]), FilteredProductListComponentModule, CategoriesServiceModule, ProductsServiceModule, SortedProductListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
