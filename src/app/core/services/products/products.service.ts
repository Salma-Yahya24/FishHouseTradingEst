import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addProduct, editProduct, MostProductResponse, Products } from '../../interfaces/products';
import { enviroment } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(page: number): Observable<Products> {
    return this._HttpClient.get<Products>(
      `${enviroment.baseUrl}Product?page=${page}`
    );
  }

  addProduct(data: addProduct): Observable<MostProductResponse> {
    return this._HttpClient.post<MostProductResponse>(`${enviroment.baseUrl}Product`, data);
  }

  editProduct(data:editProduct): Observable<MostProductResponse> {
    return this._HttpClient.put<MostProductResponse>(`${enviroment.baseUrl}Product`, data);
  }
  deleteProduct(id:number):Observable<MostProductResponse>{
   return this._HttpClient.delete<MostProductResponse>(`${enviroment.baseUrl}Product?id=${id}`);
  }
}
