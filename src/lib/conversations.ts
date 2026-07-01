export interface ScriptMessage {
  from: "user" | "milo";
  text: string;
}

export const heroConversation: ScriptMessage[] = [
  { from: "user", text: "Remember that my interview is Friday." },
  {
    from: "milo",
    text: "Absolutely. I'll remind you Thursday evening and check in Friday morning. You've got this.",
  },
  { from: "user", text: "Remember that I hate mushrooms." },
  {
    from: "milo",
    text: "Got it. I'll remember that for future restaurant recommendations.",
  },
];

export interface ScrollScene {
  label: string;
  headline: string;
  description: string;
  script: ScriptMessage[];
}

export const scrollScenes: ScrollScene[] = [
  {
    label: "Planning",
    headline: "Help me plan my weekend.",
    description:
      "Milo helps you shape a plan for your day, your week, or just the next hour — right in the thread.",
    script: [
      { from: "user", text: "Help me plan my weekend." },
      {
        from: "milo",
        text: "Let's do it. Saturday morning: hike. Saturday night: dinner with Sam. Sunday: rest. Sound good?",
      },
    ],
  },
  {
    label: "Memory",
    headline: "Remember my favorite coffee order.",
    description:
      "Tell Milo once, and it remembers — from coffee orders to birthdays to what matters most.",
    script: [
      { from: "user", text: "Remember my favorite coffee order." },
      {
        from: "milo",
        text: "Saved — oat milk cortado, extra hot. I'll remember for next time.",
      },
    ],
  },
  {
    label: "Accountability",
    headline: "Did I finish my workout today?",
    description:
      "Milo checks in on the things you told it mattered, without needing to be asked.",
    script: [
      { from: "user", text: "Did I finish my workout today?" },
      {
        from: "milo",
        text: "Not yet — you logged leg day for 6pm. Want a nudge in an hour?",
      },
    ],
  },
  {
    label: "Support",
    headline: "I'm feeling overwhelmed.",
    description:
      "When things feel like too much, Milo helps you slow down and take the next small step.",
    script: [
      { from: "user", text: "I'm feeling overwhelmed." },
      {
        from: "milo",
        text: "I'm here. Let's slow things down together. What's one small thing we can do in the next ten minutes?",
      },
    ],
  },
];

export interface SuggestedPrompt {
  prompt: string;
  reply: string;
}

export const suggestedPrompts: SuggestedPrompt[] = [
  {
    prompt: "Help me plan tomorrow.",
    reply: "Let's map it out. What's the first thing on your mind for tomorrow?",
  },
  {
    prompt: "Remember that I love sushi.",
    reply: "Got it — sushi's a favorite. I'll keep that in mind for recommendations.",
  },
  {
    prompt: "Rewrite this email.",
    reply: "Paste it in and I'll make it clearer, and more you.",
  },
  {
    prompt: "Remind me to drink more water.",
    reply: "Done. I'll check in every few hours starting now.",
  },
  {
    prompt: "I'm feeling stressed.",
    reply:
      "I hear you. Let's take one breath together — in for four, out for four. What's weighing on you most?",
  },
];

export const defaultReply =
  "I'm here for that. (This is a preview — the real Milo will text you back for real.)";
