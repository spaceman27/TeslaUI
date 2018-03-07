import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

export interface ProjectInterface {
  name: string;
  imageUrl: string;
  component: string;
  source: string[];
}
export class ProjectModel implements ProjectInterface {
  constructor(public name: string, public imageUrl: string, public component: string, public source: string[])  {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lstProject: ProjectModel[];

  constructor() {
    this.lstProject = [
      new ProjectModel('Flight UI Packs', 'assets/centric.jpg', '/flight', ['https://www.pinterest.com/pin/729864683334583637/']),
      new ProjectModel('I Love Veggie', 'assets/iloveveggie.jpg', '', ['https://www.pinterest.com/pin/456763587197539948/']),
      new ProjectModel('Disney Life', 'assets/disneylife.jpg', '', ['https://www.pinterest.com/pin/483503709984500652/']),
      new ProjectModel('Sign In 3 Packs', 'assets/signin.jpg', '',
                        ['https://www.pinterest.com/pin/568790627925499096/',
                        'https://www.pinterest.com/pin/419608890260629056/',
                        'https://www.pinterest.com/pin/444378688224896820/'
                      ]),
      new ProjectModel('Cooking Manual', 'assets/cooking.jpg', '', ['https://www.pinterest.com/pin/133700682659582280/']),
      new ProjectModel('Social Network Profile', 'assets/social.jpg', '', ['https://dcrazed.com/wp-content/uploads/2016/07/Flat-Design-UI-Components.jpg']),

    ];

  }

  ngOnInit() {

  }

}
