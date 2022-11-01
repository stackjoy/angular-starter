import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { environment } from '../../../../environments/environment';

interface IKeyValueObject {
  [key: string]: string;
}

export interface AppHTTPOptions {
  needsAuth?: boolean;
  headers?: IKeyValueObject;
}

@Injectable({ providedIn: 'root' })
export class HttpService {
  public static readonly PROXY_PREFIX = '/sj-proxy'
  public apiURL = `${ environment.url }/api`;

  constructor(private http: HttpClient, private logger: LoggerService) {

  }

  createHttpParams(params: IKeyValueObject = {}): Observable<HttpParams> {
    let httpParams = new HttpParams();
    if (params) {
      for (const key of Object.keys(params)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return of(httpParams);
  }

  createHTTPHeaders(options: AppHTTPOptions = {}): Observable<HttpHeaders> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    // TODO clean this up
    return of({})
      .pipe(
        // switchMap(needsAuth => needsAuth ? this.authService.getRefreshedAuthToken()
        //   .pipe(
        //     map(token => ({ 'Firebase-Auth-Token': token }))) : of({})),
        map(authHeaders => new HttpHeaders(Object.assign({}, defaultHeaders, options.headers, authHeaders)))
      )
  }

  createHTTPOptions(options: AppHTTPOptions = {}, params: IKeyValueObject = {}): Observable<any> {
    return combineLatest([this.createHTTPHeaders(options), this.createHttpParams(params)])
      .pipe(
        map(([headers, params]) => ({ headers, params }))
      )
  }

  get<T>(url: string, params?: any, options: AppHTTPOptions = {}): Observable<T> {
    return this.createHTTPOptions(options, params).pipe(
      switchMap(httpOptions => this.http.get<T>(this.apiURL + url, httpOptions)),
      tap(data => {
        this.logger.group('Requested: ', this.apiURL + url);
        this.logger.log('Http Service: GET Response -> ' + url, data);
        this.logger.endGroup();
      })
    ) as Observable<T>;
  }

  post<T>(url: string, params?: any, options: AppHTTPOptions = {}): Observable<T> {
    return this.createHTTPOptions(options, {}).pipe(
      switchMap(httpOptions => this.http.post<T>(this.apiURL + url, params, httpOptions)),
      tap(data => this.logger.log('Http Service: POST Response -> ' + url, (typeof data === 'string' ? `${ data.substring(0, 150) }...` : data)))
    ) as Observable<T>;
  }

  put<T>(url: string, params?: any, options: AppHTTPOptions = {}): Observable<T> {
    return this.createHTTPOptions(options, {}).pipe(
      switchMap(httpOptions => this.http.put<T>(this.apiURL + url, params, httpOptions)),
      tap(data => this.logger.log('Http Service: PUT Response -> ' + url, data))
    ) as Observable<T>;
  }

  delete<T>(url: string, params?: any, options: AppHTTPOptions = {}): Observable<T> {
    return this.createHTTPOptions(options, params).pipe(
      switchMap(httpOptions => this.http.delete<T>(this.apiURL + url, httpOptions)),
      tap(data => this.logger.log('Http Service: DELETE Response -> ' + url, data))
    ) as Observable<T>;
  }

}
