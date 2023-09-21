import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {AppRoutingModule} from './app-routing.module'
import {HttpClientModule} from '@angular/common/http'
import {NavComponent} from './nav/nav.component'
import {FormsModule} from '@angular/forms'
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
