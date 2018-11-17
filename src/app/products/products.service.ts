import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product } from './products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbPath = '/customers';

  productssRef: AngularFireList<Product> = null;

  constructor(private db: AngularFireDatabase) {
    this.productssRef = db.list(this.dbPath);
  }

  createProduct(product: Product): void {
    this.productssRef.push(product);
  }

  updateProduct(key: string, value: any): void {
    this.productssRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteProduct(key: string): void {
    this.productssRef.remove(key).catch(error => this.handleError(error));
  }

  getProductList(): AngularFireList<Product> {
    return this.productssRef;
  }

  deleteAll(): void {
    this.productssRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
