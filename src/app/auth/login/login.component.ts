import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  isLoading = false;

  form : FormGroup | any

  constructor(
      public themeService: CustomizerSettingsService,
      private formBuilder: FormBuilder,
      private http: HttpClient,
    private router: Router
  ) {}


  ngOnInit(): void {
      this.form = this.formBuilder.group({
        matricule: '',
        password: ''
      });
  }


  submit(): void {
    this.isLoading = true;
    this.http.post(`${environment.apiURL}/login`, this.form.getRawValue(), {
        withCredentials: true
    }).subscribe(res => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
    });
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
