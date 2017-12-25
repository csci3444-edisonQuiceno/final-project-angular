import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherListDataService } from './services/teacher-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule      // Added for TeacherListDataService to make REST call
  ],
  providers: [TeacherListDataService],  // Added TeacherListDataService after creating the service via CLI
  bootstrap: [AppComponent]
})
export class AppModule { }