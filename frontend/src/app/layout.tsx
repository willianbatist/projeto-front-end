import "../styles/globals.css";
import { Providers } from "../components/providers/ReduxProvider";
import StyledRender from "../components/providers/StyledRender";
import CustomChakraProvider from "../components/providers/CustomChakraUi";
import Head from "./head";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head />
        <body>
          <StyledRender>
            <CustomChakraProvider>
              <Providers>{children}</Providers>
            </CustomChakraProvider>
          </StyledRender>
        </body>
    </html>
  )
}
