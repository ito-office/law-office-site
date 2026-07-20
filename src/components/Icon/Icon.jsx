const paths = {
  people: <><circle cx="8" cy="7" r="3"/><circle cx="16" cy="7" r="3"/><path d="M2.5 20v-2.5A4.5 4.5 0 0 1 7 13h2a4.5 4.5 0 0 1 4.5 4.5V20"/><path d="M13 13h2a4.5 4.5 0 0 1 4.5 4.5V20"/></>,
  heart: <path d="M12 21S3 15.7 3 8.5A4.5 4.5 0 0 1 11 5.7L12 7l1-1.3A4.5 4.5 0 0 1 21 8.5C21 15.7 12 21 12 21Z"/>,
  car: <><path d="M5 17h14l1-6-2-4H6l-2 4 1 6Z"/><path d="M7 17v2M17 17v2M7 13h.01M17 13h.01M4 11h16"/></>,
  building: <><path d="M5 21V4h10v17M15 9h4v12M8 8h2M8 12h2M8 16h2M17 13h1M17 16h1M3 21h18"/></>,
  award: <><circle cx="12" cy="10" r="5"/><path d="m9 15-2 6 5-3 5 3-2-6"/></>,
  chat: <><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="1"/><path d="M8 3v4M16 3v4M4 10h16M8 14h2M14 14h2M8 17h2M14 17h2"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></>,
  phone: <path d="M6.5 3.5 10 7l-2 3c1.5 3 3.5 5 6.5 6.5l3-2 3.5 3.5-2 3c-.8 1.1-2.2 1.5-3.5 1C9.7 20.3 3.7 14.3 2 8.5c-.4-1.3 0-2.7 1-3.5l3.5-1.5Z"/>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  chevron: <path d="m8 10 4 4 4-4"/>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  up: <path d="m7 14 5-5 5 5"/>,
};

export default function Icon({ name, size = 24, strokeWidth = 1.7, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
