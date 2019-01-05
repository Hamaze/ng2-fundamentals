import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnInit, OnChanges {
	@Input() sessions: ISession[];
	@Input() filterBy: string;
	visibleSessions: ISession[] = [];

  constructor() { }

  ngOnInit() {

	}

	ngOnChanges() {
		if (!this.sessions) {
			return;
		}

		this.filterSessions(this.filterBy);
	}

	filterSessions(filter: string) {
		if (filter === 'all') {
			this.visibleSessions = this.sessions.slice(0);
		} else {
			this.visibleSessions = this.sessions
				.filter(session => session.level.toLocaleLowerCase() === filter);
		}
	}

}
