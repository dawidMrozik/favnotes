import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  margin-top: 6em;
  margin-left: 6em;
  width: 500px;
  position: relative;
`;

const DateInfo = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.grey300};
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 2px;
  background-image: url();
`;

const StyledContent = styled(Paragraph)`
  margin-top: 50px;
`;

const StyledAvatar = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  right: -30px;
`;

const StyledRemoveLink = styled.p`
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  margin-top: 60px;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledTwitterLink = styled.p`
  text-decoration: underline;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
`;

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const {
      match: { path },
    } = this.props;

    switch (path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.notes:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        this.setState({ pageType: 'notes' });
    }
  }

  render() {
    const { pageType } = this.state;
    return (
      <DetailsTemplate pageType={pageType}>
        <StyledWrapper>
          <StyledHeading>My best one</StyledHeading>
          <DateInfo>CREATED - 25/03/2019</DateInfo>
          {pageType === 'twitters' && <StyledAvatar src="https://avatars.io/twitter/hello_roman" />}
          <StyledContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris lacus, varius
            vel eleifend ac, sodales in tellus. Pellentesque erat enim, blandit ut pretium non,
            rutrum eu nisi. Mauris molestie dui eu efficitur ultricies. Nulla rhoncus feugiat justo
            a interdum. Suspendisse tristique, sem in fermentum consequat, urna libero dapibus eros,
            ac faucibus nisl velit in arcu. Sed dignissim libero nec lectus ornare, fringilla
            consequat elit suscipit. In semper ante nisi, vitae malesuada justo dictum et. Aliquam
            malesuada gravida magna in bibendum. Morbi et congue risus. Pellentesque orci arcu,
            porta at enim molestie, facilisis placerat elit. Ut diam ligula, rutrum non mi a, mattis
            efficitur urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Mauris sed cursus dui. Fusce eu orci vitae metus ornare finibus.
          </StyledContent>
          {pageType === 'twitters' && <StyledTwitterLink>open this twitter</StyledTwitterLink>}
          {pageType === 'articles' && <StyledTwitterLink>open this article</StyledTwitterLink>}
          <StyledButton pageType={pageType}>Close/save</StyledButton>
          <StyledRemoveLink>remove note</StyledRemoveLink>
        </StyledWrapper>
      </DetailsTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
