import { siteConfig } from "@/lib/site";

export function MedicalDisclaimer() {
  return (
    <aside className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-500">
      <p className="font-semibold text-slate-600">Medical disclaimer</p>
      <p className="mt-2">
        Information on this page is for general education only and does not
        replace a consultation with {siteConfig.name} or another qualified ENT
        specialist. Do not delay emergency care for serious symptoms such as
        severe breathing difficulty, heavy bleeding, or sudden hearing loss.
        Diagnosis and treatment plans are provided only after an in-person
        examination.
      </p>
    </aside>
  );
}
