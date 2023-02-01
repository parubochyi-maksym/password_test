import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  password: string;
  weight: number = 0;

  regExpString = /[a-zA-Z]/g;
  regExpNumbers = /[0-9]/g;
  regExpCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

  inputHandler(value: string) {
    this.weight = 0;

    if (!value || value.length < 8) {
      return;
    }

    if (value.match(this.regExpString)) {
      this.weight += 1;
    }

    if (value.match(this.regExpNumbers)) {
      this.weight += 1;
    }

    if (value.match(this.regExpCharacters)) {
      this.weight += 1;
    }
  }
}
