import { MastodonApiData } from "@/components/widgets/MastodonWidget";

export interface WidgetProps {
  id: string;
  type: string;
  variant: number;
  size: WidgetSize;
  data: WidgetData;
}

export interface WidgetSize {
  cols: number; rows: number;
}

export interface MastodonData {
  username: string;
  instance: string;
}

export interface PixelfedData {
  username: string;
  instance: string;
}

export interface LemmyWidgetData {
  username: string;
  instance: string;
}

export interface BuymeacoffeeData {
  username: string;
}

export interface TextData {
  text: string;
}

export interface GitHubData {
  username: string;
}

export interface TimezoneData {
  timezone: string;
}

export interface LiberaPayData {
  username: string;
}

export interface ImageWidgetData {
  url: string;
}

export interface NoteWidgetData {
  note: string;
}

export interface EmptyWidgetData {

}

export interface GithubApiData {
  username: string;
  name: string;
  avatar: string;
  url: string;
  location: string;
  followers: number;
  following: number;
  publicRepos: number;
  contributions: ContributionsCollection
}

export interface ContributionsCollection {
  colors: string[];
  totalContributions: number;
  weeks: ContributionsWeek[];
}

export interface ContributionsWeek {
  contributionDays: ContributionDay[];
  firstDay: string;
}

export interface ContributionDay {
  color: string;
  contributionCount: number;
  date: string;
  weekday: number;
}

export type WidgetData = MastodonData | GitHubData | ImageWidgetData | LiberaPayData | TextData | PixelfedData | BuymeacoffeeData | EmptyWidgetData | NoteWidgetData;
export type WidgetApiData = MastodonApiData | GithubApiData