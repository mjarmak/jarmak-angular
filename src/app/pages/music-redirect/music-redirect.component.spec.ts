import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicRedirectComponent } from './music-redirect.component';

describe('MusicRedirectComponent', () => {
  let component: MusicRedirectComponent;
  let fixture: ComponentFixture<MusicRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
