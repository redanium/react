import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Loader from 'components/Loader';

const buildInGroupSize = props => {
  const size = props.theme.toolbar[`${props.size}Size`];
  const borderWidth = props.theme.toolbar.button.borderWidth;
  return `calc(${size} - (${borderWidth} * 2))`;
};

const StyledButton = styled.button`
  &,
  &.btn {
    position: relative;
    transition: all 0.1s ease-out;

    pointer-events: all;
    color: ${props => props.theme.toolbar.button.color};
    border-color: ${props => props.theme.toolbar.button.borderColor};
    border-style: ${props => props.theme.toolbar.button.borderStyle};
    border-width: ${props => props.theme.toolbar.button.borderWidth};
    background: ${props => props.theme.toolbar.button.backgroundColor};
    font-weight: 500;
    padding: 0;
    box-shadow: ${props => props.theme.toolbar.boxShadow};
  }

  &.shape-square {
    border-radius: ${props => props.theme.toolbar.button.borderRadius};
  }

  &.shape-round {
    border-radius: 50%;
  }

  &.xs {
    width: ${props => props.theme.toolbar.xsSize};
    height: ${props => props.theme.toolbar.xsSize};
    line-height: ${props => props.theme.toolbar.xsLineHeight};
    font-size: ${props => props.theme.toolbar.xsFontSize};

    .fa {
      font-size: ${props => props.theme.toolbar.xsIconSize};
    }
  }

  &.sm {
    width: ${props => props.theme.toolbar.smSize};
    height: ${props => props.theme.toolbar.smSize};
    line-height: ${props => props.theme.toolbar.smLineHeight};
    font-size: ${props => props.theme.toolbar.smFontSize};

    .fa {
      font-size: ${props => props.theme.toolbar.smIconSize};
    }
  }

  &.md {
    width: ${props => props.theme.toolbar.mdSize};
    height: ${props => props.theme.toolbar.mdSize};
    line-height: ${props => props.theme.toolbar.mdLineHeight};
    font-size: ${props => props.theme.toolbar.mdFontSize};

    .fa {
      font-size: ${props => props.theme.toolbar.mdIconSize};
    }
  }

  &.lg {
    width: ${props => props.theme.toolbar.lgSize};
    height: ${props => props.theme.toolbar.lgSize};
    line-height: ${props => props.theme.toolbar.lgLineHeight};
    font-size: ${props => props.theme.toolbar.lgFontSize};

    .fa {
      font-size: ${props => props.theme.toolbar.lgIconSize};
    }
  }

  &.in-group {
    width: ${props => buildInGroupSize(props)};
    height: ${props => buildInGroupSize(props)};
    border-width: 0;
    box-shadow: none;
  }

  &.btn:hover {
    color: ${props => props.theme.toolbar.button.color};
    background-color: ${props =>
      props.theme.toolbar.button.hoverBackgroundColor};
    border-color: ${props => props.theme.toolbar.button.hoverBorderColor};

    &.in-group {
      border-color: ${props => props.theme.toolbar.button.hoverBackgroundColor};
    }
  }

  &.btn:focus {
    color: ${props => props.theme.toolbar.button.color};
    background-color: ${props =>
      props.theme.toolbar.button.focusBackgroundColor};
    border-color: ${props => props.theme.toolbar.button.focusBorderColor};

    &.in-group {
      border-color: ${props => props.theme.toolbar.button.focusBackgroundColor};
    }
  }

  &.btn:active,
  &.btn.active {
    color: ${props => props.theme.toolbar.button.color};
    background-color: ${props =>
      props.theme.toolbar.button.activeBackgroundColor};
    border-color: ${props => props.theme.toolbar.button.activeBorderColor};

    &.in-group {
      border-color: ${props =>
        props.theme.toolbar.button.activeBackgroundColor};
    }
  }
`;

const StyledDiv = StyledButton.extend`
  pointer-events: none;
`;

const StyledAnchor = StyledButton.extend`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const ToolbarItem = ({
  // title,
  type,
  icon,
  size,
  shape,
  inactive,
  loading,
  // loaderTitle,
  inGroup,
  className,
  children,
  ...rest
}) => {
  const classes = classnames(className, {
    loading,
    [size]: size,
    [`shape-${shape}`]: true,
    btn: !inactive,
    'in-group': inGroup
  });

  let Element = StyledDiv;

  if (inactive === false) {
    switch (type) {
      case 'anchor':
        Element = StyledAnchor;
        break;
      default:
        Element = StyledButton;
    }
  }

  if (loading) {
    const spinnerSizes = {
      xs: 14,
      sm: 20,
      md: 24,
      lg: 30
    };
    const strokeSizes = {
      xs: 2,
      sm: 3,
      md: 3,
      lg: 3
    };
    return (
      <Element size={size} className={classes} {...rest}>
        <Loader
          spinnerSize={spinnerSizes[size]}
          strokeSize={strokeSizes[size]}
          centered
        />
      </Element>
    );
  }

  return (
    <Element size={size} className={classes} {...rest}>
      {children && children}
      {!children && <FontAwesome name={icon} />}
    </Element>
  );
};

ToolbarItem.propTypes = {
  // title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'anchor']),
  icon: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  shape: PropTypes.oneOf(['round', 'square']),
  inactive: PropTypes.bool,
  loading: PropTypes.bool,
  // loaderTitle: PropTypes.node,
  inGroup: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

ToolbarItem.defaultProps = {
  // title: '',
  type: 'button',
  icon: '',
  size: 'md',
  shape: 'round',
  inactive: false,
  loading: false,
  // loaderTitle: '',
  inGroup: false,
  className: '',
  children: ''
};

ToolbarItem.displayName = 'Toolbar.Item';

export default ToolbarItem;
