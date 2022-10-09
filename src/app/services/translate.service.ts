import { Injectable } from '@angular/core';
import dictionaries from '../../assets/dictionaries';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private profileLanguage = 'en';
  constructor(protected mockService: MockService) {
    this.getCurrentLanguage();
  }

  public translate(key) {
    if (!key) { return ''; }
    this.getCurrentLanguage();

    let dictionary = dictionaries[this.profileLanguage];
    if (!dictionary) { dictionary = dictionaries.en; }

    let result = dictionary[key];
    if (!result) { result = key; }

    return result;
  }

  public getLanguageList() {
    const languageList = [];
    // eslint-disable-next-line guard-for-in
    for(const key in dictionaries) {
      languageList.push({
        value: dictionaries[key].enum,
        name: dictionaries[key].nativeName
      });
    }
    if(!languageList.length) {
      languageList.push({
        value: 'en',
        name: 'English'
      });
    }
    return languageList;
  }

  private getCurrentLanguage() {
    const profile = this.mockService.getSelf(99);
    if (profile && profile.language) {
      this.profileLanguage = profile.language;
    }
  }
}
