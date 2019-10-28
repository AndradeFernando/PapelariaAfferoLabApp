import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { produtoEditComponent } from './produto-edit.component';

describe('produtoEditComponent', () => {
  let component: produtoEditComponent;
  let fixture: ComponentFixture<produtoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ produtoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(produtoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
