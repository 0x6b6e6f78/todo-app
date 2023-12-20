import {Page} from "../app/app.component";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: "root" })
export class ComponentService {

  private _page: Page | undefined;

  constructor() {
    let localPage = localStorage.getItem("page");
    if (localPage == null) {
      this.page = Page.LIST;
    } else {
      this.page = JSON.parse(localPage!);
    }
  }

  public set page(page: Page) {
    this._page = page;
    localStorage.setItem("page", JSON.stringify(page));
  }

  public get page(): Page | undefined {
    return this._page;
  }
}
