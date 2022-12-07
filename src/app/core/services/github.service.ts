import { take, tap, map } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

const API_URL = 'https://api.github.com/';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  public formularioBasico!: FormGroup;

  constructor(protected http: HttpClient, private fb: FormBuilder) {}

  buscarUsuario(username: string) {
    return this.http.get<UserModel>(`${API_URL}users/${username}`);
  }

  buscarRepod(username: string) {
    return this.http.get<any[]>(`${API_URL}users/${username}/repos`);
  }

  inicializaForm() {
    this.formularioBasico = this.fb.group({
      login: ['', Validators.compose([Validators.required])],
      id: [0, Validators.compose([])],
      node_id: ['', Validators.compose([])],
      avatar_url: ['', Validators.compose([])],
      gravatar_id: ['', Validators.compose([])],
      url: ['', Validators.compose([])],
      html_url: ['', Validators.compose([])],
      followers_url: ['', Validators.compose([])],
      following_url: ['', Validators.compose([])],
      gists_url: ['', Validators.compose([])],
      starred_url: ['', Validators.compose([])],
      subscriptions_url: ['', Validators.compose([])],
      organizations_url: ['', Validators.compose([])],
      repos_url: ['', Validators.compose([])],
      events_url: ['', Validators.compose([])],
      received_events_url: ['', Validators.compose([])],
      type: ['', Validators.compose([])],
      site_admin: ['', Validators.compose([])],
      name: ['', Validators.compose([])],
      company: ['', Validators.compose([])],
      blog: ['', Validators.compose([])],
      location: ['', Validators.compose([])],
      email: ['', Validators.compose([])],
      hireable: [false, Validators.compose([])],
      bio: ['', Validators.compose([])],
      twitter_username: ['', Validators.compose([])],
      public_repos: [0, Validators.compose([])],
      public_gists: [0, Validators.compose([])],
      followers: [0, Validators.compose([])],
      following: [0, Validators.compose([])],
      created_at: [Date.now(), Validators.compose([])],
      updated_at: [Date.now(), Validators.compose([])],
    });
  }

  preencheFormulario(user: UserModel) {
    this.formularioBasico.patchValue({
      login: user.login,
      id: user.id,
      node_id: user.node_id,
      avatar_url: user.avatar_url,
      gravatar_id: user.gravatar_id,
      url: user.url,
      html_url: user.html_url,
      followers_url: user.followers_url,
      following_url: user.following_url,
      gists_url: user.gists_url,
      starred_url: user.starred_url,
      subscriptions_url: user.subscriptions_url,
      organizations_url: user.organizations_url,
      repos_url: user.repos_url,
      events_url: user.events_url,
      received_events_url: user.received_events_url,
      type: user.type,
      site_admin: user.site_admin,
      name: user.name,
      company: user.company,
      blog: user.blog,
      location: user.location,
      email: user.email,
      hireable: user.hireable,
      bio: user.bio,
      twitter_username: user.twitter_username,
      public_repos: user.public_repos,
      public_gists: user.public_gists,
      followers: user.followers,
      following: user.following,
      created_at: user.created_at,
      updated_at: user.updated_at,
    });
  }

  get getformularioBasico() {
    return this.formularioBasico.controls;
  }
  //Limpeza do formulário
  reset() {
    this.formularioBasico.reset();
  }

  handleError(error: HttpErrorResponse) {
    return error;
  }
}
