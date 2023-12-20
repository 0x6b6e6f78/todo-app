import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import {environment} from "../objects/enviroment";
import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;
import {provideFirebaseApp} from "@angular/fire/app";

// export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes),
  //   importProvidersFrom([
  //     provideFirebaseApp(() => initializeApp(environment.firebase)),
  //     provideFirestore(() => getFirestore()),
  //   ])]
// };
