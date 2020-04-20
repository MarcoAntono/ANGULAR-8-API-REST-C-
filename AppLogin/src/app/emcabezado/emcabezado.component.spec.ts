import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmcabezadoComponent } from './emcabezado.component';

describe('EmcabezadoComponent', () => {
  let component: EmcabezadoComponent;
  let fixture: ComponentFixture<EmcabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmcabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmcabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
