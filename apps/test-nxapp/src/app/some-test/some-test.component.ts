import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-nxworkspace-some-test',
  templateUrl: './some-test.component.html',
  styleUrls: ['./some-test.component.scss']
})
export class SomeTestComponent implements OnInit {
  someText = 'some-test works!';

  ngOnInit(): void {
    console.log(`SomeTestComponent ngOnInit()`);
  }

  updateText() {
    console.log(`SomeTestComponent updateText()`);

    this.someText = 'text updated';
  }

}
