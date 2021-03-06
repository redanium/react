import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const Group = styled.div`
  display: flex;
  background: ${props => props.theme.toolbar.button.backgroundColor};
  border-color: ${props => props.theme.toolbar.button.borderColor};
  border-style: ${props => props.theme.toolbar.button.borderStyle};
  border-width: ${props => props.theme.toolbar.button.borderWidth};
  box-shadow: ${props => props.theme.toolbar.boxShadow};

  &.direction-row {
    flex-direction: row;
  }
  &.direction-column {
    flex-direction: column;
  }

  &.direction-column > * {
    margin-bottom: ${props => props.theme.toolbar.childrenMargin};
  }

  &.direction-row > * {
    margin-right: ${props => props.theme.toolbar.childrenMargin};
  }

  &.direction-column :last-child,
  &.direction-row :last-child {
    margin: 0;
  }

  &.direction-column {
    &.first-shape-square {
      border-top-left-radius: ${props =>
        props.theme.toolbar.button.borderRadius};
      border-top-right-radius: ${props =>
        props.theme.toolbar.button.borderRadius};
    }

    &.last-shape-square {
      border-bottom-left-radius: ${props =>
        props.theme.toolbar.button.borderRadius};
      border-bottom-right-radius: ${props =>
        props.theme.toolbar.button.borderRadius};
    }

    &.first-shape-round {
      border-top-left-radius: ${props =>
        props.theme.toolbar[`${props.firstSize}Size`]};
      border-top-right-radius: ${props =>
        props.theme.toolbar[`${props.firstSize}Size`]};
    }

    &.last-shape-round {
      border-bottom-left-radius: ${props =>
        props.theme.toolbar[`${props.lastSize}Size`]};
      border-bottom-right-radius: ${props =>
        props.theme.toolbar[`${props.lastSize}Size`]};
    }
  }

  &.direction-row {
    &.first-shape-square {
      border-top-left-radius: ${props =>
        props.theme.toolbar.button.borderRadius};
      border-bottom-left-radius: ${props =>
        props.theme.toolbar.button.borderRadius};
    }

    &.last-shape-square {
      border-top-right-radius: ${props =>
        props.theme.toolbar.button.borderRadius};
      border-bottom-right-radius: ${props =>
        props.theme.toolbar.button.borderRadius};
    }

    &.first-shape-round {
      border-top-left-radius: ${props =>
        props.theme.toolbar[`${props.firstSize}Size`]};
      border-bottom-left-radius: ${props =>
        props.theme.toolbar[`${props.firstSize}Size`]};
    }

    &.last-shape-round {
      border-top-right-radius: ${props =>
        props.theme.toolbar[`${props.lastSize}Size`]};
      border-bottom-right-radius: ${props =>
        props.theme.toolbar[`${props.lastSize}Size`]};
    }
  }
`;

const ToolbarGroup = ({
  direction,
  size,
  shape,
  className,
  children,
  ...rest
}) => {
  let firstShape = shape;
  let lastShape = shape;
  let firstSize = size;
  let lastSize = size;

  if (!size && children.length > 0) {
    firstSize = children[0].props.size;
    lastSize = children[children.length - 1].props.size;
  }

  if (!shape && children.length > 0) {
    firstShape = children[0].props.shape;
    lastShape = children[children.length - 1].props.shape;
  }

  const classes = classnames(className, {
    [`direction-${direction}`]: true,
    [`first-shape-${firstShape}`]: true,
    [`last-shape-${lastShape}`]: true,
    [`first-size-${firstSize}`]: true,
    [`last-size-${lastSize}`]: true
  });

  const childrenProps = {
    inGroup: true
  };

  if (size) {
    childrenProps.size = size;
  }

  if (shape) {
    childrenProps.shape = shape;
  }

  return (
    <Group
      className={classes}
      firstSize={firstSize}
      lastSize={lastSize}
      {...rest}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, childrenProps)
      )}
    </Group>
  );
};

ToolbarGroup.propTypes = {
  direction: PropTypes.string,
  size: PropTypes.oneOf(['', 'xs', 'sm', 'md', 'lg']),
  shape: PropTypes.oneOf(['', 'round', 'square']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

ToolbarGroup.defaultProps = {
  direction: 'column',
  size: '',
  shape: '',
  className: ''
};

ToolbarGroup.displayName = 'Toolbar.Group';

export default ToolbarGroup;
