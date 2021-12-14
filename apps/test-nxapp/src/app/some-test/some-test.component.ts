import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface SomeForm {
  username: string;
  email: string;
}

@Component({
  selector: 'test-nxworkspace-some-test',
  templateUrl: './some-test.component.html',
  styleUrls: ['./some-test.component.scss'],
  animations: [
    trigger('popOverState', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
  ],
})
export class SomeTestComponent implements OnInit {
  someText = 'some-test works!';
  showPopup = false;
  form: SomeForm = {
    username: '',
    email: '',
  };

  get popupStateName() {
    return this.showPopup ? 'show' : 'hide';
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(`SomeTestComponent ngOnInit()`);
  }

  onSubmitForm(formValue: SomeForm) {
    console.log(`onSubmitForm() value:`);
    console.log(formValue);

    this.http.post('/api/new-user', formValue).subscribe(() => {
      console.log(`onSubmitForm() POST successful`);
    });
  }

  updateText() {
    this.someText = 'text updated';
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}
