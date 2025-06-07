import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MedalStatsComponent } from './medal-stats.component';

describe('MedalStatsComponent', () => {
  let component: MedalStatsComponent;
  let fixture: ComponentFixture<MedalStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MedalStatsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
