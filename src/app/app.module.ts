import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProtectedModule } from './protected/protected.module';
import { AuthModule } from './auth/auth.module';
import { ShowroomModule } from './showroom/showroom.module';
import {ProdgrillService} from './showroom/prodgrill.service'


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProtectedModule,
    AuthModule,
    ShowroomModule

  ],
  providers: [ProdgrillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
