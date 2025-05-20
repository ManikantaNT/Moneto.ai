import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import Button from '../components/ui/Button';
import { 
  CheckCircle2, 
  ArrowRight, 
  CreditCard, 
  Upload, 
  BarChart4, 
  Tag, 
  Zap, 
  Award,
  Play
} from 'lucide-react';
import { useState } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);
  
  const features = [
    {
      icon: <Upload size={24} className="text-primary-500" />,
      title: 'PDF Import & Conversion',
      description: 'Securely upload your bank statements and convert them into structured data.',
    },
    {
      icon: <Tag size={24} className="text-primary-500" />,
      title: 'Smart Categorization',
      description: 'Automatically categorize your transactions with our rule-based engine.',
    },
    {
      icon: <BarChart4 size={24} className="text-primary-500" />,
      title: 'Visual Analytics',
      description: 'Get detailed charts and insights about your spending patterns.',
    },
    {
      icon: <Zap size={24} className="text-primary-500" />,
      title: 'Fast Processing',
      description: 'Process multiple statements quickly with our optimized algorithms.',
    },
  ];
  
  const pricingTiers = [
    {
      name: 'Basic',
      price: '$9.99',
      period: 'per month',
      description: 'Perfect for individuals who want to analyze their personal finances.',
      features: [
        'PDF → Excel/CSV conversion',
        'Rule-based categorization',
        'Monthly spending charts',
        'Transaction list with search & filter',
      ],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Professional',
      price: '$19.99',
      period: 'per month',
      description: 'For professionals who need advanced financial analytics.',
      features: [
        'All Basic features',
        'AI-powered categorization',
        'Trend analysis',
        'Budget creation & tracking',
        'Interactive dashboards',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact for pricing',
      description: 'Tailored solutions for businesses with custom requirements.',
      features: [
        'All Professional features',
        'Multi-user workspaces',
        'Direct bank-API integrations',
        'Anomaly detection',
        'REST API access',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center animate-fade-in-up">
              <Logo className="h-8" />
            </div>
            <nav className="hidden md:flex items-center space-x-8 stagger-animation">
              <a href="#features" className="text-gray-500 hover:text-gray-900 hover-lift">Features</a>
              <a href="#pricing" className="text-gray-500 hover:text-gray-900 hover-lift">Pricing</a>
              <a href="#faq" className="text-gray-500 hover:text-gray-900 hover-lift">FAQ</a>
            </nav>
            <div className="flex items-center space-x-4 animate-fade-in-up">
              <button className="text-gray-500 hover:text-gray-900 font-medium hover-lift">
                Sign In
              </button>
              <Button 
                onClick={() => navigate('/app')} 
                className="glow-on-hover"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight animate-slide-in-left">
                  Turn bank statements into powerful financial insights
                </h1>
                <p className="text-lg mb-8 text-primary-100 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Moneta.ai extracts, categorizes, and visualizes your financial data, 
                  helping you make smarter decisions about your money.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    rightIcon={<ArrowRight />}
                    onClick={() => navigate('/app')}
                    className="text-white scale-on-hover"
                  >
                    Try Demo
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white hover:bg-primary-800 glow-on-hover group relative"
                    onClick={() => setShowDemo(true)}
                    leftIcon={<Play className="transition-transform group-hover:scale-110" />}
                  >
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="lg:flex justify-center hidden">
                <img 
                  src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg" 
                  alt="Dashboard preview" 
                  className="rounded-lg shadow-xl animate-float hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-600 rounded-full opacity-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary-800 rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Moneta.ai Works</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Our platform streamlines the process of managing and analyzing your financial data
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  <div className="mb-4 p-3 inline-block rounded-full bg-primary-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="text-2xl font-bold text-gray-900 mb-2">Ready to get started?</div>
                      <p className="text-gray-500">Upload your first bank statement in less than 2 minutes.</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-auto">
                      <Button size="lg" onClick={() => navigate('/app')}>Try it for free</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Modal */}
        {showDemo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4 animate-scale-in">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/your-demo-video-id"
                  title="Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 flex justify-end">
                <Button onClick={() => setShowDemo(false)}>Close</Button>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Choose the plan that best fits your needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden ${
                    tier.highlight 
                      ? 'ring-2 ring-primary-500 shadow-lg' 
                      : 'border border-gray-200 shadow-sm'
                  }`}
                >
                  {tier.highlight && (
                    <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                      <span className="ml-2 text-gray-500">{tier.period}</span>
                    </div>
                    <p className="text-gray-500 mb-6">{tier.description}</p>
                    
                    <Button 
                      variant={tier.highlight ? "primary" : "outline"}
                      fullWidth
                      className="mb-6"
                    >
                      {tier.cta}
                    </Button>
                    
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Here's what our customers are saying about Moneta.ai
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <div key={testimonial} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    "Moneta.ai has completely transformed how I manage my finances. The automatic categorization saves me hours every month, and the insights have helped me cut my unnecessary spending by 15%."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <span className="text-primary-700 font-medium">
                        {String.fromCharCode(64 + testimonial)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {testimonial === 1 ? 'Sarah Johnson' : testimonial === 2 ? 'Michael Chen' : 'Alex Rodriguez'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial === 1 ? 'Small Business Owner' : testimonial === 2 ? 'Financial Analyst' : 'Freelancer'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your financial analysis?</h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are saving time and gaining insights with Moneta.ai
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={() => navigate('/app')}
                className="text-white"
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-primary-800"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo className="h-8 mb-4" />
              <p className="text-sm">
                Turning financial data into actionable insights since 2025.
              </p>
              <div className="mt-4 flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-xs">{social[0].toUpperCase()}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {['Product', 'Company', 'Resources'].map((category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-400 hover:text-white">
                        {category === 'Product' 
                          ? ['Features', 'Pricing', 'Integrations', 'Updates'][item-1]
                          : category === 'Company'
                            ? ['About Us', 'Careers', 'Contact', 'Blog'][item-1]
                            : ['Documentation', 'Guides', 'API', 'Support'][item-1]
                        }
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              © 2025 Moneta.ai. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a key={link} href="#" className="text-sm text-gray-400 hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;