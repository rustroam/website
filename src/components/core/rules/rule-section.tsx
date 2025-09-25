"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RuleItem {
  text: string;
  key?: string;
}

interface RuleSectionProps {
  title: string;
  notAllowed?: RuleItem[];
  allowed?: RuleItem[];
}

export function RuleSection({ title, notAllowed, allowed }: RuleSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='font-semibold text-lg'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {notAllowed && notAllowed.length > 0 && (
          <div>
            <h4 className='mb-2 font-medium text-red-600 dark:text-red-400'>
              What is NOT allowed:
            </h4>
            <ul className='space-y-1'>
              {notAllowed.map((rule, index) => (
                <li
                  key={rule.key || `not-allowed-${index}`}
                  className='text-muted-foreground text-sm'
                >
                  • {rule.text}
                </li>
              ))}
            </ul>
          </div>
        )}

        {allowed && allowed.length > 0 && (
          <div>
            <h4 className='mb-2 font-medium text-green-600 dark:text-green-400'>
              What is allowed:
            </h4>
            <ul className='space-y-1'>
              {allowed.map((rule, index) => (
                <li
                  key={rule.key || `allowed-${index}`}
                  className='text-muted-foreground text-sm'
                >
                  • {rule.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
