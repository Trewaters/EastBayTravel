import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BartTrainSchedComponent } from './Components/bart-train-sched/bart-train-sched.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'bartTrainSched', component: BartTrainSchedComponent },
  // { path: 'bartTrainSched/:vDepartStationFullName', component: BartTrainSchedComponent },
  // { path: 'departTimeYah', component:  },
  { path: '', redirectTo: '/bartTrainSched', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes
    ,{ useHash: true } // this solved an issue I had getting pages where the URL was manually typed inot the address bar. Without this I get a 404 error.
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
