import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { produtosComponent } from './produtos.component';

describe('produtosComponent', () => {
  let component: produtosComponent;
  let fixture: ComponentFixture<produtosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ produtosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(produtosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
