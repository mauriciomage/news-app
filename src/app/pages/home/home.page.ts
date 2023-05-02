import { Component, OnInit } from '@angular/core';
import { expenses } from './expenses-mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  totalBalance = 2500;
  expenses: any[] = expenses;
  constructor() { }

  ngOnInit() {
    this.calcTotal();
  }

  private calcTotal(): void {
    this.totalBalance = this.expenses.reduce((collector, item) => {
      return collector + item.amount;
    }, 0);
  }

}
