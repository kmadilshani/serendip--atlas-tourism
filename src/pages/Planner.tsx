"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const TRAVEL_STYLES = [
  { id: "slow", label: "Slow & soulful", note: "Longer stays, unhurried local rhythm" },
  { id: "classic", label: "Island highlights", note: "A balanced first Ceylon journey" },
  { id: "active", label: "Wild & active", note: "Highland hikes, surf & jeep safaris" },
  { id: "quiet", label: "Private retreat", note: "Wellness, Ayurveda & serene stays" },
];

const INTERESTS = ["Ancient cities", "Tea country", "Wildlife safaris", "Southern coast", "Ceylon cuisine", "Wellness & Ayurveda"];

const ROUTES: Record<string, { title: string; places: string; image: string }> = {
  slow: {
    title: "The Serendip Slow Road",
    places: "Galle · Tangalle · Ella · Kandy",
    image: "https://images.unsplash.com/photo-1704797389166-c7dac99fc633?w=1400&h=1000&fit=crop&auto=format",
  },
  classic: {
    title: "The Island Compass",
    places: "Sigiriya · Kandy · Ella · Galle",
    image: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=1400&h=1000&fit=crop&auto=format",
  },
  active: {
    title: "The Wild Meridian",
    places: "Knuckles · Ella · Udawalawe · Mirissa",
    image: "https://images.unsplash.com/photo-1622061662418-fc6887d7915d?w=1400&h=1000&fit=crop&auto=format",
  },
  quiet: {
    title: "The Quiet Tropics",
    places: "Dambulla · Hatton · Bentota · Galle",
    image: "https://images.unsplash.com/photo-1566976273017-6e6df9bbdbee?w=1400&h=1000&fit=crop&auto=format",
  },
};

export default function Planner() {
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState("classic");
  const [interests, setInterests] = useState<string[]>(["Tea country", "Wildlife safaris"]);
  const [details, setDetails] = useState({ month: "February", days: "10", travellers: "2", budget: "Boutique" });
  const [sent, setSent] = useState(false);

  const route = useMemo(() => ROUTES[style], [style]);
  const toggleInterest = (interest: string) => {
    setInterests(current => current.includes(interest) ? current.filter(item => item !== interest) : [...current, interest]);
  };

  return (
    <div className="planner-page">
      <section className="planner-hero">
        <img src={route.image} alt="A scenic Sri Lankan journey selected for your route" className="planner-hero-image" />
        <div className="planner-veil" />
        <div className="planner-hero-copy">
          <span className="section-label">The Atlas Route Builder</span>
          <h1>Not a formulaic package.<br /><em>Your bespoke island rhythm.</em></h1>
          <p>Answer three quick questions to sketch a Sri Lanka route tailored to your personal travel style.</p>
          <div className="planner-progress" aria-label={`Planner step ${step} of 3`}>
            {[1, 2, 3].map(item => <span key={item} className={item <= step ? "active" : ""} />)}
          </div>
        </div>
      </section>

      <section className="planner-workspace">
        <div className="planner-panel">
          {!sent && step === 1 && (
            <div className="planner-step">
              <span className="step-count">01 / Travel Pace</span>
              <h2>How should your journey feel?</h2>
              <p className="planner-intro">Choose the pace that matches your travel style.</p>
              <div className="choice-grid">
                {TRAVEL_STYLES.map(item => (
                  <button key={item.id} aria-pressed={style === item.id} className={`choice-card ${style === item.id ? "selected" : ""}`} onClick={() => setStyle(item.id)}>
                    <span>{item.label}</span>
                    <small>{item.note}</small>
                  </button>
                ))}
              </div>
            </div>
          )}

          {!sent && step === 2 && (
            <div className="planner-step">
              <span className="step-count">02 / Experiences</span>
              <h2>What draws you to Sri Lanka?</h2>
              <p className="planner-intro">Select your main areas of interest. We will seamlessly connect them.</p>
              <div className="interest-grid">
                {INTERESTS.map(item => (
                  <button key={item} aria-pressed={interests.includes(item)} className={interests.includes(item) ? "interest selected" : "interest"} onClick={() => toggleInterest(item)}>
                    <span>{item}</span><b>{interests.includes(item) ? "Added" : "Add"}</b>
                  </button>
                ))}
              </div>
            </div>
          )}

          {!sent && step === 3 && (
            <div className="planner-step">
              <span className="step-count">03 / Key Details</span>
              <h2>Shape your itinerary.</h2>
              <p className="planner-intro">Our local travel designer will customize this draft for you.</p>
              <div className="detail-grid">
                <label>Travel month<select value={details.month} onChange={e => setDetails({ ...details, month: e.target.value })}>{["January", "February", "March", "April", "July", "August", "December"].map(v => <option key={v}>{v}</option>)}</select></label>
                <label>Duration<select value={details.days} onChange={e => setDetails({ ...details, days: e.target.value })}>{["7", "10", "14", "21"].map(v => <option key={v}>{v} days</option>)}</select></label>
                <label>Travellers<select value={details.travellers} onChange={e => setDetails({ ...details, travellers: e.target.value })}>{["1", "2", "3", "4", "5+"].map(v => <option key={v}>{v}</option>)}</select></label>
                <label>Stay style<select value={details.budget} onChange={e => setDetails({ ...details, budget: e.target.value })}>{["Good value", "Comfort", "Boutique", "Barefoot luxury"].map(v => <option key={v}>{v}</option>)}</select></label>
              </div>
            </div>
          )}

          {sent && (
            <div className="planner-step planner-success">
              <span className="step-count">Your Itinerary Draft</span>
              <h2>{route.title}</h2>
              <p className="route-line">{route.places}</p>
              <p>A {details.days}-day {details.budget.toLowerCase()} journey for {details.travellers} traveller{details.travellers === "1" ? "" : "s"}, focused around {interests.length ? interests.join(", ").toLowerCase() : "the island's natural highlights"}.</p>
              <div className="planner-actions">
                <Link href="/contact" className="btn-primary">Send to a Travel Designer</Link>
                <button className="btn-ghost" onClick={() => { setSent(false); setStep(1); }}>Start Over</button>
              </div>
            </div>
          )}

          {!sent && (
            <div className="planner-actions">
              {step > 1 && <button className="btn-ghost" onClick={() => setStep(value => value - 1)}>Back</button>}
              <button className="btn-primary" onClick={() => step < 3 ? setStep(value => value + 1) : setSent(true)}>
                {step < 3 ? "Continue" : "Reveal My Route"}
              </button>
            </div>
          )}
        </div>

        <aside className="route-preview">
          <span>Live Route Draft</span>
          <h3>{route.title}</h3>
          <p>{route.places}</p>
          <div className="route-map">
            <i /><i /><i /><i />
          </div>
          <dl>
            <div><dt>Pace</dt><dd>{TRAVEL_STYLES.find(item => item.id === style)?.label}</dd></div>
            <div><dt>Focus</dt><dd>{interests.length || 0} interests</dd></div>
            <div><dt>Length</dt><dd>{details.days} days</dd></div>
          </dl>
        </aside>
      </section>
    </div>
  );
}
