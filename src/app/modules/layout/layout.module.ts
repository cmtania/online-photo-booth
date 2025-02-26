import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "./layout-routing.module";
import { CameraComponent } from "../components/camera/camera.component";
import { PreviewComponent } from "../components/preview/preview.component";
import { CameraSelectorComponent } from "../components/camera-selector/camera-selector.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
  ],  
  declarations: [
    LayoutComponent,
    CameraComponent,
    PreviewComponent,
    CameraSelectorComponent
  ],
  exports:[],  
  providers:[]

})
export class LayoutModule { }
