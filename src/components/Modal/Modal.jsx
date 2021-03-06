import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import classnames from 'classnames';
import styled from 'styled-components';

import Title from 'components/Sidebar/Title';
import Loader from 'components/Loader';

const Overlay = styled.aside`
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${props => props.theme.modal.overlayPadding};
  background: ${props => props.theme.modal.overlayBackgroundColor};
  transition: opacity 300ms ease-in-out;
`;

const StyledMain = styled.main`
  position: relative;
  min-height: 15rem;
  max-height: 100%;
  padding: ${props => props.theme.modal.padding};
  background: ${props => props.theme.modal.backgroundColor};
  color: ${props => props.theme.modal.color};
  overflow-y: auto;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  &.scroll-content {
    display: flex;
    flex-direction: column;
    overflow-y: none;
  }

  &.scroll-content .header {
    margin-bottom: 2rem;
  }

  .content {
    padding: 2rem;
  }

  &.scroll-content .content {
    overflow-y: auto;
    margin: 0;
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 1px 0 1px 0;

    &::after {
      content: '';
      margin-top: 2rem;
      display: block;
    }
  }

  .content.loading {
    display: none;
  }

  &.scroll-content .footer {
    margin-top: 2rem;
  }
`;

class Modal extends React.Component {
  componentDidMount() {
    this._triggerCallback('onOpen');
  }

  componentWillUnmount() {
    this._triggerCallback('onClose');
  }

  _triggerCallback(name) {
    if (this.props[name] !== null) {
      this.props[name]();
    }
  }

  render() {
    const {
      container,
      scrollContent,
      className,
      title,
      loading,
      loaderLabel,
      header,
      footer,
      children,
      ...rest
    } = this.props;

    const asideClasses = classnames(className, {
      [`container-${container}`]: true,
      'scroll-content': scrollContent
    });

    const contentClasses = classnames({
      content: true,
      loading
    });

    const transitionStyles = {
      entered: {
        opacity: 1
      }
    };

    return (
      <Transition
        in
        timeout={300}
        appear
        onEntered={this.onOpen}
        onExited={this.onClose}
      >
        {state => (
          <Overlay>
            <StyledMain
              key="modal"
              className={asideClasses}
              style={transitionStyles[state]}
              {...rest}
            >
              {!loading &&
                (header || title) && (
                  <header className="header">
                    {title && <Title inHeader>{title}</Title>}
                    {!loading && header && header}
                  </header>
                )}

              <div className={contentClasses}>{children}</div>

              {!loading && footer && footer}

              {loading && <Loader centered label={loaderLabel} />}
            </StyledMain>
          </Overlay>
        )}
      </Transition>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  loading: PropTypes.bool,
  loaderLabel: PropTypes.node,
  container: PropTypes.oneOf(['parent', 'root']),
  scrollContent: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

Modal.defaultProps = {
  title: '',
  header: '',
  footer: '',
  loading: false,
  loaderLabel: '',
  container: 'root',
  scrollContent: false,
  onOpen: null,
  onClose: null,
  className: '',
  children: ''
};

Modal.displayName = 'Modal';

export default Modal;
