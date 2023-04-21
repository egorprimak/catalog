import {BehaviorSubject, defer, finalize, Observable} from "rxjs";

export function wireLoading(isLoading: BehaviorSubject<boolean>) {
  return <T>(source: Observable<T>) => {
    return defer(() => {
      isLoading.next(true);
      return source.pipe(
        finalize(() => isLoading.next(false)),
      )
    });
  }
}
