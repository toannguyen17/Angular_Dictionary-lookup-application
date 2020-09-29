import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  formTrans: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.formTrans = this.formBuilder.group({
      key: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onCheck(){
    this.router.navigate(['dictionary', this.formTrans.get('key').value]);
    console.log(this.formTrans);
  }

}
