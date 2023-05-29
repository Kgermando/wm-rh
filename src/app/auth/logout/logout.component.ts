import { Component } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/layouts/common/customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(
    public themeService: CustomizerSettingsService
) {}

toggleTheme() {
    this.themeService.toggleTheme();
}

toggleCardBorderTheme() {
    this.themeService.toggleCardBorderTheme();
}

toggleCardBorderRadiusTheme() {
    this.themeService.toggleCardBorderRadiusTheme();
}
}
