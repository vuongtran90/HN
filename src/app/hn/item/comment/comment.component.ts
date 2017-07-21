import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/Item';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  toggle: boolean;
  constructor(

  ) {
  }

  ngOnInit() {
    this.toggle = false
  }

}
