import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { produtoDetailComponent } from './produto-detail.component';

describe('produtoDetailComponent', () => {
  let component: produtoDetailComponent;
  let fixture: ComponentFixture<produtoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ produtoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(produtoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
