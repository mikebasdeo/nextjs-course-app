// pages/index.jsx
/** @jsx jsx */
import { jsx, Spinner } from 'theme-ui'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// import Browser from '../src/components/browser'


const BrowserComponent = dynamic(() => import('../src/components/browser'))

const Home = ({ content }) => (
  <div
    sx={{
      height: `calc(100vh - 60px)`,
      border: `10px solid blue`,
    }}
  >
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        border: '10px solid red',
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      <BrowserComponent />
    </div>
  </div>
)

export default Home

export function getStaticProps() {
  //cms
  return {
    props: {
      content: {
        title: 'This is an adequate note taking app',
      },
    },
  }
}
