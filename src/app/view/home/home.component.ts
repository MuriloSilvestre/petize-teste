import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitHubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GitHubService],
})
export class HomeComponent implements OnInit {
  constructor(
    public service: GitHubService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.service.inicializaForm();
  }

  public BuscarUsuario() {
    this.router.navigate(['/perfil'], {
      queryParams: {
        NomeUsuario: this.service.getformularioBasico['login'].value,
      },
    });
  }
}
