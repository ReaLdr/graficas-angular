import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [];
      // [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [{
    backgroundColor: ['#5EEBDA', '#69B0D6', '#5B7BF5']
  }];

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {
    /* this.graficasService.getUsuariosRS()
      .subscribe( data=> {
        const labels = Object.keys(data);
        const values = Object.values(data);
        console.log(values);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
        
      }) */

      this.graficasService.getDataRS()
        .subscribe( ({ labels, values })=> {
          // console.log(data);

          this.doughnutChartLabels = labels;
          this.doughnutChartData.push(values);
          
        })
  }

}
