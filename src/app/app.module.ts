import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalDataPageComponent } from './personal-data-page/personal-data-page.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SymptomsFormComponent } from './symptoms-form/symptoms-form.component';
import { SymptomsPageComponent } from './symptoms-page/symptoms-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RecommendationComponent,
    SymptomsPageComponent,
    HomePageComponent,
    PersonalDataPageComponent,
    SymptomsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
