import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { GitHubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [GitHubService],
})
export class PerfilComponent implements OnInit {
  public data: string = new Date().toISOString();
  public perfil!: UserModel;
  public repos!: any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: GitHubService
  ) {}

  async ngOnInit() {
    this.service.inicializaForm();
    this.route.queryParams.subscribe(async (params) => {
      this.service.buscarUsuario(params['NomeUsuario']).subscribe((res) => {
        if (!res) {
        }
        this.perfil = res;
      });
      this.service.buscarRepod(params['NomeUsuario']).subscribe((res) => {
        if (!res) {
        }
        this.repos = res.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });
      });
    });
  }

  Dias(date1: any, date2: any) {
    const diffInMs = new Date(date2).valueOf() - new Date(date1).valueOf();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return Math.round(diffInDays);
  }
  public BuscarUsuario() {
    this.router.navigate(['/perfil'], {
      queryParams: {
        NomeUsuario: this.service.getformularioBasico['login'].value,
      },
    });
  }
}
