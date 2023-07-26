import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  DescriptionContainer,
  ImgProfileContainer,
  NameContainer,
  ProfileContainer,
  ProfileInfoContainer,
  QualitiesContainer,
  UniqueQualityContainer,
} from './styles'
import { useEffect, useState } from 'react'

interface ProfileInfos {
  avatarImg: string
  name: string
  urlProfile: string
  userName: string
  followers: number
  bio: string
}

export function Profile() {
  const [profileInfos, setProfileInfos] = useState<ProfileInfos>()

  async function loadProfileInfos() {
    const response = await fetch('https://api.github.com/users/ViniciusOshima')
    const data = await response.json()

    setProfileInfos({
      avatarImg: data.avatar_url,
      name: data.name,
      urlProfile: data.html_url,
      userName: data.login,
      followers: data.followers,
      bio: data.bio,
    })
  }

  useEffect(() => {
    loadProfileInfos()
  }, [])

  return (
    <ProfileContainer>
      <ImgProfileContainer src={profileInfos?.avatarImg} alt="" />
      <ProfileInfoContainer>
        <NameContainer>
          <p>{profileInfos?.name}</p>
          <a href={profileInfos?.urlProfile}>
            <p>GITHUB</p>
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </NameContainer>

        <DescriptionContainer>{profileInfos?.bio}</DescriptionContainer>

        <QualitiesContainer>
          <UniqueQualityContainer>
            <GithubLogo weight="fill" size={19} />
            <span>{profileInfos?.userName}</span>
          </UniqueQualityContainer>
          <UniqueQualityContainer>
            <Buildings weight="fill" size={19} />
            <span>Estudante</span>
          </UniqueQualityContainer>
          <UniqueQualityContainer>
            <Users weight="fill" size={19} />
            <span>{profileInfos?.followers} seguidores</span>
          </UniqueQualityContainer>
        </QualitiesContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
