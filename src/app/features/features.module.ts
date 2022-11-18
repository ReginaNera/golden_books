import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing/landing-page.component';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BookComponent } from './components/homepage/book-component/book.component';
import { NavSideComponent } from './components/nav-side/nav-side.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CategoryComponent } from './components/admin/categories/category.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [LandingPageComponent, HomepageComponent, BookComponent, NavSideComponent, CategoryComponent, FilterPipe],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    FeaturesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  
  ],
  exports: [
    HomepageComponent
  ],
  providers:[
    FilterPipe
  ]
})
export class FeaturesModule { }