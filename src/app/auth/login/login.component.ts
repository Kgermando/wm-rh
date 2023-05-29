import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  form : FormGroup | any

  constructor(
      public themeService: CustomizerSettingsService,
      private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
      this.form = this.formBuilder.group({
        matricule: '',
        password: ''
      });
  }



  submit(): void {
    console.log(this.form.getRawValue());
  }


  toggleTheme() {
      this.themeService.toggleTheme();
  }

  toggleCardBorderTheme() {
      this.themeService.toggleCardBorderTheme();
  }

  toggleCardBorderRadiusTheme() {
      this.themeService.toggleCardBorderRadiusTheme();
  }

  toggleRTLEnabledTheme() {
      this.themeService.toggleRTLEnabledTheme();
  }
}
