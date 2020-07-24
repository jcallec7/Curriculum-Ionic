import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../class/person';
import { Router, NavigationExtras } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  checkbox =  false

  data = ""

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

  constructor(public router: Router, private camera: Camera, private geolocation: Geolocation) { }

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

  locate(){

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
    this.data = 'Lat: ' + resp.coords.latitude + ', Long: ' + resp.coords.longitude
    
    }).catch((error) => {
      console.log('Error getting location', error);
      this.data = error
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
