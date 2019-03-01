import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      
    })

  }

  ngOnInit() {
  }

}
