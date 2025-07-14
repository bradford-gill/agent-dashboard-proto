import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, DollarSign, BarChart3, PieChart, Calculator } from 'lucide-react';
import { mockAgents } from '../../data/MockData';
import PerformanceTrendsChart from '../../components/PerformanceTrendsChart';

export default function FinDetail() {
  const navigate = useNavigate();
  const agent = mockAgents.find(a => a.id === 'fin')!;

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
            <div className="p-3 rounded-xl bg-secondary/20 text-secondary border-secondary/30">
              <DollarSign className="w-8 h-8" />
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

        {/* Finance-Specific Analytics */}
        <div className="bg-surface rounded-xl shadow-lg border border-border p-8 mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Financial Analytics Dashboard</h2>

          {/* Performance Trends - Full Width Row */}
          <div className="mb-8">
            <PerformanceTrendsChart metrics={agent.metrics} title="Financial Performance Trends" />
          </div>

          {/* Cost Analysis - Full Width Row */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Cost Analysis</h3>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="text-center text-text-secondary py-12">
                <PieChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Customer acquisition cost breakdown</p>
                <p className="text-sm mt-2">Spend distribution analysis coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Operations */}
        <div className="bg-surface rounded-xl shadow-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Financial Operations</h2>

          {/* Recent Activity and Configuration - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Financial Activities */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Activities</h3>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">ROI calculation completed for Q4 campaigns</p>
                      <p className="text-text-secondary text-sm">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">Revenue attribution model updated</p>
                      <p className="text-text-secondary text-sm">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">CAC threshold alert triggered</p>
                      <p className="text-text-secondary text-sm">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Configuration */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Configuration</h3>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Attribution Model</h4>
                    <p className="text-text-secondary">Multi-touch attribution with 7-day lookback</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Revenue Sources</h4>
                    <p className="text-text-secondary">CRM, Payment processors, Ad platforms</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Update Frequency</h4>
                    <p className="text-text-secondary">Real-time with hourly reconciliation</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Accuracy Rate</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-text-secondary">92.7% attribution accuracy</span>
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
