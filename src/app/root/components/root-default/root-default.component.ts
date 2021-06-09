import { Component, OnInit } from '@angular/core';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss']
})
export class RootDefaultComponent implements OnInit {
  isDefaultOpen = true;
  sideNavMode = 'side';
  isDownloadDisabled = false;
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

  projectList = [
    {
      Title: 'Private Wealth Solution',
      Description: [
        'Developed a digital partner portal for a Swiss-based Private Wealth Solutions company, creating a paperless system for partner banks. Solutions included digital forms, e-signature implementations, document management, communications etc.',
        'It also extend to complex Customer relationship management(CRM) digital solution for both business to business (b2b) and business to consumer (b2c).'
      ],
      Icon: 'add_business',
      Link: ''
    },
    {
      Title: 'myKachaBazar - A eCommerce solution',
      Description: [
        'A ecommerce website using angularJS and node as backend to desing rest-api microservices, which is fully customizatble by end user.'
      ],
      Icon: 'shopping_cart',
      Link: 'https://mykachabazar.com/'
    },
    {
      Title: 'Genshin Impact Tools',
      Description: [
        'A hobby project I\'m currentyl working on built with latest angular version. The idea is to create tool to make my life easier with the game.',
        'The full desciption of the project and it\'s future plan is listed on the website.'
      ],
      Icon: 'sports_esports',
      Link: 'https://riadahmedzakir.github.io/genshin-impact-tool/'
    },
    {
      Title: 'Shopzoon - A eCommerce Solution',
      Description: [
        'A eCommerce website using Java, JSP, JSON, Javascript & Hibernate technology.',
        'This is a univeristy project that focused on learning the technologies mentioned.'
      ],
      Icon: 'shopping_cart',
      Link: 'https://github.com/riadahmedzakir/ShopZoon'
    },
    {
      Title: 'E-Shop - A eCoomerce Solution',
      Description: [
        'E-shop was desinged following MVC pattern with PHP, Javascript, HTML & CSS.',
        'This is a univeristy project that focused on learning the technologies mentioned.'
      ],
      Icon: 'shopping_cart',
      Link: 'https://github.com/riadahmedzakir/E-Shop_eCommerce'
    },
    {
      Title: 'Task manager',
      Description: [
        'A simple task managment system using Javascript & Bootstrap.'
      ],
      Icon: 'task',
      Link: 'https://riadahmedzakir.github.io/To-Do-List/'
    },
    {
      Title: 'Dx-Ball',
      Description: [
        'A simple android game developed to learn the basics of embedded technology.'
      ],
      Icon: 'smart_toy',
      Link: 'https://github.com/riadahmedzakir/DxBall'
    },
    {
      Title: 'Break The Line',
      Description: [
        'A simple game designed in the copcept of BreakLiner (Android game) using openGL'
      ],
      Icon: 'show_chart',
      Link: 'https://github.com/riadahmedzakir/Break_The_Line'
    },
  ];

  experineceList = [
    {
      Title: 'Full stack development',
      Description: [
        'Determine business needs and desires by gathering and analyzing information from clients, partners, sales and operations, deliver user-centric results and effectively communicate my insights and plans to cross-functional team members and management',
        'Managed projects from concept to design, design to prototype (UI/UX ready), technical implementation, maintenance and promotion of the applications, monitor deliverables and ensure timely completion',
        'Developed and deployed restul api and mircoservices.',
        'Developed and deployed eCommerce web application.',
        'Manged the project for maitenece and test automation from both SQA and Developer perspective.',
        'Fimiliar with deploment process and source control for prduction ready application.'
      ],
      Icon: 'add_business',
      Link: ''
    },
    {
      Title: 'SELISE rockin\' software - Software Engineer',
      Description: [
        'March 2018 - Present'
      ],
      Icon: 'api',
      Link: ''
    },
    {
      Title: 'SELISE rockin\' software - Intern',
      Description: [
        'December 2017 - February 2018'
      ],
      Icon: 'hail',
      Link: ''
    },
  ];

  constructor() { }

  closeSideNav(): void {

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

}
