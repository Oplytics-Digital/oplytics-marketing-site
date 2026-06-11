/**
 * Policy Deployment Demo — an auto-playing guided tour of the real product
 * (oplytics-policy-deployment), framed in the app's own sidebar/header chrome.
 * It walks Dashboard → X-Matrix → Catchball → Bowling, then settles on the live,
 * clickable X-Matrix. Uses fictional Testa Group sample data; no auth, no backend.
 */
import PolicyDeploymentTour from './policy/PolicyDeploymentTour';

export default function PolicyDeploymentDemo() {
  return <PolicyDeploymentTour />;
}
