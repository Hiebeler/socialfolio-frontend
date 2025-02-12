export interface WidgetProps {
  id: string;
  type: string;
  variant: number;
  size: { cols: number; rows: number };
  data: WidgetData;
}

export interface MastodonData {
  username: string;
  instance: string;
}

export interface GitHubData {
  username: string;
}

export interface ImageWidgetData {
  url: string;
}

export type WidgetData = MastodonData | GitHubData | ImageWidgetData;