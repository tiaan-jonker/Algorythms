// aside
let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}'

let userObj = JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
})

// will return the userStr as obj but with values upper-cased

function mergeRanges(meetings) {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings))

  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime
  })

  const mergedMeetings = sortedMeetings[0]

  for (let i = 0; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i]
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

    if (currentMeeting.startTime <= mergedMeetings.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      )
    } else {
      mergedMeetings.push(currentMeeting)
    }
  }

  return mergedMeetings
}
