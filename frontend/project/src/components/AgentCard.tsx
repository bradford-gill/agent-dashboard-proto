import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Agent } from '../types';
import { TrendingUp, Users, Cog, MessageSquare, Brain, PenTool, Zap, DollarSign, ChevronRight } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

const getAgentIcon = (agentId: string) => {
  switch (agentId) {
    case 'fin':
      return <DollarSign className="w-6 h-6" />;
    case 'mit':
      return <TrendingUp className="w-6 h-6" />;
    case 'chad':
      return <Cog className="w-6 h-6" />;
    case 'mac':
      return <Users className="w-6 h-6" />;
    case 'ima':
      return <Brain className="w-6 h-6" />;
    case 'chip':
      return <PenTool className="w-6 h-6" />;
    case 'pat':
      return <Zap className="w-6 h-6" />;
    default:
      return <Cog className="w-6 h-6" />;
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

export default function AgentCard({ agent }: AgentCardProps) {
  const navigate = useNavigate();
  const iconColorClass = getAgentColor(agent.id);

  const handleCardClick = () => {
    navigate(`/agent/${agent.id}`);
  };

  return (
    <div
      className="bg-surface rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border overflow-hidden flex flex-col cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-2 rounded-lg ${iconColorClass}`}>
            {getAgentIcon(agent.id)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">{agent.title}</h3>
            <p className="text-sm text-text-secondary">{agent.subtitle}</p>
          </div>
        </div>

        <div className="space-y-4 flex-1">
          {agent.metrics.map((metric, index) => (
            <div key={index} className="border-l-4 border-border pl-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-text-primary">{metric.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${metric.type === 'self-generated'
                  ? 'bg-secondary/20 text-secondary'
                  : 'bg-primary/20 text-primary'
                  }`}>
                  {metric.type === 'self-generated' ? 'Self' : 'Dependent'}
                </span>
              </div>
              <div className="text-2xl font-bold text-text-primary mb-2">{metric.value}</div>
              <p className="text-xs text-text-secondary leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Click for details section */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm text-text-secondary group-hover:text-primary transition-colors">
            <span>Click for further details</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}