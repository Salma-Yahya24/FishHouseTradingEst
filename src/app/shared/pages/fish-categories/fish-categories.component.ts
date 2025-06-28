import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fish-categories',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, CommonModule],
  templateUrl: './fish-categories.component.html',
  styleUrl: './fish-categories.component.scss'
})
export class FishCategoriesComponent {
  selectedCategory: string | null = null;
  searchTerm: string = '';

  categories = [
    {
      name: 'جمبري',
      description: 'أنواع مختلفة من الجمبري، مثل الجمبو والكبير والوسط.',
      fishTypes: ['جمبري جمبو', 'جمبري كبير', 'جمبري وسط', 'جمبري خشن', 'جمبري أبيض']
    },
    {
      name: 'حبار وكابوريا',
      description: 'يشمل الحبار بأنواعه والكابوريا.',
      fishTypes: ['حبار أبيض', 'حبار أحمر', 'كابوريا']
    },
    {
      name: 'أسماك بحرية',
      description: 'أنواع متنوعة من الأسماك البحرية مثل سمك موسى ومرجان وقاص.',
      fishTypes: ['سمك موسى', 'مرجان', 'قاص', 'ناجم', 'شعور', 'عقام']
    },
    {
      name: 'أسماك نهرية',
      description: 'الأسماك اللي بتعيش في المياه العذبة مثل المكرونة والبياض.',
      fishTypes: ['مكرونة مصري', 'مكرونة هندي', 'كمل', 'بياض', 'قرش']
    },
    {
      name: 'أصناف متنوعة',
      description: 'أصناف مختلطة أو لم يتم تصنيفها بعد.',
      fishTypes: ['مشكل', 'ديراك', 'يوسف محشي', 'مخلط']
    }
  ];

  displayedCategories = this.categories;

  constructor() {
    this.updateFilteredCategories();
  }

  updateFilteredCategories() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.displayedCategories = this.categories;
      return;
    }

    this.displayedCategories = this.categories
      .map(category => ({
        ...category,
        fishTypes: category.fishTypes.filter(fish =>
          fish.toLowerCase().includes(term)
        )
      }))
      .filter(cat => cat.fishTypes.length > 0);
  }

  toggleCategory(name: string) {
    this.selectedCategory = this.selectedCategory === name ? null : name;
  }
}
