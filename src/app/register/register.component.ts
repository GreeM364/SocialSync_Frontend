import {Component, EventEmitter, Output} from '@angular/core'
import {AccountService} from '../services/account.service'
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'socialSync-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model: any = {}
  @Output() cancelRegister = new EventEmitter<boolean>()

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => this.cancel(),
      error: error => {
        this.toastr.error(error.error);
        console.log(error);
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false)
  }
}
