import React, { useEffect } from 'react';
import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import StatsBar from './componentes/StatsBar';
import About from './componentes/About';
import Skills from './componentes/Skills';
import Projects from './componentes/Projects';
import Process from './componentes/Process';
import Services from './componentes/Services';
import Experience from './componentes/Experience';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
import WhatsAppFloat from './componentes/WhatsAppFloat';

function App() {
  // Particles canvas animation
  useEffect(() => {
    const c = document.getElementById('particles-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    let W, H, P = [], animId;

    function Pt() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - .5) * .35;
      this.vy = (Math.random() - .5) * .35;
      this.r = Math.random() * 1.8 + .4;
      this.o = Math.random() * .45 + .08;
    }

    function resize() { W = c.width = window.innerWidth; H = c.height = window.innerHeight; }

    function init() {
      P = [];
      const n = Math.floor(W * H / 11000);
      for (let i = 0; i < n; i++) P.push(new Pt());
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      P.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.o})`;
        ctx.fill();
      });
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,212,255,${(1 - d / 120) * .1})`;
            ctx.lineWidth = .5;
            ctx.moveTo(P[i].x, P[i].y);
            ctx.lineTo(P[j].x, P[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }

    resize(); init(); draw();
    const onResize = () => { resize(); init(); };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  // Reveal on scroll + skill bars + counters
  useEffect(() => {
    function animCount(el) {
      if (el._done) return;
      el._done = true;
      const target = +el.dataset.target, suffix = el.dataset.suffix || '+';
      let start, dur = 1800;
      const step = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    }

    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.skill-bar-fill').forEach(b => {
            setTimeout(() => { b.style.width = b.dataset.width + '%'; }, 250);
          });
          e.target.querySelectorAll('.stat-num').forEach(animCount);
        }
      });
    }, { threshold: 0.14 });

    const skillObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.skill-bar-fill').forEach(b => {
          setTimeout(() => { b.style.width = b.dataset.width + '%'; }, 300);
        });
      });
    }, { threshold: 0.1 });

    const cntObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.stat-num').forEach(animCount);
      });
    }, { threshold: 0.5 });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
      document.querySelectorAll('.skill-category').forEach(el => skillObs.observe(el));
      document.querySelectorAll('#stats-bar').forEach(el => cntObs.observe(el));
    }, 100);

    return () => { revealObs.disconnect(); skillObs.disconnect(); cntObs.disconnect(); };
  }, []);

  // Active nav link highlight on scroll
  useEffect(() => {
    const onScroll = () => {
      const secs = document.querySelectorAll('section[id]');
      const pos = window.scrollY + 90;
      secs.forEach(s => {
        if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
          document.querySelectorAll('.nav-links a').forEach(a => {
            a.style.color = a.getAttribute('href') === '#' + s.id ? 'var(--cyan)' : '';
          });
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <canvas id="particles-canvas"></canvas>
      <div className="bg-code" style={{ top: '15%', left: '2%', animation: 'bg-code-drift 28s linear infinite' }}>
        {"const developer = { name: 'Oscar Osorio', stack: ['React','CSS3'], passion: true };"}
      </div>
      <div className="bg-code" style={{ top: '55%', right: '2%', animation: 'bg-code-drift 35s linear infinite 8s' }}>
        {"function buildAmazingWeb(idea) { return new Promise(resolve => resolve(idea.transform())); }"}
      </div>
      <div className="bg-code" style={{ top: '80%', left: '3%', animation: 'bg-code-drift 32s linear infinite 4s' }}>
        {"import React, { useState, useEffect } from 'react'; // Clean code, always."}
      </div>

      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
