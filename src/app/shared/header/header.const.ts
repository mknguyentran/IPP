export const HEADER_FIELDS: HeaderField[] = [
  {
    name: 'aboutIPP',
    routerLink: '/',
  },
  {
    name: 'ieltsCourses',
    routerLink: '/',
  },
  {
    name: 'review',
    routerLink: '/',
  },
  {
    name: 'library',
    routerLink: '/',
  },
  {
    name: 'appoinment',
    routerLink: '/',
  },
  {
    name: 'IPPSystem',
    routerLink: '/',
  },
];

export interface HeaderField {
  name: string;
  routerLink: string;
}
