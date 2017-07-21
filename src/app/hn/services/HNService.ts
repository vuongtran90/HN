// Libraries
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// Services
import { ApiService} from '../../shared/services/ApiService';
// Models
import { Feed } from '../models/Feed'
import { User } from '../models/User'

@Injectable()

export class HNService {
    // Api Domain Url
    private apiUrl = 'http://api.hackerwebapp.com';

    constructor(
        private apiService: ApiService
    ) {
    }

    getFeed(feedType: string, page: number): Observable<Feed> {
        const requestUrl = `${this.apiUrl}/${feedType}?page=${page}`
        return this.apiService.get<Feed>(requestUrl);
    }

    getUser(userId: string): Observable<any> {
        const requestUrl = `${this.apiUrl}/user/${userId}`
        return this.apiService.get<any>(requestUrl);
    }

    getItem(itemId: number): Observable<any> {
        const requestUrl = `${this.apiUrl}/item/${itemId}`
        return this.apiService.get<any>(requestUrl);
    }
}