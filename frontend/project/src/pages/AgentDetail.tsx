import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Cog, MessageSquare, Brain, PenTool, Zap, DollarSign } from 'lucide-react';
import { mockAgents } from '../data/MockData';

const getAgentIcon = (agentId: string) => {
  switch (agentId) {
    case 'fin':
      return <DollarSign className="w-8 h-8" />;
    case 'mit':
      return <TrendingUp className="w-8 h-8" />;
    case 'chad':
      return <Cog className="w-8 h-8" />;
    case 'mac':
      return <Users className="w-8 h-8" />;
    case 'ima':
      return <Brain className="w-8 h-8" />;
    case 'chip':
      return <PenTool className="w-8 h-8" />;
    case 'pat':
      return <Zap className="w-8 h-8" />;
    default:
      return <Cog className="w-8 h-8" />;
  }
};

const getAgentColor = (agentId: string) => {
  switch (agentId) {
    case 'fin':
      return 'bg-secondary/20 text-secondary border-secondary/30';
    case 'mit':
      return 'bg-primary/20 text-primary border-primary/30';
    case 'chad':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'mac':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'ima':
      return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    case 'chip':
      return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
    case 'pat':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    default:
      return 'bg-text-secondary/20 text-text-secondary border-text-secondary/30';
  }
};

export default function AgentDetail() {
  const { agentId } = useParams<{ agentId: string }>();
  const navigate = useNavigate();
  
  const agent = mockAgents.find(a => a.id === agentId);
  
  if (!agent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Agent Not Found</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const iconColorClass = getAgentColor(agent.id);

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
            <div className={`p-3 rounded-xl ${iconColorClass}`}>
              {getAgentIcon(agent.id)}
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
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  metric.type === 'self-generated'
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

        {/* Detailed Information Section */}
        <div className="bg-surface rounded-xl shadow-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Detailed Analytics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance Trends */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Performance Trends</h3>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="text-center text-text-secondary py-12">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Performance trend charts would be displayed here</p>
                  <p className="text-sm mt-2">Historical data visualization coming soon</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Activity</h3>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">Metric calculation completed</p>
                      <p className="text-text-secondary text-sm">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">Data sync with external systems</p>
                      <p className="text-text-secondary text-sm">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-text-primary font-medium">Performance threshold alert</p>
                      <p className="text-text-secondary text-sm">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Agent Configuration</h3>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Operational Status</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-text-secondary">Active</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Last Updated</h4>
                  <p className="text-text-secondary">Today at 3:42 PM</p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Data Sources</h4>
                  <p className="text-text-secondary">{agent.metrics.length} active metrics</p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Update Frequency</h4>
                  <p className="text-text-secondary">Real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
