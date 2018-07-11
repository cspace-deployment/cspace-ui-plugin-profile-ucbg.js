export default ({ data, recordEditor }) => {
  if (data) {
    const actionCode = data.getIn(['document', 'ns2:movements_common', 'reasonForMove']);

    if (actionCode && actionCode === 'Dead') {
      recordEditor.delete();
    }
  }
};
