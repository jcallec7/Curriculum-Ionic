import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../class/person';
import { Router, NavigationExtras } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { tap, finalize, filter } from 'rxjs/operators';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  checkbox =  false

  person: Person = {

    uid : "",
    cedula : "",
    name: "",
    address : "",
    bornDate: "",
    sex: "",
    company: "",
    jobPosition: "",
    time: "",
    company2: "",
    jobPosition2: "",
    time2: "",
    jobAspirations: "",
    title3rd: "",
    title4th: ""


  };

  constructor(public router: Router, private camera: Camera) { }

  ngOnInit() {

  }


  capturePhoto(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log(err)
    });

  }

  redirect(){

    let extras: NavigationExtras ={
      state: {
        person: this.person
      }

    }

    if(this.checkbox==true){
      this.router.navigate(['work-experience-info'], extras)
    }else{
      this.router.navigate(['job-aspirations-info'], extras)
    }
  }

}
