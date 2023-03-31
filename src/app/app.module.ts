import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ViewerComponent } from './viewer/viewer.component';
import { ViewerService } from './viewer.service';
@NgModule({
  declarations: [AppComponent, ViewerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ViewerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
