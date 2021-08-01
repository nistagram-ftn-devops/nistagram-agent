import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  mostSelling = []
  mostValuable = []

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.getMostSelling()
    this.getMostValuable()
  }

  getMostSelling() {
    this.reportsService.getMostSelling().subscribe((res) => {
      this.mostSelling = res
    })
  }

  getMostValuable() {
    this.reportsService.getMostValuable().subscribe((res) => {
      this.mostValuable = res
    })
  }

}
