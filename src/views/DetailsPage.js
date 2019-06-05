import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DetailsTemplate from 'templates/DetailsTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hocs/withContext';
import { connect } from 'react-redux';

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

const DetailsPage = props => {
  const { pageContext, activeItem } = props;
  const [item] = activeItem;
  return (
    <DetailsTemplate>
      <StyledWrapper>
        <StyledHeading>{item.title}</StyledHeading>
        <DateInfo>CREATED - 25/03/2019</DateInfo>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://avatars.io/twitter/${item.twitterName}`} />
        )}
        <StyledContent>{item.content}</StyledContent>
        {pageContext === 'twitters' && <StyledTwitterLink>open this twitter</StyledTwitterLink>}
        {pageContext === 'articles' && <StyledTwitterLink>open this article</StyledTwitterLink>}
        <StyledButton pageContext={pageContext}>Close/save</StyledButton>
        <StyledRemoveLink>remove note</StyledRemoveLink>
      </StyledWrapper>
    </DetailsTemplate>
  );
};

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.string.isRequired,
  activeItem: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
});

export default withContext(connect(mapStateToProps)(DetailsPage));
