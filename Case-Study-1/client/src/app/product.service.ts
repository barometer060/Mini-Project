import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IProduct } from "./home/product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private _url: string = "http://localhost:8080/api/products/";
  constructor(private _http: HttpClient) {}

  getData(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url);
  }

  deleteData(id: number): Observable<IProduct> {
    return this._http.delete<IProduct>(this._url + id);
  }

  updateData(id: number, data: Object) {
    return this._http.put(this._url + id, data);
  }

  addData(data: IProduct) {
    return this._http.post(this._url, data);
  }
}
