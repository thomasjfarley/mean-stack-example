import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageUploaderComponent} from "./image-uploader.component";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ImageUploaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [ImageUploaderComponent],
})
export class ImageUploaderModule {
}
