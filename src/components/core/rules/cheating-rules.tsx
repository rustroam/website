import { RuleSection } from "./rule-section";

export function CheatingRules() {
  return (
    <RuleSection
      title='Fair Play Policy'
      notAllowed={[
        {
          text: "Using unauthorized third-party software or modifications",
        },
        {
          text: "Employing visual filters or enhancements that provide unfair advantages, especially during nighttime",
        },
        {
          text: "Attempting to bypass any server restrictions or administrative bans",
        },
        {
          text: "Playing on accounts with Easy Anti-Cheat violations within the last 6 months",
        },
        {
          text: "Maintaining more than 2 alternate accounts that have been banned by Easy Anti-Cheat",
        },
      ]}
    />
  );
}
