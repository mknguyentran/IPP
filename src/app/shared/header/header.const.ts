export const HEADER_TABS: HeaderTab[] = [
  {
    name: 'aboutIPP',
    routerLink: '/about',
  },
  {
    name: 'ieltsCourses',
    routerLink: '/courses',
  },
  {
    name: 'review',
    routerLink: '/review',
  },
  {
    name: 'library',
    routerLink: '/library',
  },
  {
    name: 'appoinment',
    routerLink: '/apointment',
  },
  {
    name: 'IPPSystem',
    routerLink: '/system',
  },
];

export interface HeaderTab {
  name: string;
  routerLink: string;
}
