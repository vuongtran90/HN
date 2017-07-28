import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './hn/feed/feed.component';
import { UserComponent } from './hn/user/user.component';
import { ItemComponent } from './hn/item/item.component'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: FeedComponent,
    data: {
        feedType: 'news'
    }
  },
  {
    path: 'show',
    component: FeedComponent,
    data: {
        feedType: 'show'
    }
  },
  {
    path: 'ask',
    component: FeedComponent,
    data: {
        feedType: 'ask'
    }
  },
  {
    path: 'jobs',
    component: FeedComponent,
    data: {
        feedType: 'jobs'
    }
  },
  {path: 'item/:id', component: ItemComponent},
  {path: 'user/:id', component: UserComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);