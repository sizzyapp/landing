import { ProjectVariable } from '@prisma/client';
import { PreviewMDXContextType } from '../../components/GlinkMdx/context';
import { ReactComponentElement, ReactNode } from 'react';
import { ErrorFallbackProps } from '@blitzjs/next/dist/index-browser';

export type MDXPreviewProps = {
  markdown: string;
  overrides?: any;
  disableParsingRawHTML?: boolean;
  className?: string;
  MDXrenderer?: any;
};
