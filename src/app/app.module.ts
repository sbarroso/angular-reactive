import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {HomeComponent} from './home/home.component';
import {AngularFireModule} from 'angularfire2';
import {RouterModule} from '@angular/router';
import {routerConfig} from "./router.config";
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {CoursesService} from "./services/courses.service";
import {CoursesListComponent} from './courses-list/courses-list.component';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {NewsletterService} from "./services/newsletter.service";
import {TopMenuComponent} from './top-menu/top-menu.component';
import {LoginComponent} from './login/login.component';
import {UserService} from "./services/user.service";
import {CourseComponent} from './course/course.component';
import {LessonDetailComponent} from './lesson-detail/lesson-detail.component';
import {CoursesHttpService} from "./services/courses-http.service";
import {SafeUrlPipe} from "./shared/pipes/safe-url.pipe";
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from "./services/messages.service";
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import {CourseDetailResolver} from "./course-detail/course-detail.resolver";
import { LoadingComponent } from './loading/loading.component';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { AllLessonsComponent } from './all-lessons/all-lessons.component';


@NgModule({
    declarations: [
        AppComponent,
        LessonsListComponent,
        HomeComponent,
        CourseDetailComponent,
        CoursesListComponent,
        NewsletterComponent,
        TopMenuComponent,
        LoginComponent,
        CourseComponent,
        LessonDetailComponent,
        SafeUrlPipe,
        MessagesComponent,
        CreateLessonComponent,
        LoadingComponent,
        AllLessonsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterModule.forRoot(routerConfig),
        ReactiveFormsModule,
        AngularFireDatabaseModule
    ],
    providers: [
        CoursesService,
        NewsletterService,
        UserService,
        CoursesHttpService,
        MessagesService,
        CourseDetailResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
