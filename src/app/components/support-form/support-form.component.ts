import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.scss'],
})
export class SupportFormComponent implements OnInit {

  @Input() userProfile;

  constructor() { }

  ngOnInit() {}

}
