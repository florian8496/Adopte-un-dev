import {Developpeur} from './developer.model';

export class DeveloppeurService {
  private developpeurs: Array<Developpeur> = [
    {
      nom: 'Wolfang Amadeus Mozart',
      description: 'Wolfgang est un développeur J2EE avec 15 ans d\'expérience',
      tjm: 550
    },
    {
      nom: 'Théo',
      description: 'Théo est un magicien du CSS',
      tjm: 450
    },
    {
      nom: 'Lucas',
      description: 'Lucas est débutant en PHP',
      tjm: 350
    },
    {
      nom: 'Téva',
      description: 'Téva est un expert .NET reconnu',
      tjm: 750
    },
    {
      nom: 'Clément',
      description: 'Clément est un vrai pro d\'Angular JS',
      tjm: 550
    }
  ];

  getDeveloppeurs(): Array<Developpeur> {
    return this.developpeurs;
  }

  addDev(newDeveloppeur: Developpeur) {
    this.developpeurs.push(newDeveloppeur);
  }
}
