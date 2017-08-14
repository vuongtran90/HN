import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
// Import Services
import { ApiService } from './shared/services/ApiService';
import { HNService } from './hn/services/HNService';
// Import Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FeedComponent } from './hn/feed/feed.component';
import { UserComponent } from './hn/user/user.component';
// Import Module
import { ItemModule } from './hn/item/item.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    ItemModule
  ],
  providers: [
    ApiService,
    HNService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
