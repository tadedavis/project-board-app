import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { LoginComponent } from './components/login/login.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
   { path: "", component: LoginComponent },
   { path: "select_company", component: CompanyComponent },
   { path: "home", component: AnnouncementsComponent },
   { path: "teams", component: TeamsComponent },
   { path: "announcements", component: AnnouncementsComponent },
 ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
