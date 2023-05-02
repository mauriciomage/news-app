import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  description: string = '';
  amount: number = 0;
  date: string = '';

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void {}

}
