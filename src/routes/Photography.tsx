import { pages } from '../lib/content'
import Page from '../components/Page';

const thisPage = pages[3];

export default function Photography() {
  return (
    <div>
      <Page {...thisPage} />
    </div>
  )
}