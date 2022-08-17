import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Dashboard } from 'src/app/models/dashboard';
import { ChartType } from 'angular-google-charts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    dashboard = {} as Dashboard;

    agora = new Date();

    data = [[]];

    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.carregarDashboard();
    }

    carregarDashboard() {
        this.dashboardService.getDashboard().subscribe((dashboard: Dashboard) => {
            this.dashboard = dashboard;
            this.data = this.dashboard.grafico;
        })
    }

    title = '';
    type = ChartType.LineChart;
    // data = [
    //     ["5", 512, 0, 1],
    //     ["10", 725, 5, 3],
    //     ["15", 1200, 8, 6],
    //     ["20", 2456, 6, 4],
    //     ["25", 1325, 2, 1],
    //     ["30", 612, 5, 3],
    //     ["35", 800, 9, 7],
    //     ["40", 1406, 4, 5],
    //     ["45", 2100, 1, 0],
    //     ["50", 1324, 0, 4],
    //     ["55", 770, 3, 5],
    //     ["60", 620, 6, 7]
    // ];
    columns = ["", "ok", "lentos", "com erro"];
    options = {
        backgroundColor: {
            fill: '#394165'
        },
        colors: ['#10A8AB', '#EDBA45', '#E84C62'],
        curveType: 'function',
        fontName: 'Lato',
        hAxis: {
            textStyle: {
                color: '#9DA6C1'
            }
        },
        legend: {
            alignment: 'center',
            position: 'top',
            textStyle: {
                color: '#FFFFFF'
            }
        },
        vAxis: {
            baselineColor: '#9DA6C1',
            minValue: 0,
            viewWindow: {
                min: 0
            },
            textStyle: {
                color: '#9DA6C1'
            }
        }
    };
    width = 674;
    height = 234;
}