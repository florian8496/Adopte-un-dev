import {Component, OnInit} from '@angular/core';
import {DeveloppeurService} from '../../../developpeur.service';
import {Developpeur} from '../../../developer.model';

@Component({
  selector: 'app-dev-liste',
  templateUrl: './dev-liste.component.html',
  styleUrls: ['./dev-liste.component.css']
})
export class DevListeComponent implements OnInit {

  oldDescription = '';
  editedDev: Developpeur = null;
  developpeurs: Array<Developpeur>;
  newDeveloppeur: Developpeur;

  constructor(private developpeurService: DeveloppeurService) {
    this.developpeurs = this.developpeurService.getDeveloppeurs();
  }

  editDev(dev: Developpeur): void {
    if (this.editedDev !== null) {
      this.cancelEditDev();
    }
    this.oldDescription = dev.description;
    this.editedDev = dev;
  }

  validateEditDev(): void {
    this.oldDescription = '';
    this.editedDev = null;
  }

  cancelEditDev() {
    this.editedDev.description = this.oldDescription;
    this.editedDev = null;
  }

  setAddDeveloperMode() {
    this.newDeveloppeur = {nom: '', description: '', tjm: 0};
  }

  validateAddDev() {
    this.developpeurService.addDev(this.newDeveloppeur);
    this.newDeveloppeur = null;
  }

  cancelAddDev() {
    this.newDeveloppeur = null;
  }

  ngOnInit() {
  }

}
