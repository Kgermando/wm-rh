import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(
      public themeService: CustomizerSettingsService
  ) {}


  ngOnInit(): void {
      
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
