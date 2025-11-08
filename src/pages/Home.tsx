import React, { useState, useEffect } from 'react'
import { Check, X, AlertCircle, Github, Zap, Shield, DollarSign, Code, Users, Lock, ArrowRight, ChevronRight, GitBranch, MessageSquare, CheckCircle, XCircle, Clock, Settings, Terminal, Star, TrendingUp, Activity, Award, FileText, BarChart, LockIcon, Eye, BadgeCheck } from 'lucide-react'

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0)
  const [isChecking, setIsChecking] = useState(false)
  const [demoResult, setDemoResult] = useState<any>(null)
  const [activeRepoTab, setActiveRepoTab] = useState('overview')
  const [email, setEmail] = useState('')

  const implementationSteps = [
    {
      icon: Settings,
      title: "Create GitHub App",
      description: "Configure the app in your GitHub organization settings"
    },
    {
      icon: Lock,
      title: "Set Permissions",
      description: "Grant read repo and write PR comment permissions"
    },
    {
      icon: Code,
      title: "Deploy Webhook",
      description: "Deploy webhook handler on free platforms like Vercel"
    },
    {
      icon: Users,
      title: "Install & Go",
      description: "Install on repositories and start monitoring schema changes"
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Automatic Detection",
      description: "Watches all PRs for schema changes automatically"
    },
    {
      icon: MessageSquare,
      title: "Smart Comments",
      description: "Provides detailed safety checks in PR comments"
    },
    {
      icon: GitBranch,
      title: "Version Validation",
      description: "Ensures version numbers are properly bumped"
    },
    {
      icon: Users,
      title: "Code Owner Checks",
      description: "Verifies proper team assignments and approvals"
    },
    {
      icon: Lock,
      title: "Security Rules",
      description: "Validates security rule implementations"
    },
    {
      icon: Zap,
      title: "Zero Latency",
      description: "Runs on GitHub's infrastructure for instant feedback"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechCorp",
      company: "TechCorp",
      avatar: "https://pub-cdn.sider.ai/u/U0NWHZ6OKGO/web-coder/690ed8be833e618c33b4ec51/resource/03a0a45f-0a8e-4eca-b8d7-68cb11bfa8c8.jpg",
      content: "SchemaGuard saved us $500/month in infrastructure costs while improving our schema security. The PR integration is seamless.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer at StartupXYZ",
      company: "StartupXYZ",
      avatar: "https://pub-cdn.sider.ai/u/U0NWHZ6OKGO/web-coder/690ed8be833e618c33b4ec51/resource/4cc18fad-20d4-4629-b32a-503d8d92d989.jpg",
      content: "We've reduced schema-related bugs by 87% since implementing SchemaGuard. The automated checks are a game changer.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "DevOps Engineer at Enterprise Inc",
      company: "Enterprise Inc",
      avatar: "https://pub-cdn.sider.ai/u/U0NWHZ6OKGO/web-coder/690ed8be833e618c33b4ec51/resource/0032013c-9480-4aad-b420-ab5c39adcefb.jpg",
      content: "Setup took less than 30 minutes. The best $25/month we've ever spent on developer tools.",
      rating: 5
    }
  ]

  const securityBadges = [
    { name: "SOC 2 Type II", icon: Shield, description: "Certified compliance" },
    { name: "GDPR Ready", icon: Lock, description: "Data protection compliant" },
    { name: "ISO 27001", icon: Award, description: "Information security management" },
    { name: "OWASP Verified", icon: BadgeCheck, description: "Security best practices" }
  ]

  const documentationSections = [
    {
      title: "Quick Start Guide",
      description: "Get SchemaGuard running in under 30 minutes",
      icon: Zap,
      link: "#quickstart"
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      icon: Code,
      link: "#api"
    },
    {
      title: "Configuration Guide",
      description: "Advanced configuration options and best practices",
      icon: Settings,
      link: "#config"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      icon: FileText,
      link: "#troubleshooting"
    }
  ]

  const liveRepos = [
    { name: "acme-corp/backend", status: "protected", lastCheck: "2 min ago", changes: 3 },
    { name: "startupXYZ/frontend", status: "protected", lastCheck: "5 min ago", changes: 0 },
    { name: "enterprise/db-schema", status: "checking", lastCheck: "just now", changes: 1 },
    { name: "opensource/community", status: "protected", lastCheck: "1 hour ago", changes: 7 }
  ]

  const analytics = {
    totalChecks: 125847,
    preventedIssues: 342,
    activeRepos: 1284,
    uptime: "99.9%"
  }

  const pricingTiers = [
    {
      name: "Starter",
      price: "$25",
      period: "/month",
      features: [
        "Up to 10 repositories",
        "Basic schema validation",
        "PR comments",
        "Email support",
        "7-day retention"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$75",
      period: "/month",
      features: [
        "Up to 50 repositories",
        "Advanced validation rules",
        "Custom check templates",
        "Priority support",
        "30-day retention",
        "Team collaboration"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited repositories",
        "Custom integrations",
        "Dedicated support",
        "On-premise options",
        "Unlimited retention",
        "SLA guarantee"
      ],
      highlighted: false
    }
  ]

  const costComparisons = [
    { item: "Database", traditional: "$50/month", schemaguard: "$25/month" },
    { item: "Hosting", traditional: "$30/month", schemaguard: "Included" },
    { item: "API Credits", traditional: "$100/month", schemaguard: "Included" },
    { item: "Infrastructure", traditional: "$40/month", schemaguard: "Included" },
    { item: "Monitoring", traditional: "$25/month", schemaguard: "Included" }
  ]

  const runDemoCheck = async () => {
    setIsChecking(true)
    setActiveStep(0)
    
    for (let i = 0; i < implementationSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800))
      setActiveStep(i + 1)
    }
    
    setDemoResult({
      changedFiles: ['firestore.rules', 'users.schema.json'],
      checks: [
        { name: 'Version bumped in versions.json', status: 'pass' },
        { name: 'Code owners assigned (@team-schema)', status: 'pass' },
        { name: 'Security rule test coverage', status: 'fail' }
      ],
      requiredActions: [
        'Add test for new security rules',
        'Get approval from @team-schema'
      ]
    })
    
    setIsChecking(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const steps = document.querySelectorAll('.step-indicator')
      steps.forEach((step, index) => {
        if (index <= activeStep) {
          step.classList.add('active')
        }
      })
    }, 100)
    return () => clearInterval(interval)
  }, [activeStep])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-6 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm mb-6">
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise GitHub App - Starting at $25/month</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              SchemaGuard for GitHub
              <span className="text-blue-600">.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Automatic schema change detection through GitHub's native infrastructure. 
              Professional protection at a fraction of traditional costs.
            </p>
            
            <div className="flex gap-4 justify-center mb-12">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
                <Github className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2">
                View Documentation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">$25</div>
                <div className="text-sm text-gray-600">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">0ms</div>
                <div className="text-sm text-gray-600">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Badges */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Trusted by Security-First Teams</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {securityBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <badge.icon className="w-4 h-4 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">{badge.name}</div>
                  <div className="text-xs text-gray-600">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Development Teams</h2>
            <p className="text-xl text-gray-600">See what our customers have to say about SchemaGuard</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center gap-8 mb-6">
                <div>
                  <div className="text-3xl font-bold">1,284+</div>
                  <div className="text-sm opacity-90">Active Repositories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-sm opacity-90">Customer Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">87%</div>
                  <div className="text-sm opacity-90">Bug Reduction</div>
                </div>
              </div>
              <p className="text-lg opacity-90">Join thousands of developers who trust SchemaGuard for their schema protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live GitHub Monitoring */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Repository Monitoring</h2>
            <p className="text-xl text-gray-600">Real-time protection for your repositories</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Live Monitoring Dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  Live
                </div>
              </div>
              
              <div className="flex gap-2 mb-6">
                {['overview', 'recent', 'issues'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveRepoTab(tab)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeRepoTab === tab 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="space-y-3">
                {liveRepos.map((repo, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-900">{repo.name}</div>
                        <div className="text-sm text-gray-600">Last check: {repo.lastCheck}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-gray-600">
                        {repo.changes} changes today
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        repo.status === 'protected' 
                          ? 'bg-green-100 text-green-700'
                          : repo.status === 'checking'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {repo.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{analytics.totalChecks.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Checks</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{analytics.preventedIssues}</div>
                <div className="text-sm text-gray-600">Issues Prevented</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{analytics.activeRepos}</div>
                <div className="text-sm text-gray-600">Active Repos</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-amber-600">{analytics.uptime}</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your team's needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl border-2 p-8 ${
                tier.highlighted ? 'border-blue-600 shadow-xl' : 'border-gray-200'
              }`}>
                {tier.highlighted && (
                  <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Documentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Documentation</h2>
            <p className="text-xl text-gray-600">Everything you need to get started and succeed</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {documentationSections.map((section, index) => (
              <a 
                key={index}
                href={section.link}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                <div className="flex items-center gap-1 text-blue-600 font-medium text-sm">
                  <span>Read more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-900 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Quick Installation</h3>
            </div>
            <code className="block bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              npx create-schemaguard-app --github-org=your-org --plan=professional
            </code>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See SchemaGuard in Action</h2>
            <p className="text-xl text-gray-600">Watch how SchemaGuard automatically checks your schema changes</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Demo: Pull Request Analysis</h3>
                <button 
                  onClick={runDemoCheck}
                  disabled={isChecking}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isChecking ? 'Checking...' : 'Run Demo Check'}
                </button>
              </div>
              
              {isChecking && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Processing steps...</span>
                    <span className="text-sm font-medium">{activeStep}/{implementationSteps.length}</span>
                  </div>
                  <div className="flex gap-2">
                    {implementationSteps.map((_, index) => (
                      <div 
                        key={index}
                        className="step-indicator flex-1 h-2 bg-gray-200 rounded-full transition-all duration-300"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {demoResult && (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">🤖 SchemaGuard Report</h4>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Changed Files:</h5>
                    <div className="space-y-1">
                      {demoResult.changedFiles.map((file: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          {file}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Checks:</h5>
                    <div className="space-y-2">
                      {demoResult.checks.map((check: any, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          {check.status === 'pass' ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                          <span className={check.status === 'pass' ? 'text-green-700' : 'text-red-700'}>
                            {check.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Required Actions:</h5>
                    <div className="space-y-1">
                      {demoResult.requiredActions.map((action: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-amber-700">
                          <AlertCircle className="w-4 h-4" />
                          {index + 1}. {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need, Nothing You Don't</h2>
            <p className="text-xl text-gray-600">Powered by GitHub's webhook system and enhanced security</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation in 4 Steps</h2>
            <p className="text-xl text-gray-600">Get SchemaGuard running in minutes, not hours</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {implementationSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Quick Start Command</h3>
              </div>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                npx create-schemaguard-app --github-org=your-org --name=SchemaGuard
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Massive Cost Savings</h2>
            <p className="text-xl opacity-90">Compare traditional solutions with SchemaGuard</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl border border-white/20 p-8">
              <div className="space-y-4">
                {costComparisons.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-white/20 last:border-0">
                    <span className="font-medium">{item.item}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-red-300 line-through">{item.traditional}</span>
                      <span className="text-green-300 font-semibold">{item.schemaguard}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">Total Monthly Savings</span>
                  <span className="text-3xl font-bold text-green-300">$220</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Analytics & Insights</h2>
            <p className="text-xl text-gray-600">Track conversion rates and user engagement with detailed analytics</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Conversion Tracking</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trial to Paid Conversion</span>
                    <span className="font-semibold text-green-600">42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Time to Value</span>
                    <span className="font-semibold text-blue-600">3.2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">User Satisfaction Score</span>
                    <span className="font-semibold text-purple-600">4.8/5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Growth Metrics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Active Users</span>
                    <span className="font-semibold text-blue-600">+28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Schema Checks/Day</span>
                    <span className="font-semibold text-green-600">5.2K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Issues Prevented/Month</span>
                    <span className="font-semibold text-purple-600">342</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-xl border border-blue-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Real-time Monitoring</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our built-in analytics track user behavior, conversion rates, and engagement patterns to help you optimize your schema protection workflow.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Analytics Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <Github className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h2 className="text-4xl font-bold mb-4">Ready to Simplify Schema Management?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of teams that have reduced infrastructure costs by 88% while improving security
          </p>
          
          <div className="flex gap-4 justify-center mb-8">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Github className="w-5 h-5" />
              Start 14-Day Free Trial
            </button>
            <button className="border border-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Schedule Demo
            </button>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
              <input
                type="email"
                placeholder="Enter your email to get started"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/20 text-white placeholder-white/60 px-4 py-2 rounded-l-lg focus:outline-none focus:bg-white/30"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Enterprise security
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}