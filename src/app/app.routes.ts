import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './hn/feed/feed.component';
import { UserComponent } from './hn/user/user.component';
import { ItemComponent } from './hn/item/item.component'; 


const feedRoutes = [{
  path: ':page',
  component: FeedComponent
}];

const routes: Routes = [
  {path: '', redirectTo: 'news/1', pathMatch: 'full'},
  {
    path: 'news',
    children: feedRoutes,
    data: {
        feedType: 'news'
    }
  },
  {
    path: 'show',
    children: feedRoutes,
    data: {
        feedType: 'show'
    }
  },
  {
    path: 'ask',
    children: feedRoutes,
    data: {
        feedType: 'ask'
    }
  },
  {
    path: 'jobs',
    children: feedRoutes,
    data: {
        feedType: 'jobs'
    }
  },
  {path: 'item/:id', component: ItemComponent},
  {path: 'user/:id', component: UserComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);