import { Page } from '#/layouts/Page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <Page className=''>
      <div>
        hi hi
      </div>
      <div>
        hi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawehi hi asdfijaweoi fjiaowef wfjawe
      </div>
    </Page>
  )
}
