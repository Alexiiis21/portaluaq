'use client';

import {
  Archive,
  Mail,
  BookText,
  Star,
  FileQuestion,
  MoreHorizontal,
  User,
  Users,
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
    { label: 'Kardex', href: '/estudiantes/mdkmd', icon: BookText },
    { label: 'Constancias', href: '/estudiantes/dkdkd', icon: Archive },
    {
      href: '/estudiantes/dsad',
      icon: FileQuestion,
      label: 'Cuestionarios',
    },
    {
      href: '/estudiantes/dlmdlm',
      icon: Star,
      label: 'Evaluación docente',
    },
    {
      href: '/estudiantes/fkfklf',
      icon: Mail,
      label: 'Solicitud de email',
    },
  ],
};

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}