import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'daniel-locatelli';

  constructor(private firestore: Firestore){

  }

  public ngOnInit(): void {
    const testCollection = collection(this.firestore, 'test');
    addDoc(testCollection, {text: "Hello firebase"});
  }
}
