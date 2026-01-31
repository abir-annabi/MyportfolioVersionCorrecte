import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];
  skillCategories: string[] = [];
  languages: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const portfolioData = this.dataService.getPortfolioData();
    this.skills = portfolioData.skills;
    this.languages = portfolioData.languages;
    this.skillCategories = [...new Set(this.skills.map(skill => skill.category))];
  }

  getSkillsByCategory(category: string) {
    return this.skills.filter(skill => skill.category === category);
  }

  getCategoryName(category: string): string {
    const categoryNames: { [key: string]: string } = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'mobile': 'Mobile',
      'database': 'Base de données',
      'tools': 'Outils'
    };
    return categoryNames[category] || category;
  }

  getCategoryIcon(category: string): string {
    const categoryIcons: { [key: string]: string } = {
      'frontend': 'fas fa-paint-brush',
      'backend': 'fas fa-server',
      'mobile': 'fas fa-mobile-alt',
      'database': 'fas fa-database',
      'tools': 'fas fa-tools'
    };
    return categoryIcons[category] || 'fas fa-star';
  }

  getAverageSkillLevel(category: string): number {
    const categorySkills = this.getSkillsByCategory(category);
    const average = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
    return Math.round(average);
  }

  getSkillLevelClass(level: number): string {
    if (level >= 80) return 'expert';
    if (level >= 60) return 'advanced';
    return 'intermediate';
  }

  getAllTechnologies() {
    return this.skills;
  }

  getTechSize(level: number): number {
    // Retourne une taille basée sur le niveau de compétence
    if (level >= 80) return 1.2;
    if (level >= 60) return 1.1;
    return 1;
  }

  getTechIcon(techName: string): string {
    const techIcons: { [key: string]: string } = {
      'Java': 'fab fa-java',
      'JavaEE': 'fab fa-java',
      'Spring Boot': 'fas fa-leaf',
      'Kotlin': 'fas fa-mobile-alt',
      'Android': 'fab fa-android',
      'Angular': 'fab fa-angular',
      'React': 'fab fa-react',
      'PHP': 'fab fa-php',
      'Symfony': 'fab fa-symfony',
      'Python': 'fab fa-python',
      'C': 'fas fa-code',
      'JavaScript': 'fab fa-js-square',
      'HTML/CSS': 'fab fa-html5',
      'Flutter': 'fas fa-mobile-alt',
      'NextJS': 'fab fa-react',
      'SQL': 'fas fa-database',
      'PostgreSQL': 'fas fa-database',
      'MySQL': 'fas fa-database',
      'MongoDB': 'fas fa-database',
      'Power BI': 'fas fa-chart-bar',
      'Visual Studio': 'fas fa-code',
      'Git/GitHub': 'fab fa-git-alt',
      'Docker': 'fab fa-docker',
      'Kubernetes': 'fas fa-dharmachakra',
      'UML': 'fas fa-project-diagram',
      'Jira': 'fab fa-jira',
      'MATLAB': 'fas fa-calculator',
      'Postman': 'fas fa-paper-plane',
      'Android Studio': 'fab fa-android',
      'Eclipse': 'fas fa-code'
    };
    return techIcons[techName] || 'fas fa-code';
  }

  getLanguageProgress(level: string): number {
    const progressMap: { [key: string]: number } = {
      'Natif': 100,
      'Courant': 85,
      'Intermédiaire': 70,
      'Notions': 40
    };
    return progressMap[level] || 50;
  }

  getLanguageFlag(language: string): string {
    const flags: { [key: string]: string } = {
      'Arabe': '🇹🇳',
      'Français': '🇫🇷',
      'Anglais': '🇬🇧',
      'Allemand': '🇩🇪'
    };
    return flags[language] || '🌐';
  }
}