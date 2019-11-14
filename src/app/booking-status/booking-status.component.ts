import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '../../../node_modules/@angular/material';
import { Flight } from '../_models/Flight';
import { FlightService } from '../_services/flight.service';
import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.css']
})
export class BookingStatusComponent implements OnInit {

  displayedColumns: string[] = ['flightNumber', 'departureTime', 'departure_City', 'arrival_City', 'status'];
  dataSource: MatTableDataSource<Flight>;
  currentUser: User;

  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,  {static: false}) sort: MatSort;

  flights: Flight[];

  constructor(private flightService: FlightService,
              private authenticationService: AuthenticationService) { 
                this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
              }

  ngOnInit() {

    this.flightService.getFlightDetails().subscribe
      (res => {
        
        this.flights = res;
        console.log("kjuhsduih", this.flights);
        this.dataSource = new MatTableDataSource<Flight>(this.flights);
    }
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
