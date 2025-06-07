import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss'],
})
export class ErrorHandlerComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Input() errorMessage: string =
    'An unexpected error occurred. Please try again later.';

  constructor() {}

  ngOnInit() {}

  goToHome() {
    window.location.href = '/';
  }
}
