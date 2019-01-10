export default ({ data, recordEditor }) => {
  if (data) {
    const actionCode = data.getIn(['document', 'ns2:movements_common', 'reasonForMove']);
    const deadActCodeUrn = "urn:cspace:botgarden.cspace.berkeley.edu:vocabularies:name(actionCode):item:name(actCode00)'Dead'";

    if (actionCode && actionCode === deadActCodeUrn) {
      recordEditor.delete();
    }
  }
};
