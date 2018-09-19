import { Routes } from '@angular/router';
//import { PostsComponent } from 'src/app/posts/posts.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PostContainerComponent } from './pages/post-container/post-container.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'signup',
    component: SignupComponent,

  },
  {
    path: '',
    component: LoginComponent,

  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'posts', component: PostContainerComponent },
      { path: 'profile', component: PerfilComponent },
      { path: '', redirectTo: '/home/posts', pathMatch: 'prefix' },
      { path: '**', redirectTo: '/home/posts', pathMatch: 'prefix' },
    ]
  },
];
