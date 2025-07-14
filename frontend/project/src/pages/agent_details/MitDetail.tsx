import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Globe, Radar, Signal, Target } from 'lucide-react';
import { mockAgents } from '../../data/MockData';
import PerformanceTrendsChart from '../../components/PerformanceTrendsChart';

export default function MitDetail() {
  const navigate = useNavigate();
  const agent = mockAgents.find(a => a.id === 'mit')!;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with back button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-primary/20 text-primary border-primary/30">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-primary">{agent.title}</h1>
              <p className="text-xl text-text-secondary">{agent.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {agent.metrics.map((metric, index) => (
            <div key={index} className="bg-surface rounded-xl shadow-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary">{metric.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${metric.type === 'self-generated'
                  ? 'bg-secondary/20 text-secondary'
                  : 'bg-primary/20 text-primary'
                  }`}>
                  {metric.type === 'self-generated' ? 'Self-Generated' : 'Dependent'}
                </span>
              </div>
              <div className="text-3xl font-bold text-text-primary mb-3">{metric.value}</div>
              <p className="text-text-secondary leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Market Intelligence Dashboard */}
        <div className="bg-surface rounded-xl shadow-lg border border-border p-8 mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Market Intelligence Dashboard</h2>

          {/* Performance Trends - Full Width Row */}
          <div className="mb-8">
            <PerformanceTrendsChart metrics={agent.metrics} title="Market Intelligence Performance" />
          </div>

          {/* Market Trends - Full Width Row */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Market Trends</h3>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-center text-text-secondary py-12">
                <Radar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Trend prediction accuracy visualization</p>
                <p className="text-sm mt-2">Market movement forecasting coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Operations */}
        <div className="bg-surface rounded-xl shadow-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Intelligence Operations</h2>

          {/* Recent Activity and Configuration - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Intelligence Activities */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Activities</h3>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">Market trend analysis completed</p>
                      <p className="text-text-secondary text-sm">3 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">12.7K new signals ingested</p>
                      <p className="text-text-secondary text-sm">10 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">Prediction accuracy validated at 91.4%</p>
                      <p className="text-text-secondary text-sm">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligence Configuration */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Configuration</h3>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Data Sources</h4>
                    <p className="text-text-secondary">Social media, News feeds, Industry reports, Competitor analysis</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Analysis Models</h4>
                    <p className="text-text-secondary">Sentiment analysis, Trend detection, Predictive modeling</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Update Frequency</h4>
                    <p className="text-text-secondary">Continuous ingestion with hourly analysis</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Prediction Accuracy</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-text-secondary">91.4% within 30-day window</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
