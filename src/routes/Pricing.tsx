import { pages } from '../lib/content'
import Page from '../components/Page';

const thisPage = pages[1];

export default function Pricing() {
  return (
    <div>
      <Page {...thisPage} />
    </div>
  )
}