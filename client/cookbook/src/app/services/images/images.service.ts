import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient) { }
  AUTH_SERVER = "http://localhost:3000/api/images"

  post(imageForm: FormData) {
    return this.httpClient.post(this.AUTH_SERVER, imageForm)
  }

}
