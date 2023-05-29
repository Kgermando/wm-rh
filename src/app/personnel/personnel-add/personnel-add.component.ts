import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { countries } from 'src/app/shared/utils/countries';
import { Countries } from 'src/app/shared/models/country.model';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';
import { STEPPER_GLOBAL_OPTIONS, StepperOrientation } from '@angular/cdk/stepper';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PersonnelModel } from '../models/personnel-model';



interface Sexe {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-personnel-add',
  templateUrl: './personnel-add.component.html',
  styleUrls: ['./personnel-add.component.scss']
})
export class PersonnelAddComponent implements OnInit  {

  hide = true;

  user: PersonnelModel = {};

  sexes: Sexe[] = [
      {value: 'Femme', viewValue: 'Femme'},
      {value: 'Homme', viewValue: 'Homme'},
  ];

  countries: Countries [] = countries;

  files: File[] = [];

  onSelectPhoto(event:any) {
      this.files.push(...event.addedFiles);
  } 

  onRemovePhoto(event:any) {
      this.files.splice(this.files.indexOf(event), 1);
  }

  onSelectCV(event:any) {
      this.files.push(...event.addedFiles);
  }

  onRemoveCV(event:any) {
      this.files.splice(this.files.indexOf(event), 1);
  }


  identiteFormGroup = this._formBuilder.group({
      photo: [''],
      nom: ['', Validators.required],
      postnom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],   
      date_naissance: ['', Validators.required],
      lieu_naissance: ['', Validators.required],
      nationalite: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      etat_civile: ['', Validators.required],
      nbr_enfant: ['', Validators.required],
      nbr_dependants: ['', Validators.required],
      nbr_dependants_max: ['', Validators.required],
      adresse: ['', Validators.required],
  });
  identifiantFormGroup = this._formBuilder.group({
      matricule: ['', Validators.required],
      numero_cnss: ['', Validators.required],
      role: ['', Validators.required],
  });
  fonctionFormGroup = this._formBuilder.group({
      departement: ['', Validators.required],
      title: ['', Validators.required],
      fonction: ['', Validators.required],
      services: ['', Validators.required],
      site_location: ['', Validators.required],
  });
  contratFormGroup = this._formBuilder.group({
      type_contrat: ['', Validators.required],
      date_debut_contrat: ['', Validators.required],
      date_fin_contrat: ['', Validators.required],
  });
  salaireFormGroup = this._formBuilder.group({
      fiveCtrl: ['', Validators.required],
      salaire: ['', Validators.required],
      compte_bancaire: ['', Validators.required],
      nom_banque: ['', Validators.required],
      frais_bancaire: ['', Validators.required], 
  });
  statutFormGroup = this._formBuilder.group({
      cv_url: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
      public themeService: CustomizerSettingsService,
      private _formBuilder: FormBuilder, 
      breakpointObserver: BreakpointObserver,
      public dialog: MatDialog,) {
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  } 


  ngOnInit(): void {
      
  }


  openAddDepartementDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(AddDepartementDialogBox, {
          width: '600px',
          enterAnimationDuration,
          exitAnimationDuration
      });
  } 

  openAddTitreDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(AddTitreDialogBox, {
          width: '600px',
          enterAnimationDuration,
          exitAnimationDuration
      });
  }

  openAddFonctionDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(AddFonctionDialogBox, {
          width: '600px',
          enterAnimationDuration,
          exitAnimationDuration
      });
  }

  openAddServiceDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(AddServiceDialogBox, {
          width: '600px',
          enterAnimationDuration,
          exitAnimationDuration
      });
  }

  openAddSiteLocationDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(AddSiteLocationDialogBox, {
          width: '600px',
          enterAnimationDuration,
          exitAnimationDuration
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





  onSubmitIdentite() {
      console.log("reactive form submitted");
      console.log(this.identiteFormGroup);
  }

  onSubmitIdentifiant() {
      console.log("reactive form submitted");
      console.log(this.identifiantFormGroup);
  }

  onSubmitFonction() {
      console.log("reactive form submitted");
      console.log(this.fonctionFormGroup);
  }

  onSubmitContrat() {
      console.log("reactive form submitted");
      console.log(this.contratFormGroup);
  }

  onSubmitSalaire() {
      console.log("reactive form submitted");
      console.log(this.salaireFormGroup);
  }

  onSubmitStatut() {
      console.log("reactive form submitted");
      console.log(this.statutFormGroup);
  }

  















}


@Component({
  selector: 'add-departement-dialog',
  templateUrl: './add-departement-dialog.html',
})
export class AddDepartementDialogBox {

  constructor(
      public dialogRef: MatDialogRef<AddDepartementDialogBox>
  ) {}

  close(){
      this.dialogRef.close(true);
  }

}

@Component({
  selector: 'add-title-dialog',
  templateUrl: './add-title-dialog.html',
})
export class AddTitreDialogBox {

  constructor(
      public dialogRef: MatDialogRef<AddTitreDialogBox>
  ) {}

  close(){
      this.dialogRef.close(true);
  }

}

@Component({
  selector: 'add-fonction-dialog',
  templateUrl: './add-fonction-dialog.html', 
})
export class AddFonctionDialogBox {

  constructor(
      public dialogRef: MatDialogRef<AddFonctionDialogBox>
  ) {}

  close(){
      this.dialogRef.close(true);
  }

}

@Component({
  selector: 'add-service-dialog',
  templateUrl: './add-service-dialog.html',
})
export class AddServiceDialogBox {

  constructor(
      public dialogRef: MatDialogRef<AddServiceDialogBox>
  ) {}

  close(){
      this.dialogRef.close(true);
  }

}

@Component({
  selector: 'add-site-location-dialog',
  templateUrl: './add-site-location-dialog.html',
})
export class AddSiteLocationDialogBox {

  constructor(
      public dialogRef: MatDialogRef<AddSiteLocationDialogBox>
  ) {}

  close(){
      this.dialogRef.close(true);
  }

}