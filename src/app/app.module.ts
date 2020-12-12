import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BuildTalentComponent } from './build-talent/build-talent.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LiveCourseComponent } from './live-course/live-course.component';
import { LiveCourseLandingComponent } from './live-course-landing/live-course-landing.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { SearchComponent } from './search/search.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TalentAndCareersComponent } from './talent-and-careers/talent-and-careers.component';
import { UnlockChapter1Component } from './unlock-chapter1/unlock-chapter1.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WriterComponent } from './writer/writer.component';
import { WriterProfileComponent } from './writer-profile/writer-profile.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BuildTalentComponent,
    GetStartedComponent,
    LiveCourseComponent,
    LiveCourseLandingComponent,
    MyCoursesComponent,
    PersonalProfileComponent,
    SearchComponent,
    SignInComponent,
    SignUpComponent,
    TalentAndCareersComponent,
    UnlockChapter1Component,
    UserProfileComponent,
    WelcomeComponent,
    WriterComponent,
    WriterProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
