import { Pipe, PipeTransform } from '@angular/core';
import { IfootPlayers } from '../models/footballPlayers ';

@Pipe({
  name: 'search'
})
export class FootPlayerPipe implements PipeTransform {
  transform(
    value: IfootPlayers[],
    searchText: string,
    searchField: keyof IfootPlayers = 'country'
  ): IfootPlayers[] {
    if (!value || !searchText || !searchField) return value;

    return value.filter(player => {
      const fieldValue = player[searchField];
      return fieldValue
        .toString()
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }
}
