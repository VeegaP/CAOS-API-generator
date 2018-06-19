import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {

  @Input() fields: any;
  @Input() values: any = {};
  @Input() options: any = {};
  @Input() dialogRef: any;

  constructor() {}

  evaluate(string) {
    return Boolean(eval(string));
  }

  closeDialog() {
     this.dialogRef.close();
  }

  ngOnInit() {
    this.evaluate = this.evaluate.bind(this.values);
  }
}