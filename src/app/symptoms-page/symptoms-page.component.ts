import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-symptoms-page',
  templateUrl: './symptoms-page.component.html',
  styleUrls: ['./symptoms-page.component.scss']
})
export class SymptomsPageComponent implements OnInit {

  date: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.date = params.get('date')
    })
  }

}
