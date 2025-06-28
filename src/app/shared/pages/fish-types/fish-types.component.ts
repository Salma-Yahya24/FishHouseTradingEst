import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-fish-types',
  imports: [NgFor,FormsModule, CurrencyPipe,NgClass],
  templateUrl: './fish-types.component.html',
  styleUrl: './fish-types.component.scss'
})
export class FishTypesComponent {
searchTerm: string = '';

  fishTypes = [
  { id: 43, code: '', name: 'جمبري جمبو', price: 1200.00, active: 0 },
  { id: 44, code: '', name: 'جمبري كبير', price: 0.00, active: 0 },
  { id: 45, code: '', name: 'جمبري وسط', price: 0.00, active: 0 },
  { id: 46, code: '', name: 'جمبري خشن', price: 0.00, active: 0 },
  { id: 47, code: '', name: 'جمبري أبيض', price: 0.00, active: 0 },
  { id: 48, code: '', name: 'مخلط', price: 0.00, active: 0 },
  { id: 49, code: '', name: 'حبار أبيض', price: 0.00, active: 0 },
  { id: 50, code: '', name: 'حبار أحمر', price: 0.00, active: 0 },
  { id: 51, code: '', name: 'كابوريا', price: 0.00, active: 0 },
  { id: 52, code: '', name: 'سمك موسى', price: 0.00, active: 0 },
  { id: 53, code: '', name: 'مرجان', price: 0.00, active: 0 },
  { id: 54, code: '', name: 'قاص', price: 0.00, active: 0 },
  { id: 55, code: '', name: 'ناجم', price: 0.00, active: 0 },
  { id: 56, code: '', name: 'شعور', price: 0.00, active: 0 },
  { id: 57, code: '', name: 'مكرونة مصري', price: 0.00, active: 0 },
  { id: 58, code: '', name: 'مكرونة هندي', price: 0.00, active: 0 },
  { id: 59, code: '', name: 'كمل', price: 0.00, active: 0 },
  { id: 60, code: '', name: 'بياض', price: 0.00, active: 0 },
  { id: 61, code: '', name: 'قرش', price: 0.00, active: 0 },
  { id: 62, code: '', name: 'ديراك', price: 0.00, active: 0 },
  { id: 63, code: '', name: 'عقام', price: 0.00, active: 0 },
  { id: 64, code: '', name: 'هامور', price: 0.00, active: 0 },
  { id: 65, code: '', name: 'مشكل', price: 0.00, active: 0 },
  { id: 66, code: '66', name: 'يوسف محشي', price: 555.00, active: 1 },
];


  filteredFishTypes() {
    return this.fishTypes.filter(fish =>
      fish.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
