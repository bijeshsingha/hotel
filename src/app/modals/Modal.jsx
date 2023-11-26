'use client'
import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types';

const Modal = (props) => {
  const {
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
  } = props;
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
  })

  return (
    <div>Modal</div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.element,
  footer: PropTypes.element,
  actionLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  secondaryAction: PropTypes.func,
  secondaryActionLabel: PropTypes.string,
};

export default Modal