import React, { useState, useCallback, useContext } from "react";
import { Modal } from "antd";

const noop = (props: any) => {};

export const DialogContext = React.createContext({
  showDialog: noop,
  closeDialog: noop,
});

const initial = {
  content: null,
  title: "",
  onClose: noop,
};

const DialogProvider = ({ children, initialState }) => {
  const [dialogProps, setDialogProps] = useState(initialState);
  const [display, setDisplay] = useState(false);

  const { onClose, content, title, width } = dialogProps;

  const handleClose = useCallback(() => {
    if (typeof onClose === "function") {
      onClose();
    }
    setDisplay(false);
  }, [onClose]);

  const handleShow = useCallback(
    (newModalProps) => {
      if (typeof onClose === "function") {
        onClose();
      }
      setDialogProps(newModalProps);
      setDisplay(true);
    },
    [onClose]
  );

  return (
    <DialogContext.Provider
      value={{
        showDialog: handleShow,
        closeDialog: handleClose,
      }}
    >
      {children}
      <Modal
        destroyOnClose
        className="modal"
        title={title}
        closable
        footer={null}
        width={width}
        visible={display}
        onCancel={handleClose}
      >
        {content}
      </Modal>
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);

export default DialogProvider;
