import React from 'react';
import { SocialIntro } from '../components/social/SocialIntro';
import { CoreIdea } from '../components/social/CoreIdea';
import { ManagedList } from '../components/social/ManagedList';
import { Plans } from '../components/social/Plans';
import {
  RawToReady,
  SeoContent,
  OrganicGrowth,
  PaidDistribution,
  LeadManagement,
} from '../components/social/GrowthSections';
import {
  ClientRole,
  Workflow,
  ContentCategories,
} from '../components/social/WorkflowSystem';
import {
  SocialShowcase,
  GrowthSystem,
  SocialFinalCta,
} from '../components/social/ShowcaseSystem';

interface SocialMediaPageProps {
  onOpenProject: () => void;
  onOpenSchedule: () => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({
  onOpenProject,
  onOpenSchedule,
}) => {
  return (
    <div className="relative">
      <SocialIntro onOpenProject={onOpenProject} />
      <CoreIdea />
      <ManagedList />
      <Plans onOpenSchedule={onOpenSchedule} onOpenProject={onOpenProject} />
      <RawToReady />
      <SeoContent />
      <OrganicGrowth />
      <PaidDistribution />
      <LeadManagement />
      <ClientRole />
      <Workflow />
      <ContentCategories />
      <SocialShowcase />
      <GrowthSystem />
      <SocialFinalCta onOpenProject={onOpenProject} onOpenSchedule={onOpenSchedule} />
    </div>
  );
};
