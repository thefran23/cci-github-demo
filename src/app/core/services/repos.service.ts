import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Issue, Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  constructor(private http: HttpClient) {}

  searchReposByName(searchTerm: string) {
    return this.http.get<Repo[]>(
      `${environment.githubApi}/search/repositories?q=${searchTerm}`
    );
  }

  getRepoByFullName(fullName: string) {
    return this.http.get<Repo>(`${environment.githubApi}/repos/${fullName}`);
  }

  getIssuesByRepoName(fullName: string) {
    return this.http.get<Issue[]>(
      `${environment.githubApi}/repos/${fullName}/issues?state=all`
    );
  }
}
