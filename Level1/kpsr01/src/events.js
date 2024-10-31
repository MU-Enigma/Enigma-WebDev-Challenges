import moment from 'moment'
const now = new Date()

export default [
  // {
  //   id: 0,
  //   title: 'title',
  //   start: new Date(2024, 1,10 ),
  //   end: new Date(2024, 2, 10),
  // },
  // {
  //   id: 1,
  //   title: 'Long Event',
  //   start: new Date(2024, 10, 10),
  //   end: new Date(2024, 10, 10),
  // },
  {
    id: 2,
    title: 'Registration for Hacktober-Fest',
    start: moment("2024-10-01T10:00:00").toDate(),
    end: moment("2024-10-01T11:00:00").toDate(),
    link: 'https://google.com',
  },

  {
    id: 3,
    title: 'Hacktober-Fest 101',
    start: moment("2024-10-08T10:00:00").toDate(),
    end: moment("2024-10-10T11:00:00").toDate(),
    allDay: false,
    link: 'https://google.com',
  },

  {
    id: 4,
    title: 'Hacktober Follow-Up',
    start: moment("2024-10-15T10:00:00").toDate(),
    end: moment("2024-10-15T11:00:00").toDate(),
    allDay: false,
    link: 'https://google.com',
  },

  {
    id: 92,
    title: 'Weekly Code Registration',
    start: new Date(2024, 10, 9, 8, 0, 0),
    end: new Date(2024, 10, 10, 11, 30, 0),
    link: 'https://google.com',
  },
  {
    id: 5,
    title: 'Weekly Code-Off',
    start: new Date(2024, 10, 11),
    end: new Date(2024, 10, 13),
    desc: 'Big conference for important people',
    link: 'https://google.com',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2024, 10, 12, 10, 30, 0, 0),
    end: new Date(2024, 10, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    link: 'https://google.com',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
    link: 'https://google.com',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
    link: 'https://google.com',
  },

]