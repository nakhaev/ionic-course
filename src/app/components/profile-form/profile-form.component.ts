import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {

  @Input() userProfile;

  constructor() { }

  ngOnInit() {}

}
