import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import profileStyles from '../styles/profile.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/sh_komine',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.chkomine',
  },
]

export default function Profile() {
  return (
    <>
      <Header titlePre="Profile" />
      <div className={sharedStyles.layout}>
        <div className={profileStyles.avatar}>
          <img src="/avatar.jpg" alt="avatar drawing" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Profile</h1>

        <div className={profileStyles.name}>
          shkomine - プロダクト駆動エンジニア/小さな会社のCTO
        </div>
        <div className={profileStyles.profile}>
          ご連絡は、TwitterのDMにてよろしくお願いします。
          <br />
        </div>

        <div className={profileStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
