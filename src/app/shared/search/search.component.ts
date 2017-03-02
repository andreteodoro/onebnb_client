import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import { PropertiesService } from '../properties.service'
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private event: KeyboardEvent;
  private query: string = "";
  private arrayAutocomplete: string[] = [];
  private searchModel:string;

  constructor(private PropertiesService: PropertiesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.PropertiesService.autocomplete()
      .subscribe(data => {
        this.arrayAutocomplete = data;
      }
    );
  }

  public typeaheadOnSelect(e: TypeaheadMatch): void {
    this.search();
  }

  search() {
    this.route.queryParams.subscribe(params => {
      let parameters = new URLSearchParams();
      for (var f in params) {
        if (f != "search")
          parameters.set(f, params[f])
      };
      this.router.navigateByUrl('results?search=' + this.searchModel + "&" + parameters.toString());
      console.log(this.searchModel);
    });
  }
}
