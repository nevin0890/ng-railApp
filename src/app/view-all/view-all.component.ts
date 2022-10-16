import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private api: ApiService) {
    this.fetchtrains()
   }
  
  fetchtrains = () => {
    this.api.getAllTrain().subscribe((data) => { this.getTrain = data })
  }


  getTrain:any=[]

  ngOnInit(): void {
  }

}
