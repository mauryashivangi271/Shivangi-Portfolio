import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Shivangi Maurya | Data Analytics & Full Stack Development',description:'BCA student portfolio featuring ServiceHub, data analytics, Power BI dashboards and web development projects.',authors:[{name:'Shivangi Maurya'}],metadataBase:new URL('https://shivangi-portfolio-flax.vercel.app'),openGraph:{title:'Shivangi Maurya | Portfolio',description:'Data analytics, business intelligence and full stack development projects.',type:'website'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
