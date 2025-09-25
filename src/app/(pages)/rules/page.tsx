import { BugAbuseRules } from "@/components/core/rules/bug-abuse-rules";
import { ChatRules } from "@/components/core/rules/chat-rules";
import { CheatingRules } from "@/components/core/rules/cheating-rules";
import { GroupLimitRules } from "@/components/core/rules/group-limit-rules";
import { StaffPolicies } from "@/components/core/rules/staff-policies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServerRulesPage() {
  return (
    <main className='relative flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center'>
      <div className='container relative z-10 flex max-w-4xl flex-col items-center gap-8 px-4 py-16'>
        <div className='mb-8 text-center'>
          <h1 className='mb-4 font-bold text-3xl tracking-tight'>
            Server Rules
          </h1>
          <p className='text-muted-foreground'>
            Please read and understand these rules before playing on our server.
          </p>
        </div>

        <Accordion type='single' collapsible className='w-full space-y-4'>
          <AccordionItem value='chat-rules' className='px-6'>
            <AccordionTrigger className='text-left'>
              Communication Guidelines
            </AccordionTrigger>
            <AccordionContent>
              <ChatRules />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='cheating-rules' className='px-6'>
            <AccordionTrigger className='text-left'>
              Fair Play Policy
            </AccordionTrigger>
            <AccordionContent>
              <CheatingRules />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='bug-abuse-rules' className='px-6'>
            <AccordionTrigger className='text-left'>
              Game Integrity
            </AccordionTrigger>
            <AccordionContent>
              <BugAbuseRules />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='group-limit-rules' className='px-6'>
            <AccordionTrigger className='text-left'>
              Team Organization
            </AccordionTrigger>
            <AccordionContent>
              <GroupLimitRules />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='staff-policies' className='px-6'>
            <AccordionTrigger className='text-left'>
              Administration Guidelines
            </AccordionTrigger>
            <AccordionContent>
              <StaffPolicies />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
