export interface PillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tag: string;
}

export interface RoadmapStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  impactMetric: string;
}

export interface ValueArgument {
  id: string;
  number: string;
  title: string;
  description: string;
  metric: string;
}

export interface TrackMetric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

export interface StrategicLeadForm {
  name: string;
  company: string;
  revenue: string;
  bottleneck: string;
  whatsapp: string;
  email: string;
}
