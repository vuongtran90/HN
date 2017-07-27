import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
// Social share lib
import { CeiboShare } from 'ng2-social-share';
// Import Services
import { ApiService } from './shared/services/ApiService';
import { HNService } from './hn/services/HNService';
// Import Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FeedComponent } from './hn/feed/feed.component';
import { UserComponent } from './hn/user/user.component';
import { ItemComponent } from './hn/item/item.component';
import { CommentComponent } from './hn/item/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    UserComponent,
    ItemComponent,
    CommentComponent,
    CeiboShare
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    ApiService,
    HNService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
