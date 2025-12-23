
import React from 'react';
import { ViewState } from '../App';

interface ServicesViewProps {
  onSelect: (view: ViewState) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ onSelect }) => {
  const tiers = [
    {
      id: 'tri-star',
      title: '108 Tri Star',
      desc: 'Local membership in Knoxville. Unlimited classes Monday - Thursday.',
      price: '$499/mo',
      features: ['90m Skill Classes', '60m RFD Classes', 'Weekly Progress Review']
    },
    {
      id: 'virtual',
      title: 'Virtual Experience',
      desc: 'Remote coaching via Bridge Athletic App. High-end video feedback.',
      price: '$550/mo',
      features: ['Daily Programming', 'Video Submission Portal', 'Monthly Zoom Strategy']
    },
    {
      id: 'virtual-pro',
      title: 'Virtual Pro',
      desc: '12-month commitment for elite athletes. Includes 6 fly-ins per year.',
      price: '$1,000/mo',
      features: ['6 Fly-In Trips Included', 'Priority Feedback Queue', '1-on-1 Recruiting Support']
    }
  ];

  return (
    <div className="bg-offwhite min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-6xl uppercase mb-4">The Pathway</h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto uppercase text-xs tracking-[0.2em]">Select the experience that fits your career trajectory.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.id} className="bg-white p-10 border border-gray-200 group hover:border-brand-primary transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-3xl uppercase mb-4 text-navy-950">{tier.title}</h3>
                <div className="font-athletic text-4xl text-brand-primary mb-6">{tier.price}</div>
                <p className="text-gray-500 mb-8 text-sm leading-relaxed">{tier.desc}</p>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-xs font-bold text-navy-950 uppercase tracking-wider">
                      <span className="material-symbols-outlined text-brand-primary">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => onSelect('experience')}
                className="w-full bg-navy-950 text-white py-4 font-black uppercase tracking-widest skew-btn hover:bg-brand-primary transition-all duration-300"
              >
                <div className="skew-inner">Apply For Tier</div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
