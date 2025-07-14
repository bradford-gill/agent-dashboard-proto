import React, { useState, useEffect, useCallback } from 'react';
import { Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import AgentCard from '../components/AgentCard';
import { mockAgents } from '../data/MockData';
import { Agent } from '../types';

const Dashboard: React.FC = () => {
  // Create extended agents array for seamless infinite scroll
  const extendedAgents: Agent[] = [...mockAgents, ...mockAgents, ...mockAgents];

  const [currentIndex, setCurrentIndex] = useState(mockAgents.length); // Start at the middle copy
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  console.log('Dashboard render - currentIndex:', currentIndex, 'extendedAgents length:', extendedAgents.length);

  // Calculate visible agents (3 at a time)
  const getVisibleAgents = useCallback(() => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % extendedAgents.length;
      visible.push(extendedAgents[index]);
    }
    console.log('Visible agents:', visible.map(a => a.id));
    return visible;
  }, [currentIndex, extendedAgents]);

  // Handle infinite loop reset
  const handleInfiniteReset = useCallback(() => {
    console.log('Checking for infinite reset - currentIndex:', currentIndex);

    // If we're at the end of the extended array, reset to the middle
    if (currentIndex >= extendedAgents.length - 3) {
      console.log('Resetting to beginning for infinite loop');
      setIsTransitioning(false);
      setCurrentIndex(mockAgents.length);
    }
    // If we're at the beginning, reset to the middle
    else if (currentIndex <= 0) {
      console.log('Resetting to end for infinite loop');
      setIsTransitioning(false);
      setCurrentIndex(mockAgents.length);
    }
  }, [currentIndex, extendedAgents.length]);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrollPaused) return;

    const interval = setInterval(() => {
      console.log('Auto-scroll triggered');
      setIsTransitioning(true);
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        console.log('Auto-scroll: moving from', prev, 'to', newIndex);
        return newIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoScrollPaused]);

  // Handle transition end for infinite reset
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        handleInfiniteReset();
      }, 500); // Match transition duration

      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, handleInfiniteReset]);

  // Navigation functions
  const goToNext = () => {
    console.log('Manual next navigation');
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      console.log('Next: moving from', prev, 'to', newIndex);
      return newIndex;
    });
  };

  const goToPrevious = () => {
    console.log('Manual previous navigation');
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      console.log('Previous: moving from', prev, 'to', newIndex);
      return newIndex;
    });
  };

  // Dot navigation
  const goToSlide = (slideIndex: number) => {
    console.log('Dot navigation to slide:', slideIndex);
    setIsTransitioning(true);
    setCurrentIndex(mockAgents.length + slideIndex); // Always use middle copy
  };

  // Calculate progress for progress bar
  const getProgress = () => {
    const normalizedIndex = ((currentIndex - mockAgents.length) % mockAgents.length + mockAgents.length) % mockAgents.length;
    return ((normalizedIndex + 1) / mockAgents.length) * 100;
  };

  // Get current dot index
  const getCurrentDotIndex = () => {
    return ((currentIndex - mockAgents.length) % mockAgents.length + mockAgents.length) % mockAgents.length;
  };

  const visibleAgents = getVisibleAgents();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Activity className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Agent Dashboard</h1>
              <p className="text-text-secondary mt-1">
                Monitor performance metrics across all autonomous agents
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div
          className="relative"
          onMouseEnter={() => {
            console.log('Mouse entered carousel - pausing auto-scroll');
            setIsAutoScrollPaused(true);
          }}
          onMouseLeave={() => {
            console.log('Mouse left carousel - resuming auto-scroll');
            setIsAutoScrollPaused(false);
          }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-surface/80 backdrop-blur-sm border border-border rounded-full hover:bg-surface hover:border-primary/50 transition-all duration-200 shadow-lg"
            aria-label="Previous agents"
          >
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-surface/80 backdrop-blur-sm border border-border rounded-full hover:bg-surface hover:border-primary/50 transition-all duration-200 shadow-lg"
            aria-label="Next agents"
          >
            <ChevronRight className="w-6 h-6 text-text-primary" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / 3}%)`,
                width: `${(extendedAgents.length * 100) / 3}%`
              }}
            >
              {extendedAgents.map((agent, index) => (
                <div
                  key={`${agent.id}-${Math.floor(index / mockAgents.length)}`}
                  className="w-1/3 px-3 flex-shrink-0"
                >
                  <AgentCard agent={agent} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 mb-6">
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${getProgress()}%` }}
              />
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3">
            {mockAgents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${getCurrentDotIndex() === index
                  ? 'bg-primary scale-125'
                  : 'bg-border hover:bg-text-secondary'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-surface rounded-xl border border-border p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Understanding Metric Types</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Self-Generated Metrics */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-secondary rounded-full"></div>
                <h3 className="text-lg font-semibold text-text-primary">Self-Generated Metrics</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                These metrics are directly controlled and measured by the agent itself. They represent
                the agent's internal performance and capabilities, such as processing speed, accuracy
                rates, and task completion metrics.
              </p>
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                <p className="text-sm text-secondary font-medium">
                  Examples: Signal ingestion volume, workflow deployment count, intent classification accuracy
                </p>
              </div>
            </div>

            {/* Dependent Metrics */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <h3 className="text-lg font-semibold text-text-primary">Dependent Metrics</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                These metrics depend on external factors or the performance of other agents in the system.
                They measure the downstream impact and effectiveness of the agent's work in the broader
                context of the overall system performance.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-primary font-medium">
                  Examples: Customer acquisition cost, engagement lift, conversion rates from agent-triggered actions
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-text-primary mb-2">Performance Correlation</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  The most effective agents show strong correlation between their self-generated metrics
                  and dependent metrics, indicating that their internal optimizations translate to
                  meaningful business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
