import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fish-types',
  imports: [NgFor,FormsModule],
  templateUrl: './fish-types.component.html',
  styleUrl: './fish-types.component.scss'
})
export class FishTypesComponent {
searchTerm: string = '';

  fishTypes = [
    { name: 'Tilapia', category: 'Freshwater', stock: 120 },
    { name: 'Salmon', category: 'Saltwater', stock: 75 },
    { name: 'Catfish', category: 'Freshwater', stock: 30 },
    { name: 'Mackerel', category: 'Saltwater', stock: 60 },
  ];

  filteredFishTypes() {
    return this.fishTypes.filter(fish =>
      fish.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
