import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {AppRoutingModule} from './app-routing.module'
import {HttpClientModule} from '@angular/common/http'
import {NavComponent} from './nav/nav.component'
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HomeComponent} from './home/home.component'
import {RegisterComponent} from './register/register.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component'
import {SharedModule} from "./modules/shared.module";
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent, MemberDetailComponent, MemberListComponent, ListsComponent, MessagesComponent, NotFoundComponent, ServerErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
