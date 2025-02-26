import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CameraService } from '../../services/camera.services';


@Component({
  selector: 'app-camera',
  standalone: false,
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss'
})
export class CameraComponent implements AfterViewInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @Output() photoCaptured = new EventEmitter<string>();
  countdown: number = 0;
  selectedCameraId: string = '';

  constructor(private cameraService: CameraService) {}

  ngAfterViewInit(): void {
    this.initCamera();
  }

  initCamera(): void {
    this.cameraService.initCamera(this.video.nativeElement, this.selectedCameraId);
  }

  startCountdown(time: number): void {
    let capturesRemaining = 4; // Number of captures
    this.countdown = time;

    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        this.capturePhoto();
        capturesRemaining--;
        if (capturesRemaining > 0) {
          this.countdown = time; // Reset countdown for the next capture
        } else {
          clearInterval(interval);
        }
      }
    }, 1000);
  }

  capturePhoto(): void {
    const photo = this.cameraService.capturePhoto();
    this.photoCaptured.emit(photo);
  }

  onCameraSelected(cameraId: string): void {
    console.log('Camera selected:', cameraId);
    this.selectedCameraId = cameraId;
    this.initCamera();
  }
}