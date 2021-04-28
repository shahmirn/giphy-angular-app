import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-image-dialog',
    templateUrl: './image-dialog.component.html',
    styleUrls: ['./image-dialog.component.sass']
})
export class ImageDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string }) { }

    ngOnInit(): void {
    }

}
