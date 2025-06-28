import { Component, ViewChild } from '@angular/core';
import { CameraComponent } from '../components/camera/camera.component';
import { SelectModel } from '../models/count-select.model';

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
  countdownTime: number = 3; // Default countdown time

  countSelection: SelectModel[] =  [
    { Label: '1 Photo', Value: 1 },
    { Label: '2 Photos', Value: 2 },
    { Label: '3 Photos', Value: 3 },
    { Label: '4 Photos', Value: 3 }
  ];

  timerSelection: SelectModel[] =  [
    { Label: '1 Second', Value: 1 },
    { Label: '3 Seconds', Value: 3 },
    { Label: '5 Seconds', Value: 5 },
    { Label: '10 Seconds', Value: 10 }
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
    this.cameraComponent.startCountdown(this.countdownTime);
  }

  onCameraSelected(cameraId: string): void {
    this.cameraComponent.onCameraSelected(cameraId);
  }

  onTimerSelected($event: any): void {
    const value = ($event.target as HTMLSelectElement).value;
    this.countdownTime = Number(value);
  }
}