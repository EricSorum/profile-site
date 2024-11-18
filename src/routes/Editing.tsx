import { pages } from '../lib/content'
import Page from '../components/Page';

const thisPage = pages[5];

export default function Editing() {
  return (
    <div>
      <Page {...thisPage} />
    </div>
  )
}