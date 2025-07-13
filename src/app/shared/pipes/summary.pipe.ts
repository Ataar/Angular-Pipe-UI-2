import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(
    value: string,
    limit: number = 50,
    mode: 'char' | 'word' = 'char'
  ): string {
    if (!value) return '';

    if (mode === 'word') {
      const words = value.split(' ');
      if (words.length <= limit) return value;
      return words.slice(0, limit).join(' ') + '...';
    }

    if (value.length <= limit) return value;
    return value.substring(0, limit) + '...';
  }
}




















