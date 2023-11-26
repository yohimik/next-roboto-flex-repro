import { Roboto_Flex } from 'next/font/google';

export const roboto = Roboto_Flex({
    subsets: ['latin'],
    axes: ['XOTQ'],
});

export default function RootLayout({ children }) {
  return (
    <html className={roboto.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
