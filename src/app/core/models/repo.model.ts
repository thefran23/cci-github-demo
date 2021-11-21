export interface Repo {
  id: number;
  html_url: string;
  name: string;
  full_name: string;
  private: false;
  description: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  open_issues_count: number;
  owner: { avatar_url: string };
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  title: string;
  state: 'open' | 'closed';
}
