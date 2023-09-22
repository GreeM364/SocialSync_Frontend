import {Component} from '@angular/core'
import {AccountService} from '../services/account.service'
import {Router} from '@angular/router'
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'socialSync-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  model: any = {}

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'),
      error: error => this.toastr.error(error.error)
    })
  }

  logout() {
    this.accountService.logout()
    this.router.navigateByUrl('/')
  }
}
