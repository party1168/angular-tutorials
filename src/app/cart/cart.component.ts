import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.cartService
    .submitOrder(this.checkoutForm.value.name, this.checkoutForm.value.address)
    .subscribe((response) => {
      console.log('Order submitted successfully', response);
    });
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}
}
