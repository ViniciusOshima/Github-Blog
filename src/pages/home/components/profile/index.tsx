import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import photoTest from '../../../../assets/profilePhotoTest.svg'
import {
  DescriptionContainer,
  ImgProfileContainer,
  NameContainer,
  ProfileContainer,
  ProfileInfoContainer,
  QualitiesContainer,
  UniqueQualityContainer,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ImgProfileContainer src={photoTest} alt="" />
      <ProfileInfoContainer>
        <NameContainer>
          <p>Cameron Williamson</p>
          <a href="">
            <p>GITHUB</p>
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </NameContainer>

        <DescriptionContainer>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </DescriptionContainer>

        <QualitiesContainer>
          <UniqueQualityContainer>
            <GithubLogo weight="fill" size={19} />
            <span>cameronwll</span>
          </UniqueQualityContainer>
          <UniqueQualityContainer>
            <Buildings weight="fill" size={19} />
            <span>Rocketseat</span>
          </UniqueQualityContainer>
          <UniqueQualityContainer>
            <Users weight="fill" size={19} />
            <span>32 seguidores</span>
          </UniqueQualityContainer>
        </QualitiesContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
