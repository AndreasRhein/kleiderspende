import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'plz-checker',
  templateUrl: './plzChecker.component.html',
})

export class PlzCheckerComponent {
    constructor(private dialogRef: MatDialogRef<PlzCheckerComponent>) {}
    
    public zipCode = '';

    handleClick() {
        if(!this.validateInput(this.zipCode))
            alert("Geben Sie bitte eine korrekte PLZ ein!");
        else if(this.checkIfZipCodeIsInRange(this.zipCode))
            this.dialogRef.close(this.zipCode);
        else
            alert("Ihre PLZ ist nicht in Reichweite der Geschäftsstelle!");
    }

    validateInput(zipCode: string): boolean {
        if (zipCode.length < 5)
            return false;

        const numberPattern = /^[0-9]+$/;
        return numberPattern.test(zipCode);
    }

    checkIfZipCodeIsInRange(zipCode: string): boolean {
        const firstTwoNumbers = zipCode.substring(0, 2);
        return parseInt(firstTwoNumbers) === 44;
    }
}
