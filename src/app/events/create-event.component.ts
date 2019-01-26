import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IEvent, EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em { float:right; color:#e05c65; padding-left: 10px; }
    .error input { background-color:#e3c3c5 }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color:#999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color:#999; }
  `]
})
export class CreateEventComponent implements OnInit {
  newEvent
  isDirty = true
  constructor(private router: Router,
    private eventService: EventService) {

  }

  ngOnInit() {
    // this.event = {
    //   id: 11,
    //   name: 'Ng Spectacular',
    //   date: new Date('8/8/2028'),
    //   time: '10am',
    //   price: 799.99,
    //   location: {
    //     address: '456 Happy St',
    //     city: 'Felicity',
    //     country: 'Angularistan'
    //   },
    //   onlineUrl: 'http://ngspectacular.com',
    //   imageUrl: 'http://ngspectacular.com/logo.png',
    //   sessions: []
    // };
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
