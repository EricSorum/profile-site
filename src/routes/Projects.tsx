import { pages } from '../lib/content'
import Page from '../components/Page';

const thisPage = pages[0];

export default function Projects() {
  return (
    <div>
      <Page {...thisPage} />
    </div>
  )
}