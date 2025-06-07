import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsLineChartComponent } from './components/charts-line-chart/charts-line-chart.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { HeaderComponent } from './components/header/header.component';
import { MedalChartComponent } from './components/medal-chart/medal-chart.component';
import { MedalStatsComponent } from './components/medal-stats/medal-stats.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const components = [
  HeaderComponent,
  MedalChartComponent,
  MedalStatsComponent,
  ErrorHandlerComponent,
  ChartsLineChartComponent,
];
const pages = [HomeComponent, NotFoundComponent, CountryDetailComponent];

@NgModule({
  declarations: [AppComponent, ...components, ...pages],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
