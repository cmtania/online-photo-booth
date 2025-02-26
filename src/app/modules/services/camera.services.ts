import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private videoElement!: HTMLVideoElement;

  constructor() {}

  async initCamera(videoElement: HTMLVideoElement, deviceId?: string): Promise<void> {
    this.videoElement = videoElement;
    const constraints = {
      video: {
        deviceId: deviceId ? { exact: deviceId } : undefined
      }
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    this.videoElement.srcObject = stream;
    await this.videoElement.play();
  }

  capturePhoto(): string {
    const canvas = document.createElement('canvas');
    canvas.width = this.videoElement.videoWidth;
    canvas.height = this.videoElement.videoHeight;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
    }
    return canvas.toDataURL('image/png');
  }
}