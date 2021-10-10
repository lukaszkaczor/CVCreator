import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorNavigationComponent } from './creator-navigation.component';

describe('CreatorNavigationComponent', () => {
  let component: CreatorNavigationComponent;
  let fixture: ComponentFixture<CreatorNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
