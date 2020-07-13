import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralInfoPage } from './general-info.page';

describe('GeneralInfoPage', () => {
  let component: GeneralInfoPage;
  let fixture: ComponentFixture<GeneralInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
