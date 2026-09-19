import React from 'react';
import { WebsiteIntro } from '../components/website/WebsiteIntro';
import { WebsiteTypes } from '../components/website/WebsiteTypes';
import { WebsiteProjects } from '../components/website/WebsiteProjects';
import {
  ServiceStatement,
  Inclusions,
  Philosophy,
  Process,
  Different,
  DemoRequest,
  WebsiteCta,
} from '../components/website/WebsiteSections';

interface WebsiteServicesPageProps {
  onOpenProject: () => void;
  onOpenSchedule: () => void;
}

export const WebsiteServicesPage: React.FC<WebsiteServicesPageProps> = ({
  onOpenProject,
  onOpenSchedule,
}) => {
  return (
    <div className="relative">
      <WebsiteIntro onOpenProject={onOpenProject} />
      <ServiceStatement />
      <WebsiteTypes onOpenProject={onOpenProject} />
      <Inclusions />
      <Philosophy />
      <WebsiteProjects />
      <Process />
      <Different />
      <DemoRequest onRequest={onOpenSchedule} />
      <WebsiteCta onOpenProject={onOpenProject} onOpenSchedule={onOpenSchedule} />
    </div>
  );
};
