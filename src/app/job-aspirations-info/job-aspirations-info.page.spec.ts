import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobAspirationsInfoPage } from './job-aspirations-info.page';

describe('JobAspirationsInfoPage', () => {
  let component: JobAspirationsInfoPage;
  let fixture: ComponentFixture<JobAspirationsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAspirationsInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobAspirationsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
