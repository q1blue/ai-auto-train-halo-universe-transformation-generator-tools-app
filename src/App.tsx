import React, { useState } from 'react';
import { 
  Globe as GlobeAlt, 
  Users, 
  Sword, 
  BookOpen, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Github,
  Disc as Discord,
  Twitter,
  Database,
  Code,
  FileCode,
  Book,
  Shield,
  Terminal,
  Gamepad2,
  Map,
  Rocket,
  History,
  Scroll,
  Compass
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');

  const navigation = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Features', href: '#features', section: 'features' },
    { name: 'Community', href: '#community', section: 'community' },
    { name: 'Knowledge Base', href: '#knowledge', section: 'knowledge' },
    { name: 'API', href: '#api', section: 'api' },
    { name: 'SDK', href: '#sdk', section: 'sdk' }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'characters', name: 'Characters' },
    { id: 'weapons', name: 'Weapons' },
    { id: 'vehicles', name: 'Vehicles' },
    { id: 'locations', name: 'Locations' },
    { id: 'lore', name: 'Lore' }
  ];

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="flex items-center space-x-2">
                <Gamepad2 className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-bold">Halo Universe</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.section)}
                    className={`${
                      activeSection === item.section
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    } transition duration-300`}
                    aria-current={activeSection === item.section ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.section)}
                  className={`${
                    activeSection === item.section
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } block w-full text-left px-3 py-2 rounded-md text-base font-medium`}
                  aria-current={activeSection === item.section ? 'page' : undefined}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50 transform scale-105 transition duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Halo Universe
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">
            Explore the epic saga of humanity's greatest conflict
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => handleNavigation('features')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Begin Journey
            </button>
            <button 
              onClick={() => handleNavigation('knowledge')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Discover the Universe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Map className="w-8 h-8" />}
              title="Explore Worlds"
              description="Journey through diverse planets and installations across the galaxy"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="Join Forces"
              description="Team up with Spartans and forge alliances in epic battles"
            />
            <FeatureCard 
              icon={<Sword className="w-8 h-8" />}
              title="Epic Combat"
              description="Master advanced weapons and engage in tactical warfare"
            />
            <FeatureCard 
              icon={<Scroll className="w-8 h-8" />}
              title="Rich Lore"
              description="Uncover the deep history and mysteries of the Halo universe"
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Join the Community</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Connect with millions of Spartans worldwide. Share strategies, stories, and forge lasting alliances.
          </p>
          <div className="flex justify-center items-center space-x-8 mb-12">
            <SocialLink icon={<Discord className="w-6 h-6" />} label="Discord" href="https://discord.gg/halouniversehub" />
            <SocialLink icon={<Twitter className="w-6 h-6" />} label="Twitter" href="https://twitter.com/halouniversehub" />
            <SocialLink icon={<Github className="w-6 h-6" />} label="GitHub" href="https://github.com/halouniversehub" />
          </div>
          <div className="inline-flex items-center space-x-4">
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg font-semibold">500,000+ active members</span>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section id="knowledge" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Knowledge Base</h2>
          
          {/* Category Navigation */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } px-4 py-2 rounded-lg transition duration-300`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <KnowledgeCard
              icon={<Book className="w-6 h-6" />}
              title="Characters"
              description="Learn about the heroes and villains of the Halo universe"
              category="characters"
              isVisible={activeCategory === 'all' || activeCategory === 'characters'}
            />
            <KnowledgeCard
              icon={<Sword className="w-6 h-6" />}
              title="Weapons"
              description="Explore the arsenal of humanity and the Covenant"
              category="weapons"
              isVisible={activeCategory === 'all' || activeCategory === 'weapons'}
            />
            <KnowledgeCard
              icon={<Rocket className="w-6 h-6" />}
              title="Vehicles"
              description="Discover the various vehicles used in combat"
              category="vehicles"
              isVisible={activeCategory === 'all' || activeCategory === 'vehicles'}
            />
            <KnowledgeCard
              icon={<Map className="w-6 h-6" />}
              title="Locations"
              description="Visit iconic locations across the galaxy"
              category="locations"
              isVisible={activeCategory === 'all' || activeCategory === 'locations'}
            />
            <KnowledgeCard
              icon={<History className="w-6 h-6" />}
              title="Timeline"
              description="Follow the chronological events of the Halo saga"
              category="lore"
              isVisible={activeCategory === 'all' || activeCategory === 'lore'}
            />
            <KnowledgeCard
              icon={<Scroll className="w-6 h-6" />}
              title="Factions"
              description="Learn about the major factions and their motivations"
              category="lore"
              isVisible={activeCategory === 'all' || activeCategory === 'lore'}
            />
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">API Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ApiCard
              icon={<Database className="w-6 h-6" />}
              title="REST API"
              description="Access Halo Universe data through our REST API"
              link="/api/docs"
            />
            <ApiCard
              icon={<Code className="w-6 h-6" />}
              title="GraphQL API"
              description="Query exactly what you need with our GraphQL endpoint"
              link="/api/graphql"
            />
            <ApiCard
              icon={<Shield className="w-6 h-6" />}
              title="Authentication"
              description="Secure your API requests with our authentication system"
              link="/api/auth"
            />
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section id="sdk" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Development Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SdkCard
              icon={<FileCode className="w-6 h-6" />}
              title="JavaScript SDK"
              description="Official JavaScript SDK for Halo Universe API"
              link="/sdk/js"
            />
            <SdkCard
              icon={<Terminal className="w-6 h-6" />}
              title="CLI Tools"
              description="Command-line tools for developers"
              link="/sdk/cli"
            />
            <SdkCard
              icon={<Compass className="w-6 h-6" />}
              title="Code Examples"
              description="Sample code and implementation guides"
              link="/sdk/examples"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="/press" className="text-gray-400 hover:text-white transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/docs" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="/api" className="text-gray-400 hover:text-white transition">API</a></li>
                <li><a href="/status" className="text-gray-400 hover:text-white transition">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="/forums" className="text-gray-400 hover:text-white transition">Forums</a></li>
                <li><a href="/discord" className="text-gray-400 hover:text-white transition">Discord</a></li>
                <li><a href="/events" className="text-gray-400 hover:text-white transition">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms</a></li>
                <li><a href="/licenses" className="text-gray-400 hover:text-white transition">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Halo Universe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function SocialLink({ icon, label, href }: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function KnowledgeCard({ icon, title, description, category, isVisible }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  isVisible: boolean;
}) {
  if (!isVisible) return null;

  return (
    <a
      href={`/wiki/${category}/${title.toLowerCase()}`}
      className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center text-blue-400 hover:text-blue-300 transition">
        <span>Learn more</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </a>
  );
}

function ApiCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="block bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition duration-300 transform hover:-translate-y-1"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center text-blue-400 hover:text-blue-300 transition">
        <span>View Documentation</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </a>
  );
}

function SdkCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center text-blue-400 hover:text-blue-300 transition">
        <span>Get Started</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </a>
  );
}

export default App;