import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  public titulo: string;

  constructor( 
      private _router: Router,
      private _title: Title,
      private _meta: Meta
      ) { 

    this.getDataRoute()
    .subscribe( (data) => {
      this.titulo = data.titulo;
      this._title.setTitle( data.titulo );

      const metaTitulo: MetaDefinition = {
        name: 'descripcion',
        content: data.titulo
      };

      this._meta.addTag(metaTitulo);
    });

  }

  ngOnInit() {
  }

  getDataRoute() {
    return this._router.events
    .pipe(
      filter ( evento => evento instanceof ActivationEnd ),
      filter ( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map ( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }

}
