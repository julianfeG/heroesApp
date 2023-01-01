import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroetarjetaComponent } from './heroetarjeta.component';

describe('HeroetarjetaComponent', () => {
  let component: HeroetarjetaComponent;
  let fixture: ComponentFixture<HeroetarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroetarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroetarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
