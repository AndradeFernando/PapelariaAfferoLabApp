import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { produtoAddComponent } from './produto-add.component';

describe('produtoAddComponent', () => {
  let component: produtoAddComponent;
  let fixture: ComponentFixture<produtoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ produtoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(produtoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
