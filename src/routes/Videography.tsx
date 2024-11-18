import { pages } from '../lib/content'
import Page from '../components/Page';

const thisPage = pages[4];

export default function Videography() {
  return (
    <div>
      <Page {...thisPage} />
    </div>
  )
}