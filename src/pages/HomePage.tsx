import React from 'react';
import { HomeHero } from '../components/HomeHero';
import { WhoIsLuna } from '../components/WhoIsLuna';
import { WhatWeDo } from '../components/WhatWeDo';
import { WebsiteWork } from '../components/WebsiteWork';
import { SocialPreview } from '../components/SocialPreview';
import { TeamPreview } from '../components/TeamPreview';
import { DemoWork } from '../components/DemoWork';

interface HomePageProps {
  onOpenSchedule: () => void;
  onOpenProject: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSchedule, onOpenProject }) => {
  return (
    <>
      <HomeHero onOpenSchedule={onOpenSchedule} onOpenProject={onOpenProject} />
      <WhoIsLuna />
      <WhatWeDo />
      <WebsiteWork />
      <SocialPreview />
      <TeamPreview />
      <DemoWork onRequestDemos={onOpenProject} />
    </>
  );
};
