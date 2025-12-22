
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6 text-navy-950">
              <span className="material-symbols-outlined text-3xl">bolt</span>
              <span className="font-display text-2xl uppercase tracking-tighter">108 Performance</span>
            </div>
            <p className="text-gray-500 mb-6 font-medium">
              Master Service Offerings Guide<br/>December 2025
            </p>
          </div>
          <div>
            <h4 className="font-bold text-navy-950 mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a className="hover:text-brand-primary transition-colors" href="#">Performance Training</a></li>
              <li><a className="hover:text-brand-primary transition-colors" href="#">Biomechanics Lab</a></li>
              <li><a className="hover:text-brand-primary transition-colors" href="#">Remote Coaching</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-navy-950 mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a className="hover:text-brand-primary transition-colors" href="#">About 108</a></li>
              <li><a className="hover:text-brand-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-brand-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-navy-950 mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4">
              {['photo_camera', 'alternate_email', 'play_circle'].map((icon) => (
                <a key={icon} className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-navy-950 hover:bg-navy-950 hover:text-white transition-all duration-300" href="#">
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 text-xs font-bold text-gray-400 flex flex-col md:flex-row justify-between uppercase tracking-wider">
          <p>© 2025 108 Performance. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
