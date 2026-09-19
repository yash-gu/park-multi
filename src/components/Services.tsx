import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, } from 'lucide-react';
import { Treatment, TreatmentCategory } from '../types';
import { CATEGORIES, CATEGORY_DESCRIPTIONS, TREATMENTS } from '../data/treatments';
import { TreatmentCard } from './TreatmentCard';

interface ServicesProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatmentId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectTreatment,
  onBookTreatment,
  searchQuery,
  setSearchQuery,
}) => {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | 'All'>('General Dentistry');

  // Filtered treatments based on Category and Search Query
  const filteredTreatments = useMemo(() => {
    return TREATMENTS.filter((treatment) => {
      const matchesCategory = activeCategory === 'All' || treatment.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        treatment.name.toLowerCase().includes(query) ||
        treatment.description.toLowerCase().includes(query) ||
        treatment.features.some((f) => f.toLowerCase().includes(query)) ||
        treatment.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-12 lg:py-16 bg-[#f8fafc] border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-50 border border-sky-200/80 text-sky-800 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Comprehensive Dental Care</span>
          </div>
          
          <h2 className="font-outfit text-3xl sm:text-3xl lg:text-3xl font-extrabold text-[#0a2540] tracking-tight">
            Multispeciality Dental Services
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Providing a comprehensive range of <span className="font-bold text-[#00478d]">39 specialized dental treatments</span> tailored to your unique oral health needs using state-of-the-art technology.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all 39 treatments (e.g. Root Canal, Aligners, Veneers)..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-slate-200/90 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00478d] focus:border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scrollbar-none">
          <button
            onClick={() => {
              setActiveCategory('All');
            }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeCategory === 'All'
                ? 'bg-[#00478d] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
            }`}
          >
            <span>All Services</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeCategory === 'All' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              39
            </span>
          </button>

          {CATEGORIES.map((category) => {
            const count = TREATMENTS.filter((t) => t.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                }}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#00478d] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Banner Description */}
        {activeCategory !== 'All' && !searchQuery && (
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 mb-8 max-w-4xl mx-auto shadow-xs text-center sm:flex items-center justify-between gap-4">
            <div className="text-left mb-2 sm:mb-0">
              <span className="text-xs uppercase tracking-wider font-bold text-[#006970] block">
                Category Overview
              </span>
              <p className="text-sm font-medium text-slate-700 mt-0.5">
                {CATEGORY_DESCRIPTIONS[activeCategory]}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xs font-bold bg-teal-50 border border-teal-200/70 text-[#006970] px-3.5 py-1.5 rounded-full">
                {filteredTreatments.length} Available Procedures
              </span>
            </div>
          </div>
        )}

        {/* Search Query Feedback */}
        {searchQuery && (
          <div className="mb-6 text-sm text-slate-600 flex items-center justify-between">
            <span>
              Showing <strong>{filteredTreatments.length}</strong> matching procedures for &ldquo;
              <strong>{searchQuery}</strong>&rdquo;
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#00478d] hover:underline font-semibold text-xs"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Grid Layout of Treatment Cards */}
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                onSelectTreatment={onSelectTreatment}
                onBookTreatment={onBookTreatment}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center max-w-md mx-auto my-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-[#0a2540]">No Procedures Found</h3>
            <p className="text-sm text-slate-600">
              We couldn&apos;t find any treatment matching your search criteria. Please try another keyword or browse by category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="bg-gradient-to-r from-[#00478d] to-[#005fb8] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:shadow-md transition-all"
            >
              View All 39 Treatments
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
