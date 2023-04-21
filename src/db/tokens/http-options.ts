import {InjectionToken} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";

export const HTTP_OPTIONS_TOKEN = new InjectionToken('HTTP options', {
  providedIn: 'root',
  factory: () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
})
