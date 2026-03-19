/**
 * Demo component barrel — lazy-loaded animated demos for all 8 services.
 * Each demo is a 20-second looping React animation rendered inside the
 * browser mockup frame on the corresponding SolutionPage.
 */
import { lazy } from 'react';

export const PolicyDeploymentDemo = lazy(() => import('./PolicyDeploymentDemo'));
export const SQDCPHubDemo = lazy(() => import('./SQDCPHubDemo'));
export const OEEManagerDemo = lazy(() => import('./OEEManagerDemo'));
export const ConnectDemo = lazy(() => import('./ConnectDemo'));
export const ActionManagerDemo = lazy(() => import('./ActionManagerDemo'));
export const QualityManagerDemo = lazy(() => import('./QualityManagerDemo'));
export const SafetyManagerDemo = lazy(() => import('./SafetyManagerDemo'));
export const CertificationManagerDemo = lazy(() => import('./CertificationManagerDemo'));

/** Map from service slug → lazy demo component */
export const demoComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'policy-deployment': PolicyDeploymentDemo,
  'sqdcp': SQDCPHubDemo,
  'oee-manager': OEEManagerDemo,
  'connect': ConnectDemo,
  'action-manager': ActionManagerDemo,
  'quality-manager': QualityManagerDemo,
  'safety-manager': SafetyManagerDemo,
  'certification-manager': CertificationManagerDemo,
};
