import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EnvironmentListComponent } from './environments/components/environment-list/environment-list.component';
import { EnvironmentListService } from './environments/services/environment-list.service';

@NgModule({
  declarations: [AppComponent, EnvironmentListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [EnvironmentListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
