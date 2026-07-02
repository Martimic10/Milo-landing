export interface ScriptMessage {
  from: "user" | "milo";
  text: string;
}

export const heroConversation: ScriptMessage[] = [
  { from: "user", text: "Remember that my interview is Friday." },
  {
    from: "milo",
    text: "Got it — Friday's interview is locked in. I'll check in Thursday night so you can prep, then again Friday morning.",
  },
  { from: "user", text: "It's for the product design role." },
  {
    from: "milo",
    text: "Noted. I'll remind you to pull your portfolio highlights together beforehand — design interviews love a good case study.",
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
        text: "You mentioned wanting to unplug this week, so let's keep it light: Saturday morning hike, dinner with Sam that night, and Sunday completely free to recharge. Sound good?",
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
        text: "Saved: oat milk cortado, extra hot, no sugar. Next time you're deciding where to grab coffee, I'll point you toward places that actually get it right.",
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
        text: "Not yet — leg day's on your calendar for 6pm. You're on a 4-day streak, want a nudge an hour before so you don't lose it?",
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
        text: "I'm right here with you. Let's slow this down — forget the whole list for a second. What's the one thing weighing on you most right now?",
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
    reply:
      "Let's map it out together. Any must-do's for tomorrow, or should I start from your usual morning routine and build around that?",
  },
  {
    prompt: "Remember that I love sushi.",
    reply:
      "Got it — sushi's a favorite. Next time you're picking a spot for dinner or we're celebrating something, I'll have that in mind.",
  },
  {
    prompt: "Rewrite this email.",
    reply:
      "Paste it in and I'll tighten it up — clearer and more confident, but it'll still sound like you.",
  },
  {
    prompt: "Remind me to drink more water.",
    reply:
      "Done — I'll nudge you every couple hours starting now. Want me to ease off after 6pm so it doesn't wreck your sleep?",
  },
  {
    prompt: "I'm feeling stressed.",
    reply:
      "I hear you. Let's take one breath together — in for four, out for four. What's weighing on you most right now?",
  },
];

export const defaultReply =
  "I'm here for that — once Milo's live, I'll actually text you back for real. For now, try one of the prompts below and see how it feels.";
