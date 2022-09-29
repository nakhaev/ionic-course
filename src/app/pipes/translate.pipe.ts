import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(protected translateService: TranslateService) {
  }
  transform(value: string): string {
    return this.translateService.translate(value);
  }

}
