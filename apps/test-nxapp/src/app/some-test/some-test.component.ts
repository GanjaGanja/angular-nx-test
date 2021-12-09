import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-nxworkspace-some-test',
  templateUrl: './some-test.component.html',
  styleUrls: ['./some-test.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class SomeTestComponent implements OnInit {
  someText = 'some-test works!';
  showPopup = false;

  get popupStateName() {
    return this.showPopup ? 'show' : 'hide'
  }

  ngOnInit(): void {
    console.log(`SomeTestComponent ngOnInit()`);
  }

  updateText() {
    console.log(`SomeTestComponent updateText()`);

    this.someText = 'text updated';
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

}
