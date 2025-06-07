import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChartsLineChartComponent } from './charts-line-chart.component';

describe('ChartsLineChartComponent', () => {
  let component: ChartsLineChartComponent;
  let fixture: ComponentFixture<ChartsLineChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsLineChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
