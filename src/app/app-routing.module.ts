import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SinglemovieComponent } from './singlemovie/singlemovie.component';

const routes: Routes = [
  {path:"" , redirectTo:'login', pathMatch:"full" },
  {path:"singlemovie/:id/:name",component:SinglemovieComponent },

  {path:"movies" , component:MoviesComponent},
  {path:"people", component:PeopleComponent},

  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"network" , component:NetworkComponent},
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"**" , component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
