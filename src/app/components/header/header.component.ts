import { Component, OnInit } from '@angular/core';
import { UiService } from "../../services/ui.service";
import {Subscription} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Tasks';
  showAddTask: boolean = false;
  subscription!: Subscription;
  addIcon: string = "add_circle";

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value))
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.addIcon = this.showAddTask ? "add_circle" : "remove_circle" ;
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
