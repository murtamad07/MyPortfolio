"use client";

import { useCallback, useEffect, useRef } from "react";
import { IoArrowForwardOutline, IoCloseOutline } from "react-icons/io5";

import {
  caseStudySections,
  type CaseStudy,
} from "@/lib/case-studies";

type CaseStudyModalProps = {
  href: string | null;
  study: CaseStudy | null;
  onClose: () => void;
};

export function CaseStudyModal({ href, study, onClose }: CaseStudyModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finishClose = useCallback(() => {
    dialogRef.current?.close();
    onClose();
  }, [onClose]);

  const requestClose = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog?.open || dialog.classList.contains("is-closing")) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }

    dialog.classList.add("is-closing");
    closeTimerRef.current = setTimeout(finishClose, 160);
  }, [finishClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !study) return;

    dialog.classList.remove("is-closing");
    dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [study]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="case-study-title"
      className="case-study-dialog m-auto h-[100dvh] max-h-[100dvh] w-full max-w-none overflow-hidden border border-white/10 bg-[#080d14] p-0 text-slate-100 sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:w-[min(72rem,calc(100vw-3rem))]"
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      {study && (
        <article className="max-h-full overflow-y-auto overscroll-contain">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#080d14]/95 px-5 py-4 backdrop-blur sm:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
              Case study / {study.status}
            </p>
            <button
              autoFocus
              type="button"
              onClick={requestClose}
              aria-label="Close case study"
              className="grid h-11 w-11 place-items-center border border-white/15 text-xl text-slate-300 transition hover:border-emerald-400/50 hover:text-white"
            >
              <IoCloseOutline aria-hidden="true" />
            </button>
          </header>

          <div className="px-5 pb-12 pt-10 sm:px-8 sm:pb-16 lg:px-12 lg:pt-14">
            <div className="max-w-4xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-300">
                {study.role}
              </p>
              <h2
                id="case-study-title"
                className="text-balance mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
              >
                {study.title}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {study.overview}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 transition hover:text-emerald-200"
                  >
                    {study.liveUrl}
                    <IoArrowForwardOutline aria-hidden="true" />
                  </a>
                )}
                {href && (
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                  >
                    Open permanent case study page
                    <IoArrowForwardOutline aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-12 border-b border-white/10">
              {caseStudySections(study).slice(1).map(([title, items]) => (
                <section
                  key={title}
                  className="grid gap-4 border-t border-white/10 py-7 sm:py-8 lg:grid-cols-[14rem_1fr] lg:gap-10"
                >
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  {items.length === 1 ? (
                    <p className="max-w-3xl leading-7 text-slate-300">
                      {items[0]}
                    </p>
                  ) : (
                    <ul className="max-w-3xl space-y-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-5 leading-7 text-slate-300 before:absolute before:left-0 before:top-[0.72rem] before:h-px before:w-2 before:bg-emerald-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>
      )}
    </dialog>
  );
}
