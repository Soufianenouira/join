import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'join-1-46a2d',
        appId: '1:414847680321:web:1f023837141c2935ac6bc0',
        storageBucket: 'join-1-46a2d.firebasestorage.app',
        apiKey: 'AIzaSyCXcBokA4SNkxf0PRKFrD0_E0GnPnrnUAs',
        authDomain: 'join-1-46a2d.firebaseapp.com',
        messagingSenderId: '414847680321',
        measurementId: 'G-RXQNVD7VXR',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'join-1-46a2d',
        appId: '1:414847680321:web:1f023837141c2935ac6bc0',
        storageBucket: 'join-1-46a2d.firebasestorage.app',
        apiKey: 'AIzaSyCXcBokA4SNkxf0PRKFrD0_E0GnPnrnUAs',
        authDomain: 'join-1-46a2d.firebaseapp.com',
        messagingSenderId: '414847680321',
        measurementId: 'G-RXQNVD7VXR',
      })
    ),
    provideFirestore(() => getFirestore()), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"join-1-46a2d","appId":"1:414847680321:web:1f023837141c2935ac6bc0","storageBucket":"join-1-46a2d.firebasestorage.app","apiKey":"AIzaSyCXcBokA4SNkxf0PRKFrD0_E0GnPnrnUAs","authDomain":"join-1-46a2d.firebaseapp.com","messagingSenderId":"414847680321","measurementId":"G-RXQNVD7VXR"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
};
