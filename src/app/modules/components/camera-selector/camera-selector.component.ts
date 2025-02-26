import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-camera-selector',
  templateUrl: './camera-selector.component.html',
  styleUrls: ['./camera-selector.component.scss']
})
export class CameraSelectorComponent implements OnInit {
  @Output() cameraSelected = new EventEmitter<string>();
  cameras: MediaDeviceInfo[] = [];
  selectedCameraId: string = '';

  async ngOnInit(): Promise<void> {
    const devices = await navigator.mediaDevices.enumerateDevices();
    this.cameras = devices.filter(device => device.kind === 'videoinput');
    if (this.cameras.length > 0) {
      this.selectedCameraId = this.cameras[0].deviceId;
    }
  }

  onCameraChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCameraId = selectElement.value;
    this.cameraSelected.emit(this.selectedCameraId);
  }
}