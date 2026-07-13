import { MessageSquare } from "lucide-react";
import { SITE } from "@/lib/site";

export function TextPhotosCard() {
  return (
    <aside className="mt-6 rounded-2xl border border-brand/30 bg-cream p-6 sm:p-7">
      <div className="flex items-start gap-3">
        <MessageSquare className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden />
        <div className="flex-1">
          <h3 className="font-display text-lg font-extrabold text-ink">
            Got photos? Text them for a faster quote.
          </h3>
          <p className="mt-1 text-sm text-ink/75">
            Send a couple pics of your junk to{" "}
            <a href={`sms:${SITE.smsRaw}`} className="font-bold text-brand hover:underline">
              {SITE.phoneDisplay}
            </a>{" "}
            and we&apos;ll text you back a price — usually within the hour.
          </p>
          <a
            href={`sms:${SITE.smsRaw}`}
            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border-2 border-brand bg-white px-5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
          >
            <MessageSquare className="h-4 w-4" aria-hidden />
            Text {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </aside>
  );
}
