import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'app/services/user.service';


export interface UserData {
  id: string;
  name: string;
  pseduo: string;
  email: string;
  days_15: string;
  days_30: string;
  pay_count: number;
  pay_cost: string;
  res_day: string;
  state: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'pseduo', 'email', 'days_15', 'days_30', 'pay_count', 'pay_cost', 'res_day', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public userService: UserService
  ) {
       // Assign the data to the data source for the table to render
  }

  ngOnInit() {
    this.getUser();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getUser(): void {
    this.userService.getUser().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      }
    )
  }

  public lockUser(id) {
    return this.userService.lockUser(id).subscribe(
      (res) => {
        if(res.message == 'Success updated!') {
          location.reload();
        }
      }
    )
  }

  public blockUser(id) {
    return this.userService.blockUser(id).subscribe(
      (res) => {
        if(res.message == 'Success updated!') {
          location.reload();
        }
      }
    );
  }
}

