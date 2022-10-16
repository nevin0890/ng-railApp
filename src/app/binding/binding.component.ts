import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  status: boolean =false;

  name = "nevin";

  readvalues = () => {
    this.name = "Nevin joy"
    this.status = true;
  }


  ngOnInit(): void {
  }

}
