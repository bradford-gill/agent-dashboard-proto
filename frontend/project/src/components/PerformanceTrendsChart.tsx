import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Metric } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PerformanceTrendsChartProps {
  metrics: Metric[];
  title?: string;
}

type TimePeriod = 'daily' | 'weekly' | 'monthly';

const PerformanceTrendsChart: React.FC<PerformanceTrendsChartProps> = ({ 
  metrics, 
  title = "Performance Trends" 
}) => {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([metrics[0]?.name || '']);
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('weekly');

  // Color palette for different metrics
  const colors = [
    '#0A84FF', // Primary blue
    '#30D158', // Secondary green
    '#FF9F0A', // Orange
    '#FF453A', // Red
    '#BF5AF2', // Purple
    '#5AC8FA', // Light blue
    '#FFCC00', // Yellow
  ];

  const chartData = useMemo(() => {
    const datasets = selectedMetrics.map((metricName, index) => {
      const metric = metrics.find(m => m.name === metricName);
      if (!metric?.timeSeriesData) return null;

      const data = metric.timeSeriesData[timePeriod];
      const color = colors[index % colors.length];

      return {
        label: metricName,
        data: data.map(point => point.value),
        borderColor: color,
        backgroundColor: color + '20',
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.1,
      };
    }).filter(Boolean);

    // Get labels from the first selected metric
    const firstMetric = metrics.find(m => m.name === selectedMetrics[0]);
    const labels = firstMetric?.timeSeriesData?.[timePeriod]?.map(point => {
      const date = new Date(point.date);
      if (timePeriod === 'daily') {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      } else if (timePeriod === 'weekly') {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      } else {
        return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      }
    }) || [];

    return {
      labels,
      datasets,
    };
  }, [selectedMetrics, timePeriod, metrics]);

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#F2F2F2',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: '#1E1E1E',
        titleColor: '#F2F2F2',
        bodyColor: '#F2F2F2',
        borderColor: '#2C2C2E',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#2C2C2E',
        },
        ticks: {
          color: '#A0A0A0',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: '#2C2C2E',
        },
        ticks: {
          color: '#A0A0A0',
          font: {
            size: 11,
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  const handleMetricToggle = (metricName: string) => {
    setSelectedMetrics(prev => {
      if (prev.includes(metricName)) {
        // Don't allow removing the last metric
        if (prev.length === 1) return prev;
        return prev.filter(name => name !== metricName);
      } else {
        return [...prev, metricName];
      }
    });
  };

  return (
    <div className="bg-background rounded-lg p-6 border border-border">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">{title}</h3>
        
        {/* Time Period Selector */}
        <div className="flex space-x-2 mb-4">
          {(['daily', 'weekly', 'monthly'] as TimePeriod[]).map((period) => (
            <button
              key={period}
              onClick={() => setTimePeriod(period)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                timePeriod === period
                  ? 'bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:bg-border'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

        {/* Metric Toggles */}
        <div className="flex flex-wrap gap-2 mb-4">
          {metrics.map((metric) => (
            <button
              key={metric.name}
              onClick={() => handleMetricToggle(metric.name)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedMetrics.includes(metric.name)
                  ? metric.type === 'self-generated'
                    ? 'bg-secondary/20 text-secondary border border-secondary'
                    : 'bg-primary/20 text-primary border border-primary'
                  : 'bg-surface text-text-secondary border border-border hover:bg-border'
              }`}
            >
              {metric.name}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        {selectedMetrics.length > 0 ? (
          <Line data={chartData} options={options} />
        ) : (
          <div className="flex items-center justify-center h-full text-text-secondary">
            <p>Select at least one metric to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceTrendsChart;
