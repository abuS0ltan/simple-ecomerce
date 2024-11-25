import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdectsService {

  constructor(private http:HttpClient) { }
  GetAllProdects(){
    return this.http.get(`https://fakestoreapi.com/products`)
  }
}
