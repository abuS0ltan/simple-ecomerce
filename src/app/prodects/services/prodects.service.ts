import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProdectsService {

  constructor(private http:HttpClient) { }
  GetAllProdects(){
    return this.http.get(environment.apiUrl+`products`);
  }
  GetAllCategory(){
    return this.http.get(environment.apiUrl+`products/categories`);
  }
  GetCategoryProdects(category:string){
    return this.http.get(environment.apiUrl+`products/category/${category}`);
  }
  GetProdectDetails(id:number){
    return this.http.get(environment.apiUrl+`products/${id}`);
  }
}
