import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit{



  constructor(private element: ElementRef, private rederer: Renderer2, private userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.isLogged()){
      this.rederer.setStyle(this.element.nativeElement, 'display', 'none');
    };

  }


}
