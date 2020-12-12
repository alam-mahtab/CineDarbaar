import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuildTalentComponent } from './build-talent/build-talent.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { LiveCourseLandingComponent } from './live-course-landing/live-course-landing.component';
import { LiveCourseComponent } from './live-course/live-course.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { SearchComponent } from './search/search.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TalentAndCareersComponent } from './talent-and-careers/talent-and-careers.component';
import { UnlockChapter1Component } from './unlock-chapter1/unlock-chapter1.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WriterProfileComponent } from './writer-profile/writer-profile.component';
import { WriterComponent } from './writer/writer.component';


const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent,},
  { path: 'sign-in', component: SignInComponent,},
  { path: 'sign-up', component: SignUpComponent,},
  { path: 'my-courses', component: MyCoursesComponent,},
  { path: 'personal-profile', component: PersonalProfileComponent,},
  { path: 'about', component: AboutComponent,},
  { path: 'welcome', component: WelcomeComponent,},
  { path: 'build-talent', component: BuildTalentComponent,},
  { path: 'get-started', component: GetStartedComponent,},
  { path: 'live-course', component: LiveCourseComponent,},
  { path: 'live-course-landing', component: LiveCourseLandingComponent,},
  { path: 'search', component:SearchComponent,},
  { path: 'talent-and-careers', component:TalentAndCareersComponent,},
  { path: 'unlock-chapter1', component:UnlockChapter1Component,},
  { path: 'writer', component:WriterComponent,},
  { path: 'writer-profile', component:WriterProfileComponent,}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
