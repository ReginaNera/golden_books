import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/admin/categories/category.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavSideComponent } from './components/nav-side/nav-side.component';


const routes: Routes = [
  {path: '',   component: NavSideComponent,
  children: [
    {path: "", component:HomepageComponent},
    {path: "categories", component: CategoryComponent }
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }