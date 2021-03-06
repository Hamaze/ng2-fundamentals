import { Component, OnInit, Input } from '@angular/core';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'collapsible-well',
	template: `
<div (click)="toggleContent()" class="well pointable">
	<h4>
		<ng-content select="[well-title]"></ng-content>
	</h4>
	<ng-content *ngIf="visible" select="[well-body]"></ng-content>
</div>
	`
})
export class CollapsibleWellComponent implements OnInit {
	visible = true;

	constructor() { }

	ngOnInit() { }

	toggleContent() {
		this.visible = !this.visible;
	}
}
