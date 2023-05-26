import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LoanService} from "../../services/loan.service";
@Component({
  selector: 'app-paid-plan',
  templateUrl: './paid-plan.component.html',
  styleUrls: ['./paid-plan.component.css']
})
export class PaidPlanComponent implements OnInit,AfterViewInit{

  dataTable: MatTableDataSource<any>;
  dataSource: any[]=[];
  displayedColumns: string[] = ['year', 'term-amort', 'quota-amort', 'interests', 'cap-amort', 'cap-pending'];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private loanService: LoanService) {
    this.dataTable = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    console.log("se ejecuto 1");
    this.getAllLoans();
  }
  ngAfterViewInit(): void {
    if (this.paginator && this.sort) {
      this.dataTable.paginator = this.paginator;
      this.dataTable.sort = this.sort;
    }
  }
  async getAllLoans() {
    this.loanService.getAll().subscribe((response: any) => {
      this.dataSource = response;
      this.calculatePlans();
    });
  }
  calculatePlans(){
    const loan = this.dataSource[0]; // Obtener el primer elemento del array dataSource

    const valorActual = (1 - Math.pow((1 + loan.rate), (-loan.time))) / loan.rate;

    const termAmortConst = loan.amount / valorActual;
    console.log(termAmortConst);
    const planData = [];
    let capPendiente = loan.amount; // Inicializar cap_pendiente fuera del bucle
    let capAmort = 0; // Inicializar cap_amort fuera del bucle
    for (let x = 0; x <= 12; x++) {
      console.log("Año", x);
      let CuotaAmort: number;
      let intereses: number;

      if (x === 0) {
        CuotaAmort = 0;
        intereses = 0;
      } else {
        intereses = capPendiente * loan.rate;
        CuotaAmort = termAmortConst - intereses;
        capPendiente = capPendiente - CuotaAmort;
        capAmort = capAmort + CuotaAmort;
      }
      console.log("**TERMINO AMORTIZADO CONSTANTE: ", termAmortConst);
      console.log("**CUOTA AMORTIZADA: ", CuotaAmort);
      console.log("**INTERESES: ", intereses);
      console.log("**CAPITAL AMORTIZADO: ", capAmort);
      console.log("**CAPITAL PENDIENTE: ", capPendiente);

      // Guardar los resultados en el array planData
      planData.push({
        year: x,
        termAmort: termAmortConst,
        quotaAmort: CuotaAmort,
        interests: intereses,
        capAmort: capAmort,
        capPending: capPendiente
      });
    }
    this.dataTable.data = planData;
    console.log(this.dataTable);
  }
}
