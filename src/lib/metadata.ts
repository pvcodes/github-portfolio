import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Pranjal Verma', // TODO: Add a custom title
  description = "I am a software engineer with a passion for building scalable and efficient web applications.", // TODO: Add a custom description
  image = '/me.png', // TODO: Add a custom image
  icons = '/me.png', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@undefined810'
    },
    icons,
    metadataBase: new URL('https://www.pvcodes.me'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
