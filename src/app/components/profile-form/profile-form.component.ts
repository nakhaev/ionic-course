import { Component, OnInit, Input } from '@angular/core';
import { MockService } from '../../services/mock.service';
import {TranslateService} from '../../services/translate.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {

  @Input() userProfile;

  public languageList = [{
    name: 'English',
    value: 'en'
  }];

  constructor(protected mockService: MockService, protected translateService: TranslateService) { }

  ngOnInit() {
    this.languageList = this.translateService.getLanguageList();
  }

  public updateProfile() {
    this.mockService.updateProfile(this.userProfile);
  }

}
