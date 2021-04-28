import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
    selector: 'app-giphy-images',
    templateUrl: './giphy-images.component.html',
    styleUrls: ['./giphy-images.component.sass']
})
export class GiphyImagesComponent {

    constructor(public dialog: MatDialog) { }

    @Input()
    public images: { thumbnail: string, full: string }[] = [];

    openDialog(image: { thumbnail: string, full: string }) {
        this.dialog.open(ImageDialogComponent, {
            data: {
                url: image.full
            }
        });
    }
}
