import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
    Activity, TrendingUp, Users, FileText, AlertCircle,
    CheckCircle2, Clock, Bell, Settings, RefreshCw,
    PieChart, BarChart2, Calendar, Filter, Search,
    Sun, Moon, DollarSign, UserPlus, Target, Briefcase,
    ArrowUp, ArrowDown, Award, Zap
} from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import ShineBorder from "@/components/ui/shine-border";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/context/ThemeContext";

// import ShineBorder from "@/components/magicui/shine-border";


const DashboardPageCardsLayout = () => {
    const [isDark, setIsDark] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { theme } = useTheme();

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const enquiryMetrics = [
        {
            title: "Enquiry High",
            description: "High priority enquiries",
            total: 8,
            trend: "+12%",
            icon: <AlertCircle className="w-4 h-4" />,
            details: [
                { name: "Ramesh", value: 4 },
                { name: "Saran", value: 3 },
                { name: "Saravana", value: 1 }
            ],
            colorClass: "bg-red-500/10 dark:bg-red-500/20"
        },
        {
            title: "Enquiry Medium",
            description: "Medium priority enquiries",
            total: 4,
            trend: "-5%",
            icon: <Clock className="w-4 h-4" />,
            details: [
                { name: "Saran", value: 1 },
                { name: "Saravana", value: 3 }
            ],
            colorClass: "bg-yellow-500/10 dark:bg-yellow-500/20"
        },
        {
            title: "Enquiry Expected",
            description: "Expected enquiries",
            total: 49,
            trend: "+28%",
            icon: <TrendingUp className="w-4 h-4" />,
            details: [
                { name: "Ramesh", value: 32 },
                { name: "Saravana", value: 14 },
                { name: "Saran", value: 3 }
            ],
            colorClass: "bg-green-500/10 dark:bg-green-500/20"
        }
    ];

    const opportunityMetrics = [
        {
            title: "Opportunity High",
            description: "High value opportunities",
            total: 48,
            trend: "+15%",
            icon: <Target className="w-4 h-4" />,
            details: [
                { name: "Saravana", value: 23 },
                { name: "Ramesh", value: 20 },
                { name: "Saran", value: 5 }
            ],
            colorClass: "bg-blue-500/10 dark:bg-blue-500/20"
        },
        {
            title: "Opportunity Medium",
            description: "Medium value opportunities",
            total: 12,
            trend: "+8%",
            icon: <Briefcase className="w-4 h-4" />,
            details: [
                { name: "Saravana", value: 2 },
                { name: "Ramesh", value: 6 },
                { name: "Saran", value: 3 },
                { name: "Anu", value: 1 }
            ],
            colorClass: "bg-indigo-500/10 dark:bg-indigo-500/20"
        },
        {
            title: "Opportunity Low",
            description: "Low priority opportunities",
            total: 6,
            trend: "-3%",
            icon: <CheckCircle2 className="w-4 h-4" />,
            details: [
                { name: "Saran", value: 3 },
                { name: "Ramesh", value: 3 }
            ],
            colorClass: "bg-purple-500/10 dark:bg-purple-500/20"
        }
    ];

    const proposalMetrics = [
        {
            title: "Proposal High",
            description: "High value proposals submitted",
            total: 75,
            trend: "+32%",
            icon: <Award className="w-4 h-4" />,
            value: "$1.2M",
            details: [
                { name: "Enterprise", value: 45 },
                { name: "Corporate", value: 30 }
            ],
            colorClass: "bg-orange-500/10 dark:bg-orange-500/20"
        },
        {
            title: "Proposal Medium",
            description: "Medium value proposals in progress",
            total: 95,
            trend: "+18%",
            icon: <FileText className="w-4 h-4" />,
            value: "$850K",
            details: [
                { name: "SMB", value: 65 },
                { name: "Startup", value: 30 }
            ],
            colorClass: "bg-teal-500/10 dark:bg-teal-500/20"
        }
    ];

    const performanceMetrics = [
        {
            title: "Revenue Generated",
            description: "Total revenue from closed deals",
            value: "$2.4M",
            trend: "+24%",
            icon: <DollarSign className="w-4 h-4" />,
            colorClass: "bg-emerald-500/10 dark:bg-emerald-500/20"
        },
        {
            title: "New Customers",
            description: "Customers acquired this month",
            value: "128",
            trend: "+12%",
            icon: <UserPlus className="w-4 h-4" />,
            colorClass: "bg-cyan-500/10 dark:bg-cyan-500/20"
        },
        {
            title: "Success Rate",
            description: "Proposal conversion rate",
            value: "68%",
            trend: "+5%",
            icon: <Zap className="w-4 h-4" />,
            colorClass: "bg-pink-500/10 dark:bg-pink-500/20"
        }
    ];

    const renderSkeletonCard = (isCompact = false) => (
        <Card className="border border-gray-200 dark:border-gray-800">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[150px]" />
                            <Skeleton className="h-3 w-[100px]" />
                        </div>
                    </div>
                    <Skeleton className="h-6 w-16" />
                </div>
            </CardHeader>
            <CardContent>
                <Skeleton className="h-8 w-24 mb-4" />
                {!isCompact && (
                    <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex justify-between items-center p-2">
                                <Skeleton className="h-4 w-[100px]" />
                                <Skeleton className="h-4 w-[50px]" />
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );

    const renderMetricCard = (metric, isCompact = false) => {
        if (isLoading) {
            return renderSkeletonCard(isCompact);
        }

        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>

                        <Card className={`
              ${metric.colorClass}
              transition-all duration-300 
              hover:scale-[1.02] 
              shadow-lg hover:shadow-xl
              cursor-pointer
              border border-gray-200 dark:border-gray-800
              dark:text-white
              
            `}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2">
                                        {metric.icon}
                                        <div>
                                            <CardTitle className="text-lg font-medium">
                                                {metric.title}
                                            </CardTitle>
                                            <CardDescription>
                                                {metric.description}
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <Badge
                                        variant={metric.trend.startsWith('+') ? "default" : "destructive"}
                                        className="flex items-center gap-1"
                                    >
                                        {metric.trend.startsWith('+') ?
                                            <ArrowUp className="w-3 h-3" /> :
                                            <ArrowDown className="w-3 h-3" />
                                        }
                                        {metric.trend}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold mb-4">
                                    {metric.value || metric.total}
                                </div>
                                {!isCompact && metric.details && (
                                    <div className="space-y-2">
                                        {metric.details.map((detail, idx) => (
                                            <div
                                                key={idx}
                                                className="flex justify-between items-center p-2 rounded-lg bg-white/50 dark:bg-gray-800/50"
                                            >
                                                <span className="font-medium">
                                                    {detail.name}
                                                </span>
                                                <Badge variant="secondary">
                                                    {detail.value}
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Click to view detailed {metric.title.toLowerCase()} statistics</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    };

    const handleRefresh = () => {
        setIsLoading(true);
        setIsRefreshing(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsRefreshing(false);
        }, 2000);
    };

    return (
        <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 lg:p-4 rounded-lg ${isDark ? 'dark' : ''}`}>
            <header className="top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-2 lg:py-4">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex items-center gap-4 flex-1 md:flex-none">
                            {/* {isLoading ? (
                <Skeleton className="h-8 w-[200px]" />
              ) : (
                <h1 className="text-2xl font-bold">Dashboard</h1>
              )} */}
                        </div>

                        <div className="flex items-center gap-2 justify-end w-full md:w-auto">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleRefresh}
                                className={`transition-transform hover:scale-110 ${isRefreshing ? 'animate-spin' : ''}`}
                            >
                                <RefreshCw className="h-4 w-4" />
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                className="transition-transform hover:scale-110"
                            >
                                <Settings className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8">
                    {isLoading ? (
                        <div className="space-y-4">
                            <Skeleton className="h-10 w-[300px]" />
                            <Skeleton className="h-6 w-[200px]" />
                        </div>
                    ) : (
                        <>
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                                Dashboard Overview
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Monitor your business metrics and performance in real-time
                            </p>
                        </>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {performanceMetrics.map((metric, index) => (
                        renderMetricCard(metric, true)
                    ))}
                </div>

                <Separator className="my-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {enquiryMetrics.map((metric, index) => (
                        renderMetricCard(metric)
                    ))}
                </div>

                <Separator className="my-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {opportunityMetrics.map((metric, index) => (
                        renderMetricCard(metric)
                    ))}
                </div>

                <Separator className="my-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {proposalMetrics.map((metric, index) => (
                        renderMetricCard(metric)
                    ))}
                </div>

            </main>
        </div>
    );
};





export default DashboardPageCardsLayout;