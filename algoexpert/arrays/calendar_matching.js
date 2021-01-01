/**
 * Return a list of intervals in which a meetings can be scheduled
 * 
 * Time: O(n1 + n2)
 * Space: O(n1 + n2)
 * 
 * @param {Array} calendar1 
 * @param {Array} dailyBounds1
 * @param {Array} calendar2 
 * @param {Array} dailyBounds2 
 * @param {Number} meetingDuration 
 */
function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
  calendar1.unshift(['0:00', dailyBounds1[0]]);
  calendar1.push([dailyBounds1[1], '23:59']);

  calendar2.unshift(['0:00', dailyBounds2[0]]);
  calendar2.push([dailyBounds2[1], '23:59']);

  let mergedScheds = mergeCalendars(
    parseCalendar(calendar1),
    parseCalendar(calendar2)
  );

  return planMeetingCalendar(flattenCalendar(mergedScheds), meetingDuration);
}

/**
 * Convert the calendar from an array of time strings to minutes
 * @param {Array} calendar Calendar
 * 
 * Time: O(n)
 * Space: O(n)
 */
function parseCalendar(calendar) {
  return calendar.map(schedule => {
    return schedule.map(time => {
      time = time.split(':');
      return Number(time[0]) * 60 + Number(time[1]);
    });
  });
}

/**
 * Merge both the calendars into a single one sorted by 
 * the beginning time
 * 
 * Time: O(n1 + n2)
 * Space: O(n1 + n2)
 * 
 * @param {Array} calendar1 
 * @param {Array} calendar2 
 */
function mergeCalendars(calendar1, calendar2) {
  let mergedScheds = [];

  let firstPtr = 0, secondPtr = 0;
  while(firstPtr < calendar1.length && secondPtr < calendar2.length) {
    if(calendar1[firstPtr][0] <= calendar2[secondPtr][0]) {
      mergedScheds.push(calendar1[firstPtr]);
      firstPtr += 1;	
    }
    else {
      mergedScheds.push(calendar2[secondPtr]);
      secondPtr += 1;
    }
  }
  
  // copy the rest of the array
  for(let i = firstPtr; i < calendar1.length; i += 1) {
    mergedScheds.push(calendar1[i]);
  }
  for(let i = secondPtr; i < calendar2.length; i += 1) {
    mergedScheds.push(calendar2[i]);
  }

  return mergedScheds;
}

/**
 * Flatten the merged calendar so that overlapping times are
 * combined into a single one.
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Array} calendar 
 */
function flattenCalendar(calendar) {
  let flattenedCalendar = [calendar[0].slice()];
  
  for(let i = 1; i < calendar.length; i += 1) {
    const currentMeeting = calendar[i];
    const previousMeeting = flattenedCalendar[flattenedCalendar.length - 1];
    const [previousStart, previousEnd] = previousMeeting;
    const [currentStart, currentEnd] = currentMeeting;

    if(previousEnd >= currentStart) {
      const newPreviousMeeting = [previousStart, Math.max(previousEnd, currentEnd)];
      flattenedCalendar[flattenedCalendar.length - 1] = newPreviousMeeting
    }
    else {
      flattenedCalendar.push(currentMeeting.slice());
    }
  }
  return flattenedCalendar;
}

/**
 * Convert the minutes to time strings of the form '{hours}:{minutes}'
 * 
 * Time: O(1)
 * Space: O(1)
 * 
 * @param {Number} minutes 
 */
function minutesToTimeString(minutes) {
  let hours = Math.floor(minutes / 60);
  minutes = minutes - hours * 60;
  return `${hours}:${String(minutes).padStart(2, '0')}`
}

/**
 * Return a list of times in which meetings are possible
 * 
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {Array} occupiedCalendar 
 * @param {Number} meetingDuration 
 */
function planMeetingCalendar(occupiedCalendar, meetingDuration) {
  let meetingCalendar = [];
  for(let i = 0; i < occupiedCalendar.length - 1; i += 1) {
    if(occupiedCalendar[i + 1][0] - occupiedCalendar[i][1] >= meetingDuration) {
      meetingCalendar.push(
        [
          minutesToTimeString(occupiedCalendar[i][1]),
          minutesToTimeString(occupiedCalendar[i + 1][0])
        ]
      ); 
    }
  }

  return meetingCalendar;
}

// Do not edit the line below.
exports.calendarMatching = calendarMatching;
