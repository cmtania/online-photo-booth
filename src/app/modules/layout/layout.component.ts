import { Component, ViewChild } from '@angular/core';
import { CameraComponent } from '../components/camera/camera.component';

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

  onPhotoCaptured(photo: string): void {
    this.photos.push(photo);
  }

  startCountdown(): void {
    this.cameraComponent.startCountdown(this.countdownTime);
  }

  onCameraSelected(cameraId: string): void {
    this.cameraComponent.onCameraSelected(cameraId);
  }
}