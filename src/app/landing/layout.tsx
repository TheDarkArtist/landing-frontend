import { ReactNode } from "react"

interface LandingPageLayoutProps {
  children: ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '1536px'
    }}>
      {children}
    </div >
  )
}

export default LandingPageLayout
