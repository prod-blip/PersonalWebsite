import React from 'react';
import { Mail, } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SocialLink from './SocialLink';
import { SOCIAL_LINKS } from '../utils/constants';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection id="contact-section">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Congratulations!</h2>
          <p className="text-xl mb-8 opacity-90">You've reached the end of Atul's website.</p>
          <p className="text-lg mb-12 opacity-80">Thanks for scrolling all the way!</p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-12 hover:bg-white/20 transition-colors duration-300">
            <p className="text-lg leading-relaxed mb-8">
              He's put some effort into this and hopes it'll help find him new connections to grow
              further as a technologist, and a leader.
            </p>
            <p className="text-base opacity-90 mb-8">
              If you happen to be building a team where you could use someone of his skills and talents
              or if you know someone who might be, feel free to reach out using the button.
            </p>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-8 group">
                <span className="group-hover:scale-110 inline-block transition-transform duration-300">Get In Touch</span>
              </button>
            </a>

            {/* <p className="text-sm opacity-70">
              I can guarantee he'll appreciate it and will definitely respond, unless it's a phone call.
              He usually doesn't answer calls from unknown numbers and recommends you shouldn't either.
            </p> */}
          </div>

          <div className="mb-8">
            <p className="text-lg mb-4 opacity-90">Here are some of his social media links</p>
            <div className="flex justify-center space-x-6">
              <SocialLink href={SOCIAL_LINKS.email} icon={Mail} label="Email" />
              {/* <SocialLink href={SOCIAL_LINKS.linkedin} icon={SiLinkedin} label="LinkedIn" /> */}
              {/* <SocialLink href={SOCIAL_LINKS.twitter} icon={SiX} label="Twitter" /> */}
              {/* <SocialLink href={SOCIAL_LINKS.github} icon={SiGithub} label="GitHub" /> */}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;