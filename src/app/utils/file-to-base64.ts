import {Observable} from "rxjs";

export function fileToBase64(f: Blob | File): Observable<string | null> {
  return new Observable<string | null>(subscriber => {
    const reader = new FileReader();
    reader.onloadend = () => {
      subscriber.next(reader.result !== null ? reader.result.toString() : null);
      subscriber.complete();
    }
    reader.readAsDataURL(f);
  })
}
