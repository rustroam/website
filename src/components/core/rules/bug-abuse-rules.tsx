import { RuleSection } from "./rule-section";

export function BugAbuseRules() {
  return (
    <RuleSection
      title='Game Integrity'
      notAllowed={[
        {
          text: "Exploiting unintended glitches, bugs, or system vulnerabilities for personal gain",
        },
        {
          text: "Using terrain anomalies to construct unraidable bases or conceal resources",
        },
        {
          text: "Taking advantage of plugin errors or safe zone weaknesses to benefit unfairly",
        },
      ]}
      allowed={[
        {
          text: "Using creative building techniques like stacked floors or underground bunkers, as long as they remain vulnerable to raids",
        },
      ]}
    />
  );
}
