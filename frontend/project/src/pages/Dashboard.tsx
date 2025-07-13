import React from 'react';
import AgentCard from '../components/AgentCard';
import { mockAgents } from '../data/MockData';
import { Activity } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Activity className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-text-primary">Agent Dashboard</h1>
          </div>
          <p className="text-text-secondary">Monitor performance metrics across all autonomous agents</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1: 2 rows */}
          <div className="flex flex-col gap-6">
            {mockAgents.slice(0, 2).map((agent) => (
              <div key={agent.id}>
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>

          {/* Column 2: 2 rows */}
          <div className="flex flex-col gap-6">
            {mockAgents.slice(2, 4).map((agent) => (
              <div key={agent.id}>
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>

          {/* Column 3: 3 rows */}
          <div className="flex flex-col gap-6">
            {mockAgents.slice(4, 7).map((agent) => (
              <div key={agent.id}>
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-surface rounded-xl shadow-sm border border-border p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Metric Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium text-text-primary">Self-Generated Metrics</h3>
                <p className="text-sm text-text-secondary mt-1">
                  Metrics calculated entirely within the agent using internal data and processes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
              <div>
                <h3 className="font-medium text-text-primary">Dependent Metrics</h3>
                <p className="text-sm text-text-secondary mt-1">
                  Metrics that require data or coordination from other agents to calculate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}