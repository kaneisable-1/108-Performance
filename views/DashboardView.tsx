
import React from 'react';

const DashboardView: React.FC = () => {
  return (
    <div className="bg-offwhite min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Welcome Header */}
        <div className="bg-navy-950 p-12 text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 font-display text-[10rem] opacity-5 select-none pointer-events-none">PRO</div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="text-brand-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2">Active Training</p>
              <h2 className="font-display text-5xl uppercase leading-none">Welcome, Jake</h2>
              <p className="text-gray-400 mt-2 uppercase font-bold text-xs">Virtual Pro Member since Dec 2025</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-brand-primary px-8 py-3 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-navy-950 transition-all">Submit Video</button>
              <button className="bg-white/10 px-8 py-3 font-black uppercase text-[10px] tracking-widest border border-white/20 hover:bg-white/20 transition-all">Support</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { l: 'Exit Velo', v: '102.4', u: 'MPH' },
                { l: 'Bat Speed', v: '78.2', u: 'MPH' },
                { l: 'Vertical', v: '18.4"', u: 'Rise' }
              ].map((s) => (
                <div key={s.l} className="bg-white p-6 border border-gray-200">
                  <p className="text-[10px] font-black uppercase text-gray-400 mb-2">{s.l}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-athletic text-3xl text-navy-950">{s.v}</span>
                    <span className="text-[10px] font-bold text-gray-400">{s.u}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Queue */}
            <div className="bg-white p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-2xl uppercase">Video Feedback Queue</h3>
                <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-black px-3 py-1 uppercase rounded-full tracking-widest">3 Pending</span>
              </div>
              <div className="space-y-4">
                {[
                  { date: 'Today', status: 'In Review', coach: 'Coach Eugene' },
                  { date: 'Dec 12', status: 'Complete', coach: 'Coach Jake' },
                  { date: 'Dec 08', status: 'Complete', coach: 'Coach Eugene' }
                ].map((v) => (
                  <div key={v.date} className="flex items-center justify-between p-4 bg-offwhite hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-navy-950 flex items-center justify-center text-white"><span className="material-symbols-outlined">play_circle</span></div>
                      <div>
                        <p className="font-bold text-sm uppercase">{v.date} Training Session</p>
                        <p className="text-[10px] font-medium text-gray-400 uppercase">{v.coach}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${v.status === 'Complete' ? 'text-green-600' : 'text-orange-500'}`}>{v.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Schedule */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="font-display text-2xl uppercase mb-6">Up Next</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-brand-primary">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-brand-primary rounded-full"></div>
                  <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-1">Dec 18 • 3:30 PM</p>
                  <p className="font-bold text-navy-950 uppercase text-sm">Hitting Skill Class</p>
                  <p className="text-[10px] text-gray-400 uppercase">Knoxville Facility • Cage 4</p>
                </div>
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Dec 20 • 5:00 PM</p>
                  <p className="font-bold text-navy-950/50 uppercase text-sm">RFD Movement Class</p>
                </div>
              </div>
              <button className="w-full mt-8 py-4 border-2 border-navy-950 text-navy-950 font-black uppercase text-[10px] tracking-widest hover:bg-navy-950 hover:text-white transition-all">Book New Class</button>
            </div>

            <div className="bg-brand-primary p-8 text-white">
              <h3 className="font-display text-2xl uppercase mb-2">Fly-In Status</h3>
              <p className="text-[10px] font-bold uppercase opacity-80 mb-6">You have 4 of 6 trips remaining</p>
              <button className="bg-white text-brand-primary w-full py-4 font-black uppercase text-[10px] tracking-widest hover:bg-navy-950 hover:text-white transition-all">Schedule Fly-In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
