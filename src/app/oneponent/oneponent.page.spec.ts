import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneponentPage } from './oneponent.page';

describe('OneponentPage', () => {
  let component: OneponentPage;
  let fixture: ComponentFixture<OneponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OneponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
