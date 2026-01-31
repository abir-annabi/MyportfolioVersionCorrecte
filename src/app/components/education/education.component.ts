import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationData: any[];
  stages: any[];

  constructor(private dataService: DataService) {
    this.educationData = this.dataService.getPortfolioData().education;
    this.stages = [
      {
        entreprise: "Lumière Transport et Logistique",
        periode: "janvier 2024 - février 2024",
        description: "Stage d'initiation où j'ai développé un site web statique et acquis mes premières expériences en milieu professionnel.",
        competences: ["HTML/CSS", "JavaScript", "Intégration web", "Communication professionnelle"],
        badge: "Initiation"
      },
      {
        entreprise: "Centre National de l'Informatique",
        periode: "janvier 2025 - février 2025",
        description: "Développement backend d'une application web de gestion des décisions municipales avec angular, spring boot et API Platform.",
        competences: ["Angular", "Spring boot", "NGPrime","API Platform", "Postgress", "Gestion de projet"],
        badge: "Perfectionnement"
      }
    ];
  }

  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }
}