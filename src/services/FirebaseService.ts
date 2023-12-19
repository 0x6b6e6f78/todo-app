import {inject, Injectable} from "@angular/core";
import {collection, collectionData, deleteDoc, doc, Firestore, getDocs, setDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {DocumentData} from "@angular/fire/compat/firestore";

@Injectable({  providedIn: 'root' })
export class FirebaseService {
  // public firestore: Firestore = inject(Firestore);
  // public connection: Observable<DocumentData[]> | undefined;

  constructor() {
    // const showCollection = collection(this.firestore, 'table_show');
    // this.connection = collectionData(showCollection);
  }

  /*
    public async loadSettings(): Promise<Show[]> {
      let shows: Show[] = [];
      const querySnapshot = await getDocs(collection(this.firestore, "table_show"));
      type dataType = {
        name: string,
        image? : string,
        summary? : string
      };
      querySnapshot.forEach(doc => {
        let data = <dataType>doc.data();
        shows.push(new Show(Number.parseInt(doc.id), data.name, data.image, data.summary));
      });
      return shows;
    }

    public async addItemToDatabase(show : Show) : Promise<void> {
      await setDoc(doc(this.firestore, "table_show", show.id.toString()), {
        name: show.name,
        image : show.image !== undefined ? show.image : "",
        summary : show.summary !== undefined ? show.summary : ""
      });
    }

    public async deleteItemFromDatabase(show : Show) : Promise<void> {
      await deleteDoc(doc(this.firestore, "table_show", show.id.toString()));
    }*/
}
