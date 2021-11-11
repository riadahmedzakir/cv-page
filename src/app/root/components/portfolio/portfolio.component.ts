// tslint:disable: max-line-length
// tslint:disable: no-string-literal
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { forEach as _forEach } from 'lodash';
import { first } from 'rxjs/operators';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

import GitHubCalendar from 'github-calendar';

import { ExperineceList } from './../../../../app/shared/constant/experiences.constant';
import { ProjectList } from './../../../../app/shared/constant/projects.constant';
import { ToolList } from './../../../../app/shared/constant/tools.constant';
import { RootService } from '../../services/root.service';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.5,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
  };

  socialLinks = {
    github: 'https://github.com/riadahmedzakir',
    linkedin: 'https://www.linkedin.com/in/riad-zakir/',
    facebook: 'https://www.facebook.com/silver.insignia/',
    website: 'https://riadahmedzakir.github.io/',
  };

  progressBarAnimate = {
    angular: 0,
    react: 0,
    javascript: 0,
    htmlCss: 0,
    mongodb: 0,
    node: 0,
    sql: 0,
    automation: 0,
    cCP: 0,
    cJava: 0,
    shell: 0,
    openPhp: 0,
    rest: 0,
    web: 0,
  };

  navigationSelectors = [
    'profileSelector',
    'skillsSelector',
    'toolsSelector',
    'experienceSelector',
    'projectSelector',
    'educationSelector',
  ];

  experineceList = ExperineceList;
  projectList = ProjectList;
  toolList = ToolList;

  constructor(
    private router: Router,
    private rootService: RootService,
    private analyticsService: AnalyticsService
  ) {}

  openSocial(type: string): void {
    window.open(this.socialLinks[type], '_blank').focus();
  }

  redreict(link): void {
    window.open(link);
  }

  route(): void {
    this.router.navigate(['/simple']);
  }

  downloadFile(): void {
    window.open('assets/riadahmedzakir.pdf');
  }

  scroolToSection(type: string): void {
    const element = document.getElementById(type);
    const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  highLightSelectors(type: string): void {
    _forEach(this.navigationSelectors, (nav) => {
      const navigationSelector = document.getElementById(nav);
      if (nav !== type) {
        // navigationSelector.style.color = '#182153';
        navigationSelector.style.borderBottom = 'none';
      } else {
        navigationSelector.style.borderBottom = '2px #182153 solid';
      }
    });
  }

  animateDetailsBox(): void {
    const profileImage = document.querySelector('.profile-image');
    profileImage.classList.add(
      'animate__animated',
      'animate__fadeInLeft',
      'animate__slow'
    );

    const profileDetails = document.querySelector('.profile-details');
    profileDetails.classList.add(
      'animate__animated',
      'animate__fadeInRight',
      'animate__slow'
    );

    const socialMedia = document.querySelector('.profile-social-media');
    socialMedia.classList.add(
      'animate__animated',
      'animate__fadeInUp',
      'animate__slow'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]['intersectionRatio'] >= 0.1) {
          this.highLightSelectors('profileSelector');
        }
      },
      { threshold: [0.1, 0.5] }
    );

    observer.observe(document.querySelector('#profile'));

    setTimeout(() => {
      const profileInnerContainer = document.querySelector(
        '.profile-inner-container'
      );
      profileInnerContainer['style'].boxShadow =
        '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)';
    }, 1000);
  }

  animateExperienceTimeline(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]['intersectionRatio'] >= 0.5) {
          this.highLightSelectors('experienceSelector');
        }

        if (entries[0]['intersectionRatio'] >= 0.1) {
          const activityContents = document
            .getElementById('experience')
            .querySelectorAll('.desc-box-text');
          _forEach(activityContents, (content) => {
            content.classList.add(
              'animate__animated',
              'animate__fadeInRight',
              'animate__slower'
            );
          });
        }
      },
      { threshold: [0.1, 0.5] }
    );

    observer.observe(document.querySelector('#experience'));
  }

  animateProjectTimeline(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]['intersectionRatio'] >= 0.5) {
          this.highLightSelectors('projectSelector');
        }

        if (entries[0]['intersectionRatio'] >= 0.1) {
          const activityContents = document
            .getElementById('project')
            .querySelectorAll('.desc-box-text');
          _forEach(activityContents, (content) => {
            content.classList.add(
              'animate__animated',
              'animate__fadeInRight',
              'animate__slower'
            );
          });
        }
      },
      { threshold: [0.5] }
    );

    observer.observe(document.querySelector('#project'));
  }

  animateToolsCards(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]['intersectionRatio'] >= 0.5) {
          this.highLightSelectors('toolsSelector');
        }

        if (entries[0]['intersectionRatio'] >= 0.1) {
          const activityContents = document
            .getElementById('tools')
            .querySelectorAll('.tool-list-chip');
          _forEach(activityContents, (content) => {
            content.classList.add(
              'animate__animated',
              'animate__fadeIn',
              'animate__slower'
            );
          });
        }
      },
      { threshold: [0.1, 0.5] }
    );

    observer.observe(document.querySelector('#tools'));
  }

  animateSkillBars(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]['intersectionRatio'] >= 0.5) {
          this.highLightSelectors('skillsSelector');
          setTimeout(() => {
            this.progressBarAnimate.angular = 99;
            this.progressBarAnimate.react = 85;
            this.progressBarAnimate.javascript = 95;
            this.progressBarAnimate.htmlCss = 98;
            this.progressBarAnimate.mongodb = 90;
            this.progressBarAnimate.node = 95;
            this.progressBarAnimate.sql = 85;
            this.progressBarAnimate.automation = 87;

            this.progressBarAnimate.cCP = 70;
            this.progressBarAnimate.cJava = 55;
            this.progressBarAnimate.shell = 60;
            this.progressBarAnimate.openPhp = 52;
            this.progressBarAnimate.rest = 91;
            this.progressBarAnimate.web = 89;
          }, 500);
        }
      },
      { threshold: [0.1, 0.5] }
    );

    observer.observe(document.querySelector('#skills'));
  }

  animateEducationCards(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]['intersectionRatio'] >= 0.1) {
          this.highLightSelectors('educationSelector');
        }
      },
      { threshold: [0.1, 0.5] }
    );

    observer.observe(document.querySelector('#education'));
  }

  getGithubActivityGraph(): void {
    // this.rootService
    //   .getGithubActivityGraph()
    //   .pipe(first())
    //   .subscribe((response) => {
    //     console.log(response);
    //   });

    GitHubCalendar('.calendar', 'riadahmedzakir', {
      responsive: true,
      tooltips: true,
    }).then(() => {
      document
        .getElementById('user-activity-overview')
        .querySelectorAll('a')
        .forEach((elem) => {
          const currentLink = elem.getAttribute('href');
          elem.setAttribute('href', 'https://github.com' + currentLink);
          elem.setAttribute('target', '_blank');
        });
    });
  }

  ngOnInit(): void {
    this.analyticsService.trackPage({ title: 'Cv page home' });
  }

  ngAfterViewInit(): void {
    this.animateDetailsBox();
    this.animateExperienceTimeline();
    this.animateProjectTimeline();
    this.animateSkillBars();
    this.animateToolsCards();
    this.animateEducationCards();
    this.getGithubActivityGraph();
  }
}
