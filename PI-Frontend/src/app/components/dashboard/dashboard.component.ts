import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( private localStorageService: LocalstorageService) {}

  ngOnInit() {
    this.getUser();
  }


  getUser() {
    // const {_id} = this.localStorageService.getLocalStorage('userInfo')
    // this.apiService.getUser(_id).subscribe()

  }
}
