import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-words',
  templateUrl: './info-words.component.html',
  styleUrls: ['./info-words.component.css']
})
export class InfoWordsComponent implements OnInit {

  @Input()
  public title: String;
  @Input()
  public sentence: String;

  constructor() { }

  ngOnInit(): void {
  }

}
