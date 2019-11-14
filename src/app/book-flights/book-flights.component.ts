import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { FlightService } from '../_services/flight.service';
import { Flight, IFlight } from '../_models/Flight';
import { MatTableDataSource } from '../../../node_modules/@angular/material';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { EmailService } from '../_services/email.service';
import { Email, IEmail } from '../_models/Email';
import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.css']
})
export class BookFlightsComponent implements OnInit {

  displayedColumns: string[] = ['flightNumber', 'departureTime','arrivalTime','departure_City','arrival_City','airLines', 'seatsAvalaible', 'numberOfSeats', 'price'];
  dataSource: MatTableDataSource<Flight> = new MatTableDataSource<Flight>();
  flight: IFlight;
  flights: IFlight[] = [];
  flightId: string;
  bookFlightForm: FormGroup;
  mail: IEmail = new Email();
  currentUser: User;
  priceOfSeatOnChange: number;

  constructor(private route: ActivatedRoute,
    private flightService: FlightService,
    private formBuilder: FormBuilder,
    private emailService :EmailService,
    private authenticationService: AuthenticationService) {
    this.flightId = this.route.snapshot.paramMap.get('id');
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {

    this.bookFlightForm = this.formBuilder.group({
      numberOfSeats: [''],
      price: ['']
    });

    console.log("Inside book-flights:", this.flightId)

    this.flightService.getFlightByFlightNumber(this.flightId).subscribe((res) => {
      console.log(res)
      this.flight = res;
      this.flights.push(this.flight);
      console.log("DataSource:", this.dataSource)
      console.log("Flight by Id from res:", this.flight)
      this.dataSource = new MatTableDataSource(this.flights)
      console.log("Datasource:", this.dataSource)
      this.priceOfSeatOnChange = this.flights[0].priceOfSeat;
    },
    error=> console.log("error occurred"));

    console.log("Flight by Id:", this.flight)

  }

  onChangeNoOfSeats(event) {
    console.log("Inside onChangeNoOfSeats:No.Of Seas-", event)
    this.flights[0].priceOfSeat = event * this.priceOfSeatOnChange
    this.dataSource = new MatTableDataSource(this.flights)
    console.log("priceOfSeats:", this.flights)
  }

  onClickToBookFlight() {
    // this.onMailSender();
  }

  onMailSender() {
    this.mail.name=this.currentUser.firstName + this.currentUser.lastName;
    this.mail.email=this.currentUser.email;
    this.mail.subject="Your Tickets has been booked";
    this.mail.message="Your Tickets has been booked";
    this.emailService.enviarEmail(this.mail)
      .subscribe(data => console.log(data));
  }

}
