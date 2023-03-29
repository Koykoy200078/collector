import React, {useState, useEffect} from 'react';
import {View, Modal, StyleSheet} from 'react-native';

export default function ({modalStyle, visible, children}) {
  const [showModal, setModal] = useState(visible);
  const toggleModal = () => {
    if (visible) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBg}>
        <View className={modalStyle}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
