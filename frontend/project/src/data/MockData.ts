import { Agent } from '../types';

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
        description: 'Total Revenue from Campaign / Total Spend on Campaign'
      },
      {
        name: 'Customer Acquisition Cost (CAC)',
        value: '$247',
        type: 'dependent',
        description: 'Total Spend / Number of New Customers'
      },
      {
        name: 'Revenue Attribution Accuracy',
        value: '92.7%',
        type: 'self-generated',
        description: '(Correctly Attributed Revenue) / (Total Revenue Tracked)'
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
        description: 'Count of raw, unique external signals ingested per period'
      },
      {
        name: 'Lift from MIT-Informed Campaigns',
        value: '+24%',
        type: 'dependent',
        description: '(Performance of MIT-backed campaigns - Baseline performance) / Baseline performance'
      },
      {
        name: 'Market Trend Prediction Accuracy',
        value: '91.4%',
        type: 'self-generated',
        description: 'Percentage of market trend predictions that proved accurate within 30 days'
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
        description: 'Number of new or updated internal workflows deployed'
      },
      {
        name: 'Time Saved via Automation',
        value: '127 hrs',
        type: 'dependent',
        description: 'Estimated hours saved based on usage of Chad-built workflows by reps or agents'
      },
      {
        name: 'Code Quality Score',
        value: '96.2%',
        type: 'self-generated',
        description: 'Automated code quality assessment based on best practices, testing coverage, and maintainability'
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
        description: '(Total Interactions: opens, clicks, replies, etc.) / (Total Outbound Touches Delivered)'
      },
      {
        name: 'Engagement Lift from IMA-Qualified Audiences',
        value: '+31%',
        type: 'dependent',
        description: '(Engagement Rate on IMA Leads - Engagement Rate on Non-IMA Leads) / Engagement Rate on Non-IMA Leads'
      },
      {
        name: 'Channel Performance Distribution',
        value: 'Email: 22%, SMS: 15%, Social: 12%, Ads: 8%',
        type: 'self-generated',
        description: 'Engagement Rate by Channel (Email, SMS, Social, Ads) with Volume Weighting'
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
        description: '(Number of Correctly Labeled Prospects) / (Total Prospects Scored by IMA)'
      },
      {
        name: 'Engagement Rate of IMA-Qualified Leads',
        value: '42.1%',
        type: 'dependent',
        description: '(Total Engaged IMA Leads) / (Total IMA Leads Touched by Outreach)'
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
        description: '(Number of Outreach Strategies Tested) / (Target Number of Variants per Segment)'
      },
      {
        name: 'Engagement Rate Across Chip Variants',
        value: '22.7%',
        type: 'dependent',
        description: '(Total Engaged Recipients) / (Total Messages Sent Using Chip\'s Content)'
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
        description: '(Conversions from PAT-Triggered Outreach) / (Total PAT Triggers Executed)'
      },
      {
        name: 'Conversion Lift Over Non-PAT Sources',
        value: '+38%',
        type: 'dependent',
        description: '(Conversion Rate of PAT Leads - Conversion Rate of Non-PAT Leads) / Conversion Rate of Non-PAT Leads'
      }
    ]
  }
];

export const users = [
  { username: 'brad', password: 'password' },
  { username: 'andrew', password: 'password' },
  { username: 'jim', password: 'password' }
];