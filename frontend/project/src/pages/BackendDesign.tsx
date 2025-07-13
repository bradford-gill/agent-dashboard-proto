import React, { useEffect } from 'react';
import { Database } from 'lucide-react';

export default function BackendDesign() {
  useEffect(() => {
    // Dynamically load mermaid
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js';
    script.onload = () => {
      // @ts-ignore
      window.mermaid?.initialize({
        startOnLoad: true,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#0A84FF',
          primaryTextColor: '#F2F2F2',
          primaryBorderColor: '#2C2C2E',
          lineColor: '#A0A0A0',
          secondaryColor: '#1E1E1E',
          tertiaryColor: '#121212',
          background: '#121212',
          mainBkg: '#1E1E1E',
          secondBkg: '#2C2C2E'
        }
      });
      // @ts-ignore
      window.mermaid?.contentLoaded();
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Database className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-text-primary">Backend Design</h1>
          </div>
          <p className="text-text-secondary">System architecture and data flow visualization</p>
        </div>

        <div className="bg-surface rounded-xl shadow-sm border border-border p-8">
          <h2 className="text-xl font-semibold text-text-primary mb-6">Backend Flow</h2>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="mermaid" id="backend-flow">
                {`graph TD
                    A[CRM<br/>ei: <small>HubSpot, Salesforce, ... </small>] --> E[Workflow Orchestrator<br/><small>Dagster, Airflow, or etc.</small>]
                    B[Slack, Instantly, Beeswax, ...] --> E
                    C[Webhooks & APIs] --> E
                    D[Snowflake] --> E
                    J[... Other Data Sources] --> E
                    
                    E --> F[Agent Monitoring Tables<br/><small><i>Hourly, Daily, Weekly, Monthly, etc data</i></small>]
                    F --> G[Agent Dashboard]
                    
                    classDef sourceNode fill:#1E1E1E,stroke:#0A84FF,stroke-width:2px,color:#F2F2F2
                    classDef orchestratorNode fill:#1E1E1E,stroke:#30D158,stroke-width:2px,color:#F2F2F2
                    classDef dataNode fill:#1E1E1E,stroke:#A0A0A0,stroke-width:2px,color:#F2F2F2
                    classDef dashboardNode fill:#1E1E1E,stroke:#2C2C2E,stroke-width:2px,color:#F2F2F2
                    
                    class A,B,C,D,J sourceNode
                    class E orchestratorNode
                    class F dataNode
                    class G dashboardNode`}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
              <h3 className="font-semibold text-primary mb-2">Data Sources</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• CRM Systems</li>
                <li>• Communication Tools</li>
                <li>• External APIs</li>
                <li>• Data Warehouses</li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/30">
              <h3 className="font-semibold text-secondary mb-2">Orchestrator</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Workflow Management</li>
                <li>• Data Processing</li>
                <li>• Task Scheduling</li>
                <li>• Error Handling</li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
              <h3 className="font-semibold text-primary mb-2">Monitoring Tables</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Agent Metrics</li>
                <li>• Performance Data</li>
                <li>• Historical Trends</li>
                <li>• Real-time Updates</li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/30">
              <h3 className="font-semibold text-secondary mb-2">Dashboard</h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Visualization</li>
                <li>• User Interface</li>
                <li>• Real-time Display</li>
                <li>• Interactive Controls</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}