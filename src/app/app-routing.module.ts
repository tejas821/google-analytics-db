import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MainScreenComponent } from './component/main-screen/main-screen.component';

const routes: Routes = [
  {
    path: '', component: MainScreenComponent,
    children: [
      {
        path: '', component: HomeComponent,
      },
    ]
  },
  { path: '**', component: MainScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
