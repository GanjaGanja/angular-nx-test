import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SomeTestComponent } from './some-test.component';

describe('SomeTestComponent', () => {
  let component: SomeTestComponent;
  let fixture: ComponentFixture<SomeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <p> tag and should have specific text inside this <p> tag', () => {
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement as HTMLParagraphElement;
    const paragraphText = paragraph.innerHTML;

    expect(paragraph).toBeTruthy();
    expect(paragraphText).toContain('some-test works!');
  });

  it('should trigger "updateText()" method on button click', () => {
    jest.spyOn(component, 'updateText');

    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    button.click();

    expect(component.updateText).toHaveBeenCalled();
  });

  it('should trigger paragraph text update on button click', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement as HTMLParagraphElement;
    const paragraphText = paragraph.innerHTML;

    expect(paragraphText).toContain('text updated');
  });
});
