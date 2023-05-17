import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'username', 'email', 'phone'];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private userService: UserService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllFoodTrucks();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  getAllFoodTrucks() {
    this.userService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
}
