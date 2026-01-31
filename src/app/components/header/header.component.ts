import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;
  profileData: any;

  constructor(private dataService: DataService) {
    this.profileData = this.dataService.getPortfolioData();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  scrollTo(section: string, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  downloadCV(event: Event) {
    event.preventDefault();
    
    // Méthode 1: Lien direct vers le fichier PDF
    // window.open('/assets/cv/CV_Abir_Annabi.pdf', '_blank');
    
    // Méthode 2: Téléchargement automatique
    const link = document.createElement('a');
    link.href = '/cv/cv 2025.pdf';
    link.download = 'CV_Abir_Annabi.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  }
}