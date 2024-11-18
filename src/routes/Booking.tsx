import { pages } from '../lib/content'
import Page from '../components/Page';

const thisPage = pages[2];

export default function Booking() {
  return (
    <div>
      <Page {...thisPage} />
    </div>
  )
}