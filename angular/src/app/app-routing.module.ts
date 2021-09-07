import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPageComponent } from './editPage';

import { AuthGuard } from './auth.service';
import { ListComponent } from './list.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'Aurangzeb/intro' , component:EditPageComponent},
  {path:'preview' , component:PortfolioPageComponent},
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
