import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureDataGenerationDialogComponent } from './configure-data-generation-dialog.component';

describe('ConfigureDataGenerationDialogComponent', () => {
  let component: ConfigureDataGenerationDialogComponent;
  let fixture: ComponentFixture<ConfigureDataGenerationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureDataGenerationDialogComponent]
    });
    fixture = TestBed.createComponent(ConfigureDataGenerationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
