import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/Rx';

@Injectable() 
export class ApiService {
    constructor(private http: Http) {

    }

    // Extract Response data from Request Response
    extractData(res: Response) {
        let body: any;
        let contentType = res.headers.get('content-type')

        // If response has content type "application/json"
        // then parse the body
        if(contentType && contentType.indexOf('application/json') !== -1) {
            try {
                body = res.json();
            }
            catch(error) {
                body = { };
            }
        }

        // Otherwise return body as text
        else {
            body = res.text();
        }

        return body;
    }

    // Handle Error returned from Request Response
    handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // console.log(errMsg); // log to console instead
        return Observable.throw(error);
    }

    // Get Method to get data from Api Endpoint
    get<T>(requestUrl: string): Observable<T> {
        const options = new RequestOptions({ withCredentials: true });
        return this.http.get(requestUrl, options)
                   .map(this.extractData)
                   .catch(this.handleError);
    }

    // Post Method to post data from Api Endpoint
    post<T>(requestUrl: string, data: any): Observable<T> {
        let headers: Headers;

        if(!(data instanceof FormData)) {
            headers = new Headers({'Content-Type': 'application/json'}); 
        }
        
        const options = new RequestOptions({
                            headers: headers,
                            withCredentials: true
                        });

        return this.http.post(requestUrl, data, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
}  