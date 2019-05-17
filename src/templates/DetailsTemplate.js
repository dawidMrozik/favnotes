import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>{children}</UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageType: 'note',
};

export default DetailsTemplate;
