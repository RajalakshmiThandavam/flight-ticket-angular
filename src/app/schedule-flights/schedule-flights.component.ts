import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '../../../node_modules/@angular/material';
import { IFlight } from '../_models/Flight';
import { FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-schedule-flights',
  templateUrl: './schedule-flights.component.html',
  styleUrls: ['./schedule-flights.component.css']
})
export class ScheduleFlightsComponent implements OnInit {

  displayedColumns: string[] = ['flightNumber', 'departureTime','arrivalTime','departureCity','arrivalCity','airLines', 'numberOfSeats', 'price'];
  dataSource: MatTableDataSource<IFlight> = new MatTableDataSource<IFlight>();
  scheduledFlightsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.scheduledFlightsForm = this.formBuilder.group({
      numberOfSeats: [''],
      price: ['']
    });

  }

  addFlightsToSchedule() {
    
  }

}
