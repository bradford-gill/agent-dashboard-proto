import { Agent, TimeSeriesData, DataPoint } from '../types';

// Helper function to generate mock time series data
const generateTimeSeriesData = (baseValue: number, volatility: number = 0.1): TimeSeriesData => {
  const generateDataPoints = (days: number, interval: number): DataPoint[] => {
    const points: DataPoint[] = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - (i * interval));

      // Generate realistic fluctuations around the base value
      const randomFactor = 1 + (Math.random() - 0.5) * volatility * 2;
      const trendFactor = 1 + (Math.random() - 0.5) * 0.05; // Small trend
      const value = baseValue * randomFactor * trendFactor;

      points.push({
        date: date.toISOString().split('T')[0],
        value: Math.round(value * 100) / 100
      });
    }

    return points;
  };

  return {
    daily: generateDataPoints(30, 1),    // Last 30 days
    weekly: generateDataPoints(12, 7),   // Last 12 weeks
    monthly: generateDataPoints(12, 30)  // Last 12 months
  };
};

// Helper function to parse metric values to numbers for chart data
const parseMetricValue = (value: string): number => {
  // Remove common prefixes/suffixes and convert to number
  const cleaned = value.replace(/[$%+,K]/g, '').replace('x', '').replace(' hrs', '');
  const num = parseFloat(cleaned);

  // Handle special cases
  if (value.includes('K')) return num * 1000;
  if (value.includes('%')) return num;
  if (value.includes('x')) return num;
  if (value.includes('hrs')) return num;
  if (value.includes('$')) return num;

  return num;
};

export const mockAgents: Agent[] = [
  {
    id: 'fin',
    title: 'FIN',
    subtitle: 'Finance Automation',
    metrics: [
      {
        name: 'Total ROI per Campaign',
        value: '3.4x',
        type: 'self-generated',
        description: 'Total Revenue from Campaign / Total Spend on Campaign',
        timeSeriesData: generateTimeSeriesData(3.4, 0.15)
      },
      {
        name: 'Customer Acquisition Cost (CAC)',
        value: '$247',
        type: 'dependent',
        description: 'Total Spend / Number of New Customers',
        timeSeriesData: generateTimeSeriesData(247, 0.12)
      },
      {
        name: 'Revenue Attribution Accuracy',
        value: '92.7%',
        type: 'self-generated',
        description: '(Correctly Attributed Revenue) / (Total Revenue Tracked)',
        timeSeriesData: generateTimeSeriesData(92.7, 0.08)
      }
    ]
  },
  {
    id: 'mit',
    title: 'MIT',
    subtitle: 'Market Intelligence',
    metrics: [
      {
        name: 'Signal Ingestion Volume',
        value: '12.7K',
        type: 'self-generated',
        description: 'Count of raw, unique external signals ingested per period',
        timeSeriesData: generateTimeSeriesData(12700, 0.20)
      },
      {
        name: 'Lift from MIT-Informed Campaigns',
        value: '+24%',
        type: 'dependent',
        description: '(Performance of MIT-backed campaigns - Baseline performance) / Baseline performance',
        timeSeriesData: generateTimeSeriesData(24, 0.25)
      },
      {
        name: 'Market Trend Prediction Accuracy',
        value: '91.4%',
        type: 'self-generated',
        description: 'Percentage of market trend predictions that proved accurate within 30 days',
        timeSeriesData: generateTimeSeriesData(91.4, 0.06)
      }
    ]
  },
  {
    id: 'chad',
    title: 'Chad',
    subtitle: 'Developer Catalyst',
    metrics: [
      {
        name: 'Workflow Deployment Count',
        value: '47',
        type: 'self-generated',
        description: 'Number of new or updated internal workflows deployed',
        timeSeriesData: generateTimeSeriesData(47, 0.30)
      },
      {
        name: 'Time Saved via Automation',
        value: '127 hrs',
        type: 'dependent',
        description: 'Estimated hours saved based on usage of Chad-built workflows by reps or agents',
        timeSeriesData: generateTimeSeriesData(127, 0.18)
      },
      {
        name: 'Code Quality Score',
        value: '96.2%',
        type: 'self-generated',
        description: 'Automated code quality assessment based on best practices, testing coverage, and maintainability',
        timeSeriesData: generateTimeSeriesData(96.2, 0.05)
      }
    ]
  },
  {
    id: 'mac',
    title: 'MAC',
    subtitle: 'Multi-Channel Activator',
    metrics: [
      {
        name: 'Outbound Engagement Rate',
        value: '18.3%',
        type: 'self-generated',
        description: '(Total Interactions: opens, clicks, replies, etc.) / (Total Outbound Touches Delivered)',
        timeSeriesData: generateTimeSeriesData(18.3, 0.15)
      },
      {
        name: 'Engagement Lift from IMA-Qualified Audiences',
        value: '+31%',
        type: 'dependent',
        description: '(Engagement Rate on IMA Leads - Engagement Rate on Non-IMA Leads) / Engagement Rate on Non-IMA Leads',
        timeSeriesData: generateTimeSeriesData(31, 0.22)
      },
      {
        name: 'Channel Performance Distribution',
        value: 'Email: 22%, SMS: 15%, Social: 12%, Ads: 8%',
        type: 'self-generated',
        description: 'Engagement Rate by Channel (Email, SMS, Social, Ads) with Volume Weighting',
        timeSeriesData: generateTimeSeriesData(22, 0.18) // Using email as primary metric
      }
    ]
  },
  {
    id: 'ima',
    title: 'IMA',
    subtitle: 'Intent Modeling Agent',
    metrics: [
      {
        name: 'Intent Classification Accuracy',
        value: '89.2%',
        type: 'self-generated',
        description: '(Number of Correctly Labeled Prospects) / (Total Prospects Scored by IMA)',
        timeSeriesData: generateTimeSeriesData(89.2, 0.08)
      },
      {
        name: 'Engagement Rate of IMA-Qualified Leads',
        value: '42.1%',
        type: 'dependent',
        description: '(Total Engaged IMA Leads) / (Total IMA Leads Touched by Outreach)',
        timeSeriesData: generateTimeSeriesData(42.1, 0.16)
      }
    ]
  },
  {
    id: 'chip',
    title: 'Chip',
    subtitle: 'Copywriter Bot',
    metrics: [
      {
        name: 'Message Variant Training Coverage',
        value: '94%',
        type: 'self-generated',
        description: '(Number of Outreach Strategies Tested) / (Target Number of Variants per Segment)',
        timeSeriesData: generateTimeSeriesData(94, 0.10)
      },
      {
        name: 'Engagement Rate Across Chip Variants',
        value: '22.7%',
        type: 'dependent',
        description: '(Total Engaged Recipients) / (Total Messages Sent Using Chip\'s Content)',
        timeSeriesData: generateTimeSeriesData(22.7, 0.14)
      }
    ]
  },
  {
    id: 'pat',
    title: 'PAT',
    subtitle: 'Trigger Engine',
    metrics: [
      {
        name: 'Trigger-to-Conversion Rate',
        value: '15.8%',
        type: 'self-generated',
        description: '(Conversions from PAT-Triggered Outreach) / (Total PAT Triggers Executed)',
        timeSeriesData: generateTimeSeriesData(15.8, 0.18)
      },
      {
        name: 'Conversion Lift Over Non-PAT Sources',
        value: '+38%',
        type: 'dependent',
        description: '(Conversion Rate of PAT Leads - Conversion Rate of Non-PAT Leads) / Conversion Rate of Non-PAT Leads',
        timeSeriesData: generateTimeSeriesData(38, 0.20)
      }
    ]
  }
];

export const users = [
  { username: 'brad', password: 'password' },
  { username: 'andrew', password: 'password' },
  { username: 'jim', password: 'password' }
];