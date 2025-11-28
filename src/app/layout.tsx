import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ParticleBackground } from '@/components/particle-background'
import { ThemeProvider } from '@/components/theme-provider'

const geistSans = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '<Jaro Heinonen />',
  description: 'Jaro Heinonen portfolio website.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen flex-col justify-start">
            <Header />

            <ParticleBackground fullscreen={true} />

            <div className="flex grow flex-col items-center px-6">
              <div className="h-full w-full max-w-5xl grow py-4">
                {children}
              </div>
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
