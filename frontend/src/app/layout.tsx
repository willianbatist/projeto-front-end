import './globals.css';
import StyledRender from '../components/providers/StyledRender';
import Head from './head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head />
      <StyledRender>
        <body>{children}</body>
      </StyledRender>
    </html>
  )
}
