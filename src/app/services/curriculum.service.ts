import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from '../class/person';
import { PersonalInfoPage } from '../personal-info/personal-info.page';

//import { Event } from '../models/event';


@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private afs: AngularFirestore) { }

  getUsers(): Observable<any[]>{
    return this.afs.collection('users', 
        ref => ref.orderBy('cedula', 'asc')).valueChanges();
  }

  getUser(uid: string): Observable<Event>{
    let itemDoc = this.afs.doc<Event>(`users/${uid}`);
    return itemDoc.valueChanges();
  }

  insertUser(user: Person){
    const refUser = this.afs.collection("users")
    user.uid = this.afs.createId()
    const param = JSON.parse(JSON.stringify(user))
    refUser.doc(user.uid).set(param)
  }
}

