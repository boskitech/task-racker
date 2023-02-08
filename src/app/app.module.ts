import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoContentComponent } from './todo-content/todo-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { MatMenuModule } from '@angular/material/menu';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { MatSelectModule} from '@angular/material/select';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContentComponent,
    ViewTodoComponent,
    AddTodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
