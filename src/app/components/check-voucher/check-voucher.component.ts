import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-check-voucher',
  templateUrl: './check-voucher.component.html',
  styleUrls: ['./check-voucher.component.scss']
})
export class CheckVoucherComponent implements OnInit {
  formGroup: FormGroup;
  voucher = '20OFFPROMO';
  data: string;
  disabled = false;
  @Input() total: number;
  @Output() validOrInvalid = new EventEmitter<boolean>();
  discountVoucher = false;
  discountVoucherError = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}


  ngOnInit() {
  }


  onValidVoucher(e) {
    if (e === '20OFFPROMO') {
      this.validOrInvalid.emit(true);
      this.discountVoucher = true;
      this.discountVoucherError = false;
      this.disabled = true;
      this.data = '';
      return;
    }
    this.discountVoucherError = true;
  }

}
