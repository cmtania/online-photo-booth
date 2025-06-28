import { Component, ViewChild } from '@angular/core';
import { CameraComponent } from '../components/camera/camera.component';
import { SelectModel } from '../models/count-select.model';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild(CameraComponent) cameraComponent!: CameraComponent;

  contact =  {
    Email: 'mailto:tania.dev.ph@gmail.com',
    Linkedin: 'https://www.linkedin.com/in/taniachristian/',
    Github: 'https://github.com/cmtania'
   };
   
  photos: string[] = [];
  countdownTime: number = 3;
  photoToTake: number = 4;
  backgroundStyle: string = "";

  countSelection: SelectModel[] =  [
    { Label: '4 Photos', Value: 4 },
    { Label: '6 Photos', Value: 6 },
    { Label: '8 Photos', Value: 8 }
  ];

  timerSelection: SelectModel[] =  [
    { Label: '3 Second', Value: 3},
    { Label: '5 Seconds', Value: 5 },
    { Label: '10 Seconds', Value: 10 },
  ];

  backgroundSelection: SelectModel[] =  [
    { Label: 'Everlasting Sky', Value: "background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);" },
    { Label: 'Jungle Day', Value:  "background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);" },
    { Label: 'Warm Flame', Value: "background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);"},
    { Label: 'Tempting Azure', Value: "background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);" }
  ];
  

  onPhotoCaptured(photo: string): void {
    this.photos.push(photo);
  }

  startCountdown(): void {
    this.cameraComponent.startCountdown(this.countdownTime,  this.photoToTake);
  }

  onCameraSelected(cameraId: string): void {
    this.cameraComponent.onCameraSelected(cameraId);
  }

  onTimerSelected($event: any): void {
    const value = ($event.target as HTMLSelectElement).value;
    this.countdownTime = Number(value);
  }

  setBackground(background: string): void {
    this.backgroundStyle = background;
  }

  onPhotoToTake($event: any): void {
    const value = ($event.target as HTMLSelectElement).value;
    this.photoToTake = Number(value);
  }

  savePhotos(): void {
    const photoContainer = document.getElementById('photo-container');
    if (!photoContainer) {
      console.error('Photo container element not found.');
      return;
    }

    htmlToImage
      .toJpeg(photoContainer, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'online-photo-booth.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }
}