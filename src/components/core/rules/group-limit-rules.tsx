import { RuleSection } from "./rule-section";

export function GroupLimitRules() {
  return (
    <RuleSection
      title='Team Organization'
      notAllowed={[
        {
          text: "Having more players in your group than the server limit allows",
        },
        {
          text: "Forming secret alliances with other groups to gain advantages in combat or resource gathering",
        },
        {
          text: "Sharing access codes, turret permissions, or cupboard authorizations with external groups",
        },
        {
          text: "Failing to treat all non-allied groups as hostile in active combat zones or key locations",
        },
      ]}
      allowed={[
        {
          text: "Replacing team members only when they are permanently inactive and won't return for the current wipe cycle",
        },
        {
          text: "When changing team composition, immediately updating all security codes and removing old authorizations",
        },
        {
          text: "Transferring ownership of your entire base under the same conditions as member replacement",
        },
        {
          text: "Conducting legitimate trades through vending machines, trade interfaces, or in designated safe areas",
        },
        {
          text: "Maintaining peaceful relations with other groups when no combat has been initiated in the vicinity",
        },
        {
          text: "Once combat begins, you must commit fully to one side and cannot switch allegiances",
        },
      ]}
    />
  );
}
