import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FilteredProductListComponent} from './components/filtered-product-list/filtered-product-list.component';
import {SortedProductListComponent} from './components/sorted-product-list/sorted-product-list.component';
import {SortedEmployeeListComponent} from './components/sorted-employee-list/sorted-employee-list.component';
import {
  FilteredProductListComponentModule
} from './components/filtered-product-list/filtered-product-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {ProductsServiceModule} from './services/products.service-module';
import {SortedProductListComponentModule} from './components/sorted-product-list/sorted-product-list.component-module';
import {
  SortedEmployeeListComponentModule
} from './components/sorted-employee-list/sorted-employee-list.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: FilteredProductListComponent}, {
    path: 'sorted-products',
    component: SortedProductListComponent
  }, {
    path: 'sorted-employees',
    component: SortedEmployeeListComponent
  }]), FilteredProductListComponentModule, CategoriesServiceModule, ProductsServiceModule, SortedProductListComponentModule, SortedEmployeeListComponentModule, EmployeesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
