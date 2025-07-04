import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule
} from '@angular/forms';
import { Item } from '../../../core/interfaces/products';
import { ProductsService } from '../../../core/services/products/products.service';
import { SearchPipe } from '../../../core/pipes/search/search.pipe';

@Component({
  selector: 'app-fish-types',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe, NgClass, FormsModule, SearchPipe],
  templateUrl: './fish-types.component.html',
  styleUrl: './fish-types.component.scss'
})
export class FishTypesComponent implements OnInit {
  items: Item[] = [];
  searchTerm: string = '';
  searchBy: 'name' | 'id' = 'name';
  currentPage: number = 1;
  totalPages: number = 1;

  isModalOpen: boolean = false;
  isEditMode: boolean = false;

  addForm!: FormGroup;
  editForm!: FormGroup;

  constructor(
    private _ProductsService: ProductsService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getProducts(this.currentPage);

    this.addForm = this._fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    });

    this.editForm = this._fb.group({
      id: [null],
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  getProducts(page: number) {
    this._ProductsService.getAllProducts(page).subscribe({
      next: (res) => {
        this.items = res.items;
        this.totalPages = res.totalPages;
        this.currentPage = res.currentPage;
      }
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.getProducts(page);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getProducts(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.getProducts(this.currentPage - 1);
    }
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  updateDisplayedFish() {
    this.getProducts(1);
  }

  openModal() {
    this.isEditMode = false;
    this.isModalOpen = true;
    this.addForm.reset({ price: 0 });
  }

  openEditModal(item: Item) {
    this.isEditMode = true;
    this.isModalOpen = true;
    this.editForm.patchValue({
      id: item.id,
      name: item.name,
      price: item.price
    });
  }

  closeModal() {
    this.isModalOpen = false;
    this.isEditMode = false;
    this.addForm.reset({ price: 0 });
    this.editForm.reset({ price: 0 });
  }

  submit() {
  if (this.isEditMode) {
    if (this.editForm.valid) {
      this._ProductsService.editProduct(this.editForm.value).subscribe({
        next: () => {
          alert('Product updated successfully');
          this.getProducts(this.currentPage);
          this.closeModal();
        }
      });
    }
  } else {
    if (this.addForm.valid) {
      this._ProductsService.addProduct(this.addForm.value).subscribe({
        next: () => {
          alert('Product added successfully');
          this.getProducts(this.currentPage);
          this.closeModal();
        }
      });
    }
  }
}
deleteProduct(id: number) {
  if (confirm('Are you sure you want to delete this product?')) {
    this._ProductsService.deleteProduct(id).subscribe({
      next: () => {
        alert('Product deleted successfully');
        this.getProducts(this.currentPage);
      },
      error: () => {
        alert('Failed to delete product');
      }
    });
  }
}

}
