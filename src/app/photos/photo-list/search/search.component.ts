import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit { hasMore = true;
  
  @Output() onTyping = new EventEmitter<string>();
  @Input() filter: string = '';
  debounce : Subject<string> = new Subject<string>();
  constructor(
    ) { }

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.onTyping.emit(filter));
    
  }
  onKeyUp(event: Event) {
    let filter = (event.target as HTMLInputElement).value;
    this.debounce.next(filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
