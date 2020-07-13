import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationInfoPage } from './education-info.page';

describe('EducationInfoPage', () => {
  let component: EducationInfoPage;
  let fixture: ComponentFixture<EducationInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
