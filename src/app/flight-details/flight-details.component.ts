import { Component, OnInit, ViewChild, OnDestroy, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { FlightService } from '../_services/flight.service';
import { Flight, IFlight } from '../_models/Flight';
import { HttpResponse } from '../../../node_modules/@angular/common/http';
import { timer, Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';
import csc from 'country-state-city';
import { startWith, map } from '../../../node_modules/rxjs/operators';
import { CcCardHoverDirective } from '../_directives/cc-card-hover.directive';
import { AuthenticationService } from '../_services';
import { User } from '../_models';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  displayedColumns: string[] = ['flightNumber', 'departureTime', 'seat', 'price', 'book'];
  dataSource: MatTableDataSource<Flight>;

  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,  {static: false}) sort: MatSort;

  flights: IFlight[];
  flight: IFlight;
  flightsToPopulate: IFlight[] = [];
  selectedValue: string;
  currentDateTime = new Date();
  allCountries: any[];
  allStates: any[];
  allCities: any[];
  condition: Boolean = false;
  currentUser: User;
  appComponent: AppComponent;

  flightDetailsForm: FormGroup;

  require: any

  csc = require('country-state-city');

  filteredOptions: Observable<any[]>;

  @ViewChildren(CcCardHoverDirective) dirs;

  constructor(private flightService: FlightService,
    private router: Router,
    private formBuilder: FormBuilder,
    protected activatedRoute: ActivatedRoute,
    protected authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {

    console.log("countries:", this.csc.default.getAllCountries())
    this.allCountries = this.csc.default.getAllCountries()

    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    // Reactive form controls:
    this.flightDetailsForm = this.formBuilder.group({
      dateOfDeparture: [''],
      departureCountry: [''],
      departureState: [''],
      departureCity: [''],
      arrivalCity: ['']
    });

    this.flightService.getFlightDetails().subscribe
      (res => {
        
        this.flights = res;
        // this.flightDetails.push(res)
        console.log("Inside getFlightDetails():", this.flights);
        // this.dataSource = new MatTableDataSource<Flight>(this.flights);
    },
    ()=> {
       // Multiple filters
       this.dataSource.filterPredicate =
       (data: Flight, filters: string) => {
         const matchFilter = [];
         const filterArray = filters.split(',');
         const columns = (<any>Object).values(data);
         // OR be more specific [data.name, data.race, data.color];
 
         // Main
         filterArray.forEach(filter => {
           const customFilter = [];
           columns.forEach(column => customFilter.push(column.toLowerCase().includes(filter)));
           matchFilter.push(customFilter.some(Boolean)); // OR
         });
         return matchFilter.every(Boolean); // AND
       }
    }
    );
    console.log("flight2:", this.flights)
  }

  // convenience getter for easy access to form fields
  get f() { return this.flightDetailsForm.controls; }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

  bookNavigate (flightNumber) {
    console.log("Inside bookNavigate():", flightNumber)
    if(this.currentUser) {
      this.router.navigate(['/book-flights', flightNumber])
    }
    // else 
      // this.appComponent.openDialog();
  }

  onShowFlightDetails() {
    this.flightsToPopulate = null;
    console.log("Boarding Date: ", this.f.dateOfDeparture.value)
    console.log(this.f.departureCountry.value)
    for(let i=0; i<this.flights.length; i++) {
      this.flightsToPopulate = this.flights.filter(res => res.departureCity == this.f.departureCountry.value &&
        res.arrivalCity == this.f.arrivalCity.value)
    }
    this.dataSource = new MatTableDataSource(this.flightsToPopulate)
    if(this.dataSource) {
      // this.dirs.ViewChild.constructor()
    }
  }

  onKey(value) {
    this.allCountries = this.search(value);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.csc.default.getAllCountries().filter(option =>
      option.name.toLowerCase().startsWith(filter)
    );
  }
}


