import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DeleteTaskComponent,
    AddTaskComponent,
    TodoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
