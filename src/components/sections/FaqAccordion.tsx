"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  const allValues = items.map((_, i) => `item-${i}`);
  return (
    <Accordion type="multiple" defaultValue={allValues} className="w-full">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
