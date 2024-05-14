'use client';

import {
  Archive,
  Mail,
  Star,
  FileQuestion,
  BookMarked,
} from 'lucide-react';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarItems } from '@/types';
import { SidebarButton } from './sidebar-button';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarMobile } from './sidebar-mobile';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Consulta escolar', href: '/estudiantes', icon: BookMarked },
    { label: 'Constancias', href: '/estudiantes/constancias', icon: Archive },
    {
      href: '/estudiantes/evaluacion_docente',
      icon: Star,
      label: 'Evaluación docente',
    },
  ],
};

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 840px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}