import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var config = {
      apiKey: "AIzaSyBsBVaa3NUnd0N5iCMumaP7SfCqQuAsp4w",
      authDomain: "postsprojetformation.firebaseapp.com",
      databaseURL: "https://postsprojetformation.firebaseio.com",
      projectId: "postsprojetformation",
      storageBucket: "postsprojetformation.appspot.com",
      messagingSenderId: "285826393406"
    };
    firebase.initializeApp(config);
  }
}
