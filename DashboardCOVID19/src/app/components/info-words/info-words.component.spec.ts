import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWordsComponent } from './info-words.component';

describe('InfoChuckComponent', () => {
  let component: InfoWordsComponent;
  let fixture: ComponentFixture<InfoWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
