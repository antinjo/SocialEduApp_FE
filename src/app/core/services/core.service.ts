import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/searchResult.model';
import { Search } from '../models/search.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http:HttpClient) { }

  getSearchResults(search:Search):Observable<SearchResult[]>{
    return this.http.post<SearchResult[]>(environment.link+ "/api/Home/searchresults",search)
  }
}
