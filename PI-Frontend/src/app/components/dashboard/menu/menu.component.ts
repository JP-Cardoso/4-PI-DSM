import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  messageHour!: string;
  showNameUser!: string;
  isDefaultImage = '../../../../assets/images/default.png'
  imageUser!: SafeResourceUrl;
  constructor(private localStorageService: LocalstorageService,
    private sanitizer: DomSanitizer,
    private router: Router) {

  }

  ngOnInit() {
    this.getNameUser();
  }


  getMessageHour(message: string) {
    this.messageHour = message;
  }

  getNameUser() {
    const nameUser = this.localStorageService.getLocalStorage('user')
    this.showNameUser = nameUser;
  }

  logout() {
    this.localStorageService.removeLocalStorage('token');
    this.localStorageService.removeLocalStorage('user')
    this.router.navigate(['/'])
  }
}
