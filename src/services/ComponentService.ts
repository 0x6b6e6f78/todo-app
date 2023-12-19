import {Page} from "../app/app.component";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: "root" })
export class ComponentService {

  private _page: Page = Page.LIST;

  public set page(page: Page) {
    this._page = page;
  }

  public get page() {
    return this._page;
  }
}
