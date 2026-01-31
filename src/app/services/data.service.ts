import { Injectable } from '@angular/core';
import { Skill, projets, Education, SocialLink, PortfolioData } from '../models/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

getProgressColor(level: number): string {
  if (level >= 80) return 'linear-gradient(to right, #ff7eb9, #ff65a3)';
  if (level >= 60) return 'linear-gradient(to right, #7afcff, #65fffa)';
  return 'linear-gradient(to right, #feff9c, #fff740)';
}

getLanguageProgress(level: string): string {
  const progressMap: { [key: string]: string } = {
    'Natif': '100%',
    'Courant': '85%',
    'Intermédiaire': '70%',
    'Notions': '40%'
  };
  return progressMap[level] || '50%';
}

  getPortfolioData(): PortfolioData {
    return {
      name: 'Abir Annabi',
      title: 'Étudiante en dernière année de licence en Développement des Systèmes d\'Information',
      location: 'Bouargoub, Nabeul',
      email: 'abiramabil5@gmail.com',
      aboutMe: "Étudiante en dernière année de licence en Développement des Systèmes d'Information à l'ISET de Radès, passionnée par le développement web et mobile. Je me spécialise dans le développement full-stack avec une expertise particulière en technologies Java, Angular, et développement mobile Android.",
      about: 'Étudiante passionnée en Développement des Systèmes d\'Information (DSI), actuellement en dernière année à l\'ISET Radès, classée parmi les premières de la promotion. Avec une solide formation en technologies web, mobiles et bases de données, j\'ai acquis une expérience pratique à travers plusieurs stages dans des environnements professionnels réels. Curieuse, autonome et engagée, j\'ai développé des compétences avancées en développement full-stack, intelligence artificielle et business intelligence, tout en étant active dans des associations et clubs techniques.',
      skills: [
        { name: 'Java', level: 85, category: 'backend' },
        { name: 'JavaEE', level: 80, category: 'backend' },
        { name: 'Spring Boot', level: 85, category: 'backend' },
        { name: 'Kotlin', level: 75, category: 'mobile' },
        { name: 'Android', level: 75, category: 'mobile' },
        { name: 'Angular', level: 80, category: 'frontend' },
        { name: 'React', level: 70, category: 'frontend' },
        { name: 'PHP', level: 75, category: 'backend' },
        { name: 'Symfony', level: 70, category: 'backend' },
        { name: 'Python', level: 80, category: 'backend' },
        { name: 'C', level: 75, category: 'backend' },
        { name: 'JavaScript', level: 85, category: 'frontend' },
        { name: 'HTML/CSS', level: 90, category: 'frontend' },
        { name: 'Flutter', level: 65, category: 'mobile' },
        { name: 'NextJS', level: 65, category: 'frontend' },
        { name: 'SQL', level: 85, category: 'database' },
        { name: 'PostgreSQL', level: 80, category: 'database' },
        { name: 'MySQL', level: 80, category: 'database' },
        { name: 'MongoDB', level: 70, category: 'database' },
        { name: 'Power BI', level: 70, category: 'tools' },
        { name: 'Visual Studio', level: 75, category: 'tools' },
        { name: 'Git/GitHub', level: 80, category: 'tools' },
        { name: 'Docker', level: 65, category: 'tools' },
        { name: 'Kubernetes', level: 60, category: 'tools' },
        { name: 'UML', level: 75, category: 'tools' },
        { name: 'Jira', level: 70, category: 'tools' },
        { name: 'MATLAB', level: 65, category: 'tools' },
        { name: 'Postman', level: 75, category: 'tools' },
        { name: 'Android Studio', level: 75, category: 'tools' },
        { name: 'Eclipse', level: 70, category: 'tools' }
      ],
      experiences: [
        {
          company: 'CNI (Centre National d\'Informatique)',
          position: 'Stagiaire Développeuse',
          period: 'Janv. - Fév. 2025',
          description: [
            'Développement du back-office d\'une application de gestion des décisions municipales',
            'Mise en place d\'une authentification sécurisée à trois niveaux : mot de passe, reCAPTCHA, validation par e-mail',
            'Technologies : Spring Boot, Angular, PostgreSQL'
          ],
          technologies: ['Spring Boot', 'Angular', 'PostgreSQL']
        },
        {
          company: 'Lumière Logistique & Transport',
          position: 'Stagiaire Développeuse',
          period: 'Janv. - Fév. 2024',
          description: [
            'Conception et développement d\'un site vitrine statique et découverte de l\'environnement professionnel'
          ],
          technologies: ['HTML', 'CSS', 'JavaScript']
        }
      ],
      education: [
        {
          institution: 'ISET Radès',
          degree: 'Licence en Développement des Systèmes d\'Information',
          period: '2023 – Aujourd\'hui',
          description: 'Classée parmi les premières de la promotion'
        },
        {
          institution: 'Lycée Secondaire de Bouargoub, Nabeul',
          degree: 'Baccalauréat en Sciences Mathématiques',
          period: '2023',
          description: ''
        }
      ],
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/abir-annabi', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abir-annabi', icon: 'linkedin' }
      ],
      languages: [
        { name: 'Arabe', level: 'Natif' },
        { name: 'Français', level: 'Courant' },
        { name: 'Anglais', level: 'Courant' },
        { name: 'Allemand', level: 'Notions' }
      ]
    };
  }
}