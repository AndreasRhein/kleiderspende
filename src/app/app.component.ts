import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PlzCheckerComponent } from './plzChecker/plzChecker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  // MatDialog injekten, um Dialog öffnen zu können
  constructor(private dialog: MatDialog) {}

  // Entscheidet ob Form oder Übersicht gezeigt wird
  registerComplete = false;

  // Optionen für Selectboxen
  clothOptions = ClothTypes;
  areaOptions = Areas;

  // Eingabe aus Formular wird hier gespeichert
  // Wird später auf Übersicht ausgegeben
  // Das hier müsste in Service ausgelagert werden, wenn schöner
  public formValues = {
    abholung: false,
    clothOption: '',
    area: '',
    zipCode: '',
    name: '',
    surname: '',    
    address: ''    
  }

  // Ist an RadioButtons gekoppelt, zeigt Dialog wenn Abholung ausgewählt wird
  onSelectionChanged() {
    if(!this.formValues.abholung)
      return;
    
    // Erzeugt ein Konfigurationsobjekt für Dialog, um Höhe/Breite festzulegen
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.height = '200px';

    //Öffnet den Dialog
    const dialogRef = this.dialog.open(PlzCheckerComponent, dialogConfig);
    
    //Reagiert darauf, wenn Dialog geschlossen wurde
    dialogRef.afterClosed().subscribe(result => {
      // Wenn Dialog abgebrochen (ohne PLZ), dann setze Radio zurück
      if(result === undefined)
        this.formValues.abholung = false;
      else
        this.formValues.zipCode = result;
    });
  }

  // Wird von Register-Button aufgerufen. Validiert Eingaben. 
  // Wenn Eingaben nicht vollständig, dann wird keine Übersicht gezeigt.
  register() {
    if (this.formValues.clothOption === '')
      alert("Keine Kleidung ausgewählt!")
    else if(this.formValues.area === '')
      alert("Kein Krisengebiet ausgewählt!")
    else if(this.formValues.name === '')
      alert("Kein Vorname angegeben!")
    else if(this.formValues.surname === '')
      alert("Kein Nachname angegeben!")    
    else if(this.formValues.abholung && this.formValues.address === '')
      alert("Es wurde keine Adresse angegeben!")
    else
      this.registerComplete = true;
  }
}

// Selectbox-Inhalte
export const ClothTypes = [
  { value: 'Schuhe', display: 'Schuhe' },
  { value: 'Hosen', display: 'Hosen' },
  { value: 'T-Shirts', display: 'T-Shirts' },
  { value: 'Hemden', display: 'Hemden' },
  { value: 'Gürtel', display: 'Gürtel' },
  { value: 'Jacken', display: 'Jacken' },
  { value: 'Mäntel', display: 'Mäntel' },
  { value: 'Schals', display: 'Schals' },
  { value: 'Kappen / Mützen', display: 'Kappen / Mützen' }  
];

export const Areas = [
  { value: 'Afghanistan', display: 'Afghanistan' },
  { value: 'Ägypten', display: 'Ägypten' },
  { value: 'Irak', display: 'Irak' },
  { value: 'Libyen', display: 'Libyen' },
  { value: 'Nigeria', display: 'Nigeria' },
  { value: 'Pakistan', display: 'Pakistan' },
  { value: 'Syrien', display: 'Syrien' },
  { value: 'Zentralafrikanische Republik', display: 'Zentralafrikanische Republik' }
];
