import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";
import { Photo } from "../../photo.interface";

@Directive({
  selector: "[photoOwnerOnly]"
})
export class PhotoOwnerOnlyDirective implements OnInit{
  @Input() ownedPhoto: Photo = {
    allowComments: false,
    comments: 0,
    description: "",
    id: 0,
    likes: 0,
    postDate: new Date(),
    url: "",
    userId: 0
  };

  constructor(private element: ElementRef, private rederer: Renderer2, private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if(!user || user.id != this.ownedPhoto.userId) {
        this.rederer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}
