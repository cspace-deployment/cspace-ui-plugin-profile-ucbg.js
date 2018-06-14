import { defineMessages } from 'react-intl';

export default {
  propReasons: {
    values: [
      'class use',
      'research',
      'garden collection',
      'distribution',
      'conservation',
    ],
  },
  propTypes: {
    values: [
      'seed',
      'cutting',
      'living plant',
      'division',
      'bulb corm tuber',
      'graft',
      'tissue culture',
    ],
    messages: defineMessages({
      'bulb corm tuber': {
        id: 'option.propTypes.bulb corm tuber',
        defaultMessage: 'bulb/corm/tuber',
      },
    }),
  },
  scarStrats: {
    values: [
      'abrade',
      'boiling water',
      'GA3',
      'fire',
      'freeze',
      'isopropyl alcohol',
      'nick',
      'pericarp removed broken',
      'seed coat removed',
      'sulfuric acid',
      'cold strat',
      'warm strat',
      'smoke',
      'water soak',
    ],
    messages: defineMessages({
      'pericarp removed broken': {
        id: 'option.scarStrats.pericarp removed broken',
        defaultMessage: 'pericarp removed/broken',
      },
    }),
  },
  durationUnits: {
    values: [
      'hours',
      'days',
      'weeks',
      'months',
    ],
    messages: defineMessages({
      hours: {
        id: 'option.durationUnits.hours',
        defaultMessage: 'Hours',
      },
      days: {
        id: 'option.durationUnits.days',
        defaultMessage: 'Days',
      },
      weeks: {
        id: 'option.durationUnits.weeks',
        defaultMessage: 'Weeks',
      },
      months: {
        id: 'option.durationUnits.months',
        defaultMessage: 'Months',
      },
    }),
  },
  cuttingTypes: {
    values: [
      'softwood',
      'semi-hardwood',
      'hardwood',
      'heel',
      'dormant',
      'root',
    ],
  },
};
