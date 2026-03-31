import { useEffect } from 'react';

export interface ProjectPreviewItem {
  title: string;
  slug: string;
  type: string;
  status: string;
  summary: string;
  shortDescription: string;
  stack: string[];
  tags: string[];
  coverImage: string;
  externalUrl?: string;
  year: number;
  clientOrPersonal: string;
}

interface Props {
  projects: ProjectPreviewItem[];
  locale: 'en' | 'pt';
}

const copy = {
  en: {
    visit: 'Visit site',
    details: 'See more details',
    close: 'Close',
    stack: 'Stack',
    status: 'Status',
    year: 'Year',
    fallback: 'Project preview',
  },
  pt: {
    visit: 'Visitar site',
    details: 'Ver mais detalhes',
    close: 'Fechar',
    stack: 'Stack',
    status: 'Status',
    year: 'Ano',
    fallback: 'Preview do projeto',
  },
};

export default function ProjectPreviewModal({ projects, locale }: Props) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const active = document.querySelector<HTMLDialogElement>('dialog[data-project-modal][open]');
        active?.close();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const dialogs = Array.from(document.querySelectorAll<HTMLDialogElement>('dialog[data-project-modal]'));

    const openModal = (slug: string) => {
      const target = dialogs.find((dialog) => dialog.dataset.slug === slug);
      target?.showModal();
      document.body.style.overflow = 'hidden';
    };

    const closeModal = (dialog: HTMLDialogElement) => {
      dialog.close();
      document.body.style.overflow = '';
    };

    const onOpen = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const slug = target.dataset.projectSlug;
      if (!slug) return;
      openModal(slug);
    };

    const triggers = Array.from(document.querySelectorAll<HTMLElement>('[data-project-trigger]'));
    triggers.forEach((trigger) => trigger.addEventListener('click', onOpen));

    dialogs.forEach((dialog) => {
      const onDialogClick = (event: MouseEvent) => {
        const rect = dialog.getBoundingClientRect();
        const isInside =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (!isInside) {
          closeModal(dialog);
        }
      };

      const closeButtons = Array.from(dialog.querySelectorAll<HTMLElement>('[data-close-modal]'));
      closeButtons.forEach((button) => button.addEventListener('click', () => closeModal(dialog)));
      dialog.addEventListener('click', onDialogClick);
      dialog.addEventListener('close', () => {
        document.body.style.overflow = '';
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger.removeEventListener('click', onOpen));
    };
  }, []);

  const t = copy[locale];

  return (
    <>
      {projects.map((project) => (
        <dialog
          key={project.slug}
          data-project-modal
          data-slug={project.slug}
          className="m-auto w-[min(92vw,52rem)] rounded-[2rem] border border-white/10 bg-neutral-950 p-0 text-white shadow-2xl backdrop:bg-black/70"
        >
          <div className="grid max-h-[85vh] overflow-hidden md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-72 bg-black">
              <img src={project.coverImage} alt={project.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <span className="pill">{project.type}</span>
                <span className="pill">{project.clientOrPersonal}</span>
              </div>
            </div>

            <div className="flex max-h-[85vh] flex-col overflow-y-auto p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{project.status}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
                </div>
                <button
                  type="button"
                  data-close-modal
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-neutral-300 transition hover:border-white/20 hover:text-white"
                >
                  {t.close}
                </button>
              </div>

              <p className="mt-5 text-base leading-8 text-neutral-300">{project.summary || project.shortDescription}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="eyebrow">{t.status}</p>
                  <p className="mt-2 text-sm text-neutral-200">{project.status}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="eyebrow">{t.year}</p>
                  <p className="mt-2 text-sm text-neutral-200">{project.year}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="eyebrow">{t.stack}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="action-link action-link-primary"
                  >
                    {t.visit}
                  </a>
                )}
                <a href={`/${locale}/projects/${project.slug}`} className="action-link action-link-secondary">
                  {t.details}
                </a>
              </div>
            </div>
          </div>
        </dialog>
      ))}
    </>
  );
}