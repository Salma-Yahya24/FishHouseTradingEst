import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../interfaces/products';


@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items: Item[], searchTerm: string, searchBy: 'name' | 'id'): Item[] {
    if (!items || !searchTerm) return items;

    const lowerSearch = searchTerm.toLowerCase().trim();

    return items.filter(item => {
      if (searchBy === 'name') {
        return item.name.toLowerCase().includes(lowerSearch);
      } else if (searchBy === 'id') {
        return item.id.toString().includes(lowerSearch);
      }
      return false;
    });
  }

}
