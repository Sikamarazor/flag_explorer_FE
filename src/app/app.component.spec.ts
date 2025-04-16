import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppComponent,
        MatToolbarModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render mat-toolbar', () => {
    const toolbarDe: DebugElement = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbarDe).toBeTruthy();
  });

  it('should display the title in navbar-brand', () => {
    component.title = 'Flag app';
    fixture.detectChanges();
    const brand = fixture.debugElement.query(By.css('.navbar-brand')).nativeElement;
    expect(brand.textContent).toContain('Flag app');
  });

});
