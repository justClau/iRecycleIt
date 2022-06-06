import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'landing-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]);
  confirmPassword = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);




  getErrorMessage() {
    if(this.username.hasError('required')) {
      return 'Trebuie sa introduci un nume de utilizator';
    }

    if (this.email.hasError('required')) {
      return 'Trebuie sa introduci o adresa de email';
    } else if (this.email.hasError('email')) {
      return 'Adresa de email nu este valida';
    }

    if (this.password.hasError('required')) {
      return 'Trebuie sa introduci o parola';
    } else if (this.password.hasError('pattern')) {
      return 'Parola trebuie sa contina o litera mica, o litera mare, un numar, si un caracter special';
    }

    if(this.confirmPassword.hasError('required')) {
      return 'Confirma parola!';
    }else if(this.confirmPassword !== this.password) {
      return 'Parolele nu coincid';
    }

    if (this.firstName.hasError('required')) {
      return 'Trebuie sa introduci prenumele!';
    }
    if (this.lastName.hasError('required')) {
      return 'Trebuie sa introduci numele de familie!';
    }
    return '';
  }

  constructor() { }

  ngOnInit() {
  }

}
