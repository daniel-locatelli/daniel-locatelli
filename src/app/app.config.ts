import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"daniel-locatelli","appId":"1:878497542260:web:94012e698aaa065759a121","storageBucket":"daniel-locatelli.appspot.com","locationId":"europe-west","apiKey":"AIzaSyBFAK6BMmJFewLSmgRTbbJc44yfFpwjiRI","authDomain":"daniel-locatelli.firebaseapp.com","messagingSenderId":"878497542260","measurementId":"G-4199F8L5CV"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
