import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../../services/images/images.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  // @ts-ignore
  imageObj: File;
  // @ts-ignore
  imageUrl: string;

  recipe = {
    author: "tom",
    name: "test",
    ingredients: [{
      ingredient: "test",
      amount: "1 cup"
    }],
    directions: [{
      "step": 1,
      "description": "test"
    }]}
  AUTH_SERVER = "http://localhost:3000/api/recipes"


  constructor(private imageService: ImagesService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.post().subscribe(res => {
    //   console.log(res)
    // })
  }

  // post() {
  //   return this.httpClient.post(this.AUTH_SERVER, this.recipe)
  // }

  onImagePicked(event: Event): void {
    // @ts-ignore
    this.imageObj = (event.target as HTMLInputElement).files[0];
  }

  onImageUpload() {
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);
    this.imageService.post(imageForm).subscribe(res => {
      // @ts-ignore
      this.imageUrl = res['image'];
    });
  }

  // postImage() {
  //   this.imageService.post().toPromise().then(res => console.log(res))
  // }

}
