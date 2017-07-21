import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  {
    path: ':id',
    component: ItemComponent
  }
]

@NgModule({
  imports: [  
    CommonModule, 
    RouterModule,  
    RouterModule.forChild(routes) 
  ],
  declarations: [ 
    ItemComponent, 
    CommentComponent 
  ],
  exports: [ 
    ItemComponent,
    RouterModule
  ]
})
export class ItemModule {}