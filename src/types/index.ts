export interface Link {
  id: string;
  description: string;
  url: string;
  postedBy?: UserVerificationRequirement;
  votes?: [Vote];
}

export interface Vote {
  id: string;
  link: Link;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  links: [Link];
}
