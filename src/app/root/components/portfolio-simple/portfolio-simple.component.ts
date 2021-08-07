// tslint:disable: deprecation
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import { ExperineceList } from './../../../../app/shared/constant/experiences.constant';
import { ProjectList } from './../../../../app/shared/constant/projects.constant';

@Component({
  selector: 'app-portfolio-simple',
  templateUrl: './portfolio-simple.component.html',
  styleUrls: ['./portfolio-simple.component.scss']
})
export class PortfolioSimpleComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', { static: false }) sidenav;
  isDefaultOpen = true;
  sideNavMode = 'side';
  isDownloadDisabled = true;
  progressBarAnimate = {
    angular: 0,
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
    web: 0
  };

  projectList = ProjectList;
  experineceList = ExperineceList;

  constructor(
    private mediaObserver: MediaObserver,
    private router: Router
  ) {
    this.mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
        this.sideNavMode = 'over';
        this.isDefaultOpen = false;
      } else {
        this.sideNavMode = 'side';
        this.isDefaultOpen = true;
      }
    });
  }

  closeSideNav(): void {
    this.sidenav.close();
  }

  route(): void {
    this.router.navigate(['/home']);
  }

  downloadAsPdf(): void {
    this.isDownloadDisabled = true;
    html2canvas(document.querySelector(`#cv-body`), { scrollY: -window.scrollY }).then((cvBody) => {
      html2canvas(document.querySelector(`#cv-side`)).then(cvSide => {
        const cvSidePNG = cvSide.toDataURL('image/png');
        const cvBodyPNG = cvBody.toDataURL('image/png');
        const pdf = new jsPDF();

        const fillerCanvas = document.createElement('canvas');
        const ctx = fillerCanvas.getContext('2d');
        fillerCanvas.height = 1000;
        fillerCanvas.width = 1000;
        ctx.fillStyle = '#46454A';
        ctx.fillRect(0, 0, 1000, 1000);

        const cvFillerPNG = fillerCanvas.toDataURL('image/png');

        const pdfWidth = pdf.internal.pageSize.getWidth() - 60;
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(cvFillerPNG, 'JPEG', 0, 200, 60, 200);
        pdf.addImage(cvSidePNG, 'JPEG', 0, 0, 60, 200);
        pdf.addImage(cvBodyPNG, 'JPEG', 60, 0, pdfWidth, pdfHeight);
        pdf.save('riadahmedzakir.pdf');
        this.isDownloadDisabled = false;
      });
    });
  }

  downloadFile(): void {
    window.open('assets/riadahmedzakir.pdf');
  }

  redreict(link): void {
    window.open(link);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.progressBarAnimate.angular = 99;
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
    }, 1000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isDownloadDisabled = false;
    }, 2000);
  }

}
