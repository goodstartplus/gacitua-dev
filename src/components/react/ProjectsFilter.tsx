import { useEffect, useMemo, useState } from 'react';

interface ProjectItem {
  slug: string;
  type: string;
  status: string;
}

interface Props {
  projects: ProjectItem[];
  locale: 'en' | 'pt';
}

const copy = {
  en: {
    allTypes: 'All types',
    allStatuses: 'All statuses',
    type: 'Type',
    status: 'Status',
  },
  pt: {
    allTypes: 'Todos os tipos',
    allStatuses: 'Todos os status',
    type: 'Tipo',
    status: 'Status',
  },
};

export default function ProjectsFilter({ projects, locale }: Props) {
  if (typeof window === 'undefined') {
    return null;
  }

  const [type, setType] = useState<string>('all');
  const [status, setStatus] = useState<string>('all');
  const t = copy[locale];

  const types = useMemo(() => Array.from(new Set(projects.map((project) => project.type))), [projects]);
  const statuses = useMemo(() => Array.from(new Set(projects.map((project) => project.status))), [projects]);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-project-card]'));
    cards.forEach((card) => {
      const cardType = card.dataset.projectType;
      const cardStatus = card.dataset.projectStatus;
      const matchesType = type === 'all' || cardType === type;
      const matchesStatus = status === 'all' || cardStatus === status;
      card.style.display = matchesType && matchesStatus ? '' : 'none';
    });
  }, [status, type]);

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <label className="flex flex-col gap-2 text-sm text-neutral-300">
        <span className="eyebrow">{t.type}</span>
        <select value={type} onChange={(event) => setType(event.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white">
          <option value="all">{t.allTypes}</option>
          {types.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm text-neutral-300">
        <span className="eyebrow">{t.status}</span>
        <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white">
          <option value="all">{t.allStatuses}</option>
          {statuses.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}