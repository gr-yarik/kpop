import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';
import { catchError, finalize } from 'rxjs/operators';


export class WeatherDataSource implements DataSource<any> {

    private data: any[] = [];
    private weatherSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    //private statesWoeids = [2366355, 2391279];
    private statesWoeids = [2471390, 2440351, 2486340, 2391279, 2357024, 2423945, 2366355, 2427032, 2391446, 2367105, 2428344, 2488867, 2478307, 2383660, 2464592,2477058,2383552,2457170,2357536,2487610,2480894,2378319,2379552];

    public loading$ = this.loadingSubject.asObservable();

    constructor(private weatherService: WeatherService) { }

    getProgress(): number{
        return this.size() * 100 / this.statesWoeids.length;
    }

    size(): number{
        return this.data.length;
    }

    getData(){
        return this.data;
    }

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.weatherSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.weatherSubject.complete();
        this.loadingSubject.complete();
    }

    changeData(weatherData: any[]) {
        this.weatherSubject.next(weatherData)
    }

    restoreData() {
        this.weatherSubject.next(this.data)
    }

    loadWeather() {

        this.statesWoeids.forEach(woeid => {
            this.loadingSubject.next(true);

            this.weatherService.getWeather(woeid)
                .subscribe(weather => {
                    this.data.push(weather)
                    console.log(weather)
                    this.weatherSubject.next(this.data)
                    if(this.data.length == this.statesWoeids.length){
                        this.loadingSubject.next(false)
                    }
                });
        });

    }
}