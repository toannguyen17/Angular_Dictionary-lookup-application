import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {

  key:string;

  twig: boolean = false;

  translation = new FormControl();

  constructor(
    private dictionaryService: DictionaryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((paramMap) => {
      this.key = paramMap.key;
      let _trans = this.dictionaryService.trans(this.key);
      if (!!_trans)
        this.twig = true;
      else
        this.twig = false;
    });
  }

  ngOnInit(): void {
  }

  getKey(): string {
    return this.key;
  }

  trans(){
    return this.dictionaryService.trans(this.key);
  }


  addTrans(){
    this.twig = true;
    this.dictionaryService.set(this.key, this.translation.value);
    this.translation.setValue('')
  }
}
