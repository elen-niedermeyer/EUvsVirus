import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalDataPageComponent } from './personal-data-page/personal-data-page.component';
import { SymptomsPageComponent } from './symptoms-page/symptoms-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'symptoms/:date', component: SymptomsPageComponent },
  { path: 'personal-data', component: PersonalDataPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
