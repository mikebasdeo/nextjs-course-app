// pages/index.jsx
/** @jsx jsx */
import { jsx, Spinner } from 'theme-ui'
import Link from 'next/link'

const Home = () => (
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
      <h1 sx={{ fontSize: 8, my: 0 }}>
        This is a really dope note taking app.
      </h1>
    </div>
  </div>
)

export default Home

