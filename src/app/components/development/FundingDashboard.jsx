'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Wallet, Truck, Building2, Users, Cpu, Megaphone, Shield, TrendingUp, ChevronRight, Circle } from 'lucide-react';

const FundingDashboard = () => {
  const [progress, setProgress] = useState(0);
  const [activeBar, setActiveBar] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const colors = {
    primary: '#B0DB9C', 
    dark: '#27391C',
    slate: '#64748B', 
    light: '#F8FAFC', 
    cardBg: '#FFFFFF',
    shadow: 'rgba(0,0,0,0.1)'
  };

  const fundingData = [
    { 
      category: 'Fleet & Equipment',
      percentage: 26.7,
      amount: 0.801,
      color: '#B0DB9C',
      icon: Truck,
      details: ['Vehicle procurement', 'Equipment upgrade', 'Maintenance systems']
    },
    { 
      category: 'Infrastructure',
      percentage: 22.2,
      amount: 0.666,
      color: '#4B7B34', 
      icon: Building2,
      details: ['Facility expansion', 'Warehouse setup', 'Office spaces']
    },
    { 
      category: 'Human Resources',
      percentage: 22.2,
      amount: 0.666,
      color: '#64748B',
      icon: Users,
      details: ['Team hiring', 'Training programs', 'Employee benefits']
    },
    { 
      category: 'Technology',
      percentage: 17.8,
      amount: 0.534,
      color: '#8BA97D',
      icon: Cpu,
      details: ['Software systems', 'Digital tools', 'Automation']
    },
    { 
      category: 'Marketing',
      percentage: 11.1,
      amount: 0.333,
      color: '#C5E5B4',
      icon: Megaphone,
      details: ['Brand campaigns', 'Digital marketing', 'Market research']
    }
  ];


  useEffect(() => {
    const progressTimer = setTimeout(() => setProgress(100), 100);
    const amountTimer = setInterval(() => {
      setTotalAmount(prev => {
        if (prev >= 3) {
          clearInterval(amountTimer);
          return 3;
        }
        return prev + 0.06;
      });
    }, 25);
    
    return () => {
      clearTimeout(progressTimer);
      clearInterval(amountTimer);
    };
  }, []);

  const CustomBarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: colors.dark,
          padding: '0.8rem 1rem',
          borderRadius: '10px',
          border: `2px solid ${payload[0].payload.color}`,
          boxShadow: '0 6px 16px rgba(0,0,0,0.4)'
        }}>
          <div style={{ 
            color: colors.primary, 
            fontWeight: '600',
            fontSize: '0.875rem', 
            marginBottom: '0.4rem'
          }}>
            {payload[0].payload.category}
          </div>
          <div style={{ color: colors.light, fontSize: '1.25rem', fontWeight: '800' }}> 
            {payload[0].value}%
          </div>
          <div style={{ color: colors.primary, fontSize: '0.8rem', marginTop: '0.25rem' }}>
            ₹{payload[0].payload.amount} Crores
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(to bottom, ${colors.light} 0%, #E8F5E0 50%, ${colors.light} 100%)`,
      padding: '2rem',
      fontFamily: "'Inter', system-ui, sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '350px',
        height: '350px',
        background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: `radial-gradient(circle, ${colors.slate}15 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        <div style={{
          textAlign: 'center',
          padding: '2.5rem 2rem',
          marginBottom: '2rem',
          opacity: progress > 0 ? 1 : 0,
          transform: progress > 0 ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: colors.primary,
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            boxShadow: `0 6px 24px ${colors.primary}40`
          }}>
            <Wallet size={20} color={colors.dark} strokeWidth={2} />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: colors.dark,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Funding Requirement
            </span>
          </div>

          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: '900',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            margin: '0.5rem 0',
            lineHeight: '1.1',
            color: '#27391C'
          }}>
            ₹{totalAmount.toFixed(2)}
          </h1>
          
          <div style={{
            fontSize: '1.5rem',
            color: colors.dark,
            fontWeight: '700',
            marginBottom: '1rem',
            opacity: 0.8
          }}>
            CRORES
          </div>

          <p style={{
            fontSize: '1rem',
            color: colors.dark, 
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.8
          }}>
            Strategic capital allocation to fuel sustainable expansion and operational excellence across key business verticals.
          </p>
        </div>

        <div style={{
          background: colors.cardBg, 
          borderRadius: '28px',
          padding: '2.5rem',
          marginBottom: '2rem',
          border: `1px solid ${colors.primary}50`,
          boxShadow: '0 15px 45px rgba(0,0,0,0.08)', 
          opacity: progress > 0 ? 1 : 0,
          transform: progress > 0 ? 'scale(1)' : 'scale(0.95)',
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <TrendingUp size={28} color={colors.dark} strokeWidth={2.5} /> 
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: colors.dark, 
              margin: 0
            }}>
              Capital Allocation Plan
            </h2>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart 
              data={fundingData}
              margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
              onMouseMove={(state) => {
                if (state.isTooltipActive) {
                  setActiveBar(state.activeTooltipIndex);
                } else {
                  setActiveBar(null);
                }
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={`${colors.slate}30`} />
              <XAxis 
                dataKey="category" 
                angle={-30}
                textAnchor="end"
                height={60}
                stroke={colors.dark}
                tick={{ fill: colors.dark, fontSize: 11, fontWeight: 500 }} 
              />
              <YAxis 
                stroke={colors.dark} 
                tick={{ fill: colors.dark, fontSize: 11, fontWeight: 500 }}
                label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: colors.dark, fontSize: 12 }} // Label text to dark
              />
              <Tooltip content={<CustomBarTooltip />} cursor={{ fill: `${colors.primary}10` }} />
              <Bar 
                dataKey="percentage" 
                radius={[8, 8, 0, 0]}
                animationDuration={1500}
                animationBegin={300}
              >
                {fundingData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.color}
                    opacity={activeBar === null || activeBar === index ? 1 : 0.5}
                    style={{ 
                      filter: activeBar === index ? 'brightness(1.15)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'nowrap', 
          overflowX: 'auto', 
          gap: '1rem',
          marginBottom: '2rem',
          paddingBottom: '1rem'
        }}>
          {fundingData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeBar === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveBar(index)}
                onMouseLeave={() => setActiveBar(null)}
                style={{
                  flexShrink: 0, 
                  flexBasis: '250px',
                  background: colors.cardBg, 
                  border: isActive ? `2px solid ${item.color}` : `1px solid ${colors.primary}50`,
                  borderRadius: '20px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transform: isActive ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
                  boxShadow: isActive 
                    ? `0 15px 40px ${item.color}40, 0 0 0 1px ${item.color}` 
                    : '0 6px 20px rgba(0,0,0,0.08)', 
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  opacity: progress > 0 ? 1 : 0,
                  animation: `slideUp 0.6s ease ${index * 0.1}s both`
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}80 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 6px 16px ${item.color}40`
                  }}>
                    <Icon size={24} color="white" strokeWidth={2} />
                  </div>

                  <div style={{
                    background: item.color,
                    color: colors.dark,
                    padding: '0.4rem 0.8rem',
                    borderRadius: '10px',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    boxShadow: `0 3px 12px ${item.color}40`
                  }}>
                    {item.percentage}%
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: colors.dark, 
                  marginBottom: '0.5rem'
                }}>
                  {item.category}
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '1rem'
                }}>
                  <Circle size={6} fill={item.color} color={item.color} />
                  <span style={{
                    color: colors.dark, 
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    opacity: 0.8
                  }}>
                    ₹{item.amount} Crores
                  </span>
                </div>

                <div style={{
                  borderTop: `1px solid ${colors.slate}20`,
                  paddingTop: '0.8rem'
                }}>
                  {item.details.map((detail, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: colors.slate, 
                        fontSize: '0.75rem',
                        marginBottom: '0.3rem',
                        opacity: 0.9
                      }}
                    >
                      <ChevronRight size={14} color={item.color} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, #9BCF7D 100%)`,
          borderRadius: '20px',
          padding: '2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          boxShadow: `0 15px 45px ${colors.primary}40`,
          opacity: progress > 0 ? 1 : 0,
          transform: progress > 0 ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: colors.dark,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
          }}>
            <Shield size={32} color={colors.primary} strokeWidth={2.5} />
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: colors.dark,
              marginBottom: '0.3rem'
            }}>
              Contingency Reserve Secured
            </h3>
            <p style={{
              fontSize: '1rem',
              color: colors.dark,
              lineHeight: '1.5',
              margin: 0,
              opacity: 0.9
            }}>
              A contingency reserve ensures operational stability and compliance throughout the expansion phase.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FundingDashboard;