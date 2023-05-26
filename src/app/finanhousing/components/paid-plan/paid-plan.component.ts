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
  displayedColumns: string[] = ['Anio', 'Term.Amort.', 'Cuota.Amort.', 'Intereses', 'Cap.Amortiz', 'Cap.Pendiente'];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private loanService: LoanService) {
    this.dataTable = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataTable.paginator = this.paginator;
    this.getAllLoans();
    for (let element of this.dataSource) {
      console.log(element);
    }
  }
  ngAfterViewInit(): void {
    this.dataTable.sort = this.sort;
  }
  getAllLoans() {
    this.loanService.getAll().subscribe((response: any) => {
      this.dataSource = response;
    });
  }
}
