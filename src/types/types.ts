export type Topic = {
  id: string,
  label: string,
  volume: number,
  sentimentScore: number,
  sentiment: Sentiment,
};

export type Sentiment = {
  negative: number,
  neutral: number,
  positive: number,
};

