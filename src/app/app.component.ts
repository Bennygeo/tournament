import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tt';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  users_data: Users[] = [
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" },
    { name: "Team A", photoURL: "", team: "" }
  ];

  test: Array<string> = ["1", "2", "3"];

  constructor() {

  }
}

export interface Users {
  name: string;
  photoURL: string;
  team: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Super Lions', weight: 1, symbol: 0 },
  { position: 2, name: 'Hey Rowdies', weight: 4, symbol: 0 },
  { position: 3, name: 'Status 200', weight: 6, symbol: 0 },
  { position: 4, name: 'The Avengers', weight: 9, symbol: 0 },
  { position: 5, name: 'Googlies', weight: 10, symbol: 0 },
  { position: 6, name: 'Beekay', weight: 12, symbol: 0 },
  { position: 7, name: 'Naragasurans', weight: 14, symbol: 0 },
  { position: 8, name: 'Lucky shark', weight: 15, symbol: 0 },
  { position: 9, name: 'Incredibles', weight: 18, symbol: 0 },
  { position: 10, name: 'Dream Team', weight: 20, symbol: 0 },
];

