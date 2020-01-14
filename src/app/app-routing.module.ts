import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'o-nas', component: AboutComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'oferta', component: OfferComponent},
  {path: 'realizacje', component: WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
