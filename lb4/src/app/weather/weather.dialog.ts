import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
    city: string;
    weather_state_name: string;
    humidity: string;
    max_temp: string;
    min_temp: string;
    temp: string;
    visibility: string;
    wind_direction_compass: string;
}

@Component({
    selector: 'weather-dialog',
    templateUrl: './weather.dialog.html',
})
export class WeatherDialog {

    constructor(
        public dialogRef: MatDialogRef<WeatherDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onOkClick(): void {
        this.dialogRef.close();
    }

}