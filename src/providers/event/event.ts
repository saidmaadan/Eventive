import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class EventProvider {
  public userProfileRef: firebase.database.Reference;

  constructor() {
    this.userProfileRef = firebase.database()
      .ref(`userProfile/${firebase.auth().currentUser.uid}`);
  }

  createEvent(eventName: string, eventDate: string,
    eventPrice: number, eventCost: number): firebase.Promise<any>{
      return this.userProfileRef.child('/eventList').push({
        name: eventName,
        date: eventDate,
        price: eventPrice * 1,
        cost: eventCost * 1,
      });
    }

    getEventList(): firebase.database.Reference{
      return this.userProfileRef.child('/eventList');
    }

    getEventDetail(eventId: string): firebase.database.Reference{
      return this.userProfileRef.child('/eventList').child(eventId);
    }

}
