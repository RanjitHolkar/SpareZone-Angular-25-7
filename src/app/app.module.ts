import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.intrceptor';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { RouterModule} from '@angular/router';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    // AdminNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  exports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AdminNavComponent
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
