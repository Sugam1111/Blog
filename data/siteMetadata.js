const siteMetadata = {
  title: 'The Neural Code',
  author: 'Sugam Budhraja',
  headerTitle: 'The Neural Code',
  description: 'A blog about Brain and Machine Intelligence',
  summary: 'The Neural Code is blog focused on the convergence of Artificial Intelligence and Neuroscience. We review and discuss newfangled concepts, cutting-edge research and state-of-art technologies. Join us on a journey to find the explanation for the brain works and how we can take advantage of theories in neuroscience to improve the current-state of AI. ',
  language: 'en-us',
  siteUrl: 'https://neuralco.de',
  siteRepo: 'https://github.com/Sugam1111/Blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'budhraja.sugam@gmail.com',
  github: 'https://github.com/Sugam1111',
  twitter: 'https://twitter.com/sugambudhraja',
  facebook: 'https://www.facebook.com/sugam.budhraja',
  youtube: 'https://www.youtube.com/channel/UCiL_Oo0yAxFdRnsUw2lfjUw',
  linkedin: 'https://www.linkedin.com/in/sugam-budhraja',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'Sugam1111/Blog', //process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: 'MDEwOlJlcG9zaXRvcnk0MDAwOTQ3NjI', //process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: 'Announcements', //process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: 'DIC_kwDOF9j2Ks4COPdN', //process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
