import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-review',
  template: '',
})
export abstract class BaseComponent implements OnInit, OnDestroy {
  protected readonly destroy$ = new Subject();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  protected async checkImage(
    url: string,
    callback: (isExist: boolean) => void
  ): Promise<void> {
    const img = new Image();
    img.onload = () => {
       callback(true);
    };
    img.onerror = () => {
      callback(false);
    };
    img.src = url;
  }
}
