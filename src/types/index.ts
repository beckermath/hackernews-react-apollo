export interface Link {
  id: string;
  description: string;
  url: string;
  postedBy: User;
  votes: [Vote];
  createdAt: Date;
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
  postedBy: User;
}
