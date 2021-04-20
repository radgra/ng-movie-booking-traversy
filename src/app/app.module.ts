import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieSelectorComponent } from './movie-selector/movie-selector.component';
import { LegendComponent } from './legend/legend.component';
import { ScreenComponent } from './screen/screen.component';
import { SeatsDisplayComponent } from './seats-display/seats-display.component';
import { FormsModule }   from '@angular/forms';
import { SeatComponent } from './components/seat/seat.component';
import { SelectionSummaryComponent } from './selection-summary/selection-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSelectorComponent,
    LegendComponent,
    ScreenComponent,
    SeatsDisplayComponent,
    SeatComponent,
    SelectionSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
