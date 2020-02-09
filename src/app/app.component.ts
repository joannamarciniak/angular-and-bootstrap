import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  title = 'Atmosfera Media';

  constructor(private titleService: Title, private metaService: Meta) {}
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'atmosfera media, budowanie stron www, tworzenie aplikacji internetowych, programowanie'},
      {name: 'description', content: 'Atmosfera Media'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
