import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherDataSource } from './weather.datasourse';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherDialog } from './weather.dialog';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-weather-list',
  templateUrl: "./weather.component.html",
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {

  dataSource: WeatherDataSource;
  displayedColumns: string[] = ['select', 'city', 'temp', 'humidity', 'wind_speed'];
  clickedRows = new Array<any>();
  selection = new SelectionModel<any>(true, []);


  constructor(private weatherService: WeatherService, public dialog: MatDialog) {
    this.dataSource = new WeatherDataSource(this.weatherService);
  }
  
  getProgress(){
    return this.dataSource.getProgress();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.size();
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.getData());
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openDialog(): void {
    const clickedRow = this.clickedRows.pop()
    this.dialog.open(WeatherDialog, {
      width: '250px',
      data: {
        city:                   clickedRow.title,
        weather_state_name:     clickedRow.consolidated_weather[0].weather_state_name,
        humidity:               clickedRow.consolidated_weather[0].humidity,
        max_temp:               clickedRow.consolidated_weather[0].max_temp,
        min_temp:               clickedRow.consolidated_weather[0].min_temp,
        temp:                   clickedRow.consolidated_weather[0].the_temp,
        visibility:             clickedRow.consolidated_weather[0].visibility,
        wind_direction_compass: clickedRow.consolidated_weather[0].wind_direction_compass,
      }
    });
  }

  showChosen(): void {
    this.dataSource.changeData(this.selection.selected);
  }
  showAll(): void {
    this.dataSource.restoreData();
  }

  ngOnInit() {
    this.dataSource.loadWeather();
  }
}
