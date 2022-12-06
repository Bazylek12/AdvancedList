import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductListComponent }]), FilteredProductListComponentModule, CategoriesServiceModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
