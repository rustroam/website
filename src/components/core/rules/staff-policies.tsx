import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StaffPolicies() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='font-semibold text-lg'>
          Administration Guidelines
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div>
          <h4 className='mb-2 font-medium'>Server Moderators</h4>
          <p className='mb-2 text-muted-foreground text-sm'>
            Trusted community members with chat moderation permissions who help
            maintain communication standards and provide general assistance.
          </p>
        </div>

        <div>
          <h4 className='mb-2 font-medium'>Server Administrators & Owners</h4>
          <p className='mb-2 text-muted-foreground text-sm'>
            Full server authority focused on monitoring, investigating
            suspicious activity, and handling formal reports. They do not
            participate in gameplay.
          </p>
        </div>

        <div>
          <h4 className='mb-2 font-medium text-red-600 dark:text-red-400'>
            Administrative Restrictions:
          </h4>
          <ul className='space-y-1'>
            <li className='text-muted-foreground text-sm'>
              • Staff cannot remove structures or objects on behalf of players
            </li>
            <li className='text-muted-foreground text-sm'>
              • No replacement of items lost due to game bugs
            </li>
            <li className='text-muted-foreground text-sm'>
              • Player teleportation is not permitted
            </li>
            <li className='text-muted-foreground text-sm'>
              • Cannot modify the game world or environment
            </li>
          </ul>
          <p className='mt-2 text-muted-foreground text-sm'>
            Violation of these restrictions constitutes administrative abuse and
            should be reported to server leadership.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
