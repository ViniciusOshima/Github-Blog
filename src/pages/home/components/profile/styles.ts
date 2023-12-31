import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 54rem;

  display: flex;
  gap: 2rem;

  padding: 2rem 2.5rem;
  margin-top: -30px;

  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  margin-top: -6.25rem;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`

export const ImgProfileContainer = styled.img`
  width: 9.25rem;
  border-radius: 8px;
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NameContainer = styled.div`
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
  font-weight: bold;

  padding-top: 5px;

  display: flex;
  justify-content: space-between;

  width: 37rem;

  a {
    display: flex;
    gap: 8px;
    justify-content: center;

    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    line-height: 160%;
    text-align: center;

    height: 1.3rem;

    border-bottom: 1px solid ${(props) => props.theme['base-profile']};

    transition: all 0.3s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const DescriptionContainer = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const QualitiesContainer = styled.div`
  display: flex;
  gap: 24px;
`

export const UniqueQualityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
