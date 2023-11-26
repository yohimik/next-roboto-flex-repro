import { Roboto_Flex } from 'next/font/google';

export const roboto = Roboto_Flex({
    style: 'normal',
    subsets: ['latin'],
    axes: [ 'XOPQ'],
    preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html className={roboto.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
