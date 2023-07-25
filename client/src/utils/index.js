import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];
  // if the randomPrompt is the same as the user prompt then return a different prompt
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
