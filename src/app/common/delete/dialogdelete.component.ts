import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; 

@Component({
    templateUrl: 'dialogdelete.component.html'
})

export class DialogDeleteComponenet {
    constructor(
        public dialogRef: MatDialogRef<DialogDeleteComponenet>
    ){
        
    }
}