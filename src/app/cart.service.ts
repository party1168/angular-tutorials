import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  apiUrl = "http://localhost:5067/api/person";
  constructor(private http: HttpClient) {}
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems(): Product[] {
    return this.items;
  }

  submitOrder(name: string, address: string) {
    return this.http.post(`${this.apiUrl}/create`, { name, address });
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
