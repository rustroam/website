import { RuleSection } from "./rule-section";

export function ChatRules() {
  return (
    <RuleSection
      title='Communication Guidelines'
      notAllowed={[
        {
          text: "Flooding chat with repetitive messages or promotional content",
        },
        {
          text: "Using discriminatory language based on race, sexual orientation, or other protected characteristics",
        },
        {
          text: "Harassing or disrespecting other players, especially server staff",
        },
        {
          text: "Publicly accusing others of breaking rules - use the proper reporting system instead",
        },
        {
          text: "Speaking negatively about our server community or staff",
        },
      ]}
      allowed={[
        {
          text: "Communicating in any language you prefer",
        },
        {
          text: "Expressing frustration during gameplay (within reason)",
        },
        {
          text: "Sharing information about raids, player versus player combat, and base locations with everyone",
        },
      ]}
    />
  );
}
