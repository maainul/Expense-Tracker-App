# Expense-Tracker-App

1. Expense-Server
2. Expense-Client
3. Expense-App


## Questions / Features : I have 1 month data . how can I get weekly data, in  1 month 4 week . (saturday-friday)

```js
// Assuming your data is an array of objects with a 'date' property
const monthlyData = [
  { date: '2023-01-01', value: 10 },
  { date: '2023-01-05', value: 15 },
  { date: '2023-01-06', value: 15 },
  { date: '2023-01-07', value: 15 },
  { date: '2023-01-08', value: 15 },
  { date: '2023-01-09', value: 15 },
  { date: '2023-01-10', value: 15 },
  { date: '2023-01-11', value: 15 },
  { date: '2023-01-12', value: 15 },
  { date: '2023-01-13', value: 15 },
  { date: '2023-01-14', value: 15 },
  { date: '2023-01-15', value: 15 },
  { date: '2023-01-16', value: 15 },
  
  // december
  { date: '2023-12-01', value: 10 },
  { date: '2023-12-05', value: 15 },
  { date: '2023-12-06', value: 15 },
  { date: '2023-12-07', value: 15 },
  { date: '2023-12-08', value: 15 },
  { date: '2023-12-09', value: 15 },
  { date: '2023-12-10', value: 15 },
  { date: '2023-12-11', value: 15 },
  { date: '2023-12-12', value: 15 },
  { date: '2023-12-13', value: 15 },
  { date: '2023-12-14', value: 15 },
  { date: '2023-12-15', value: 15 },
  { date: '2023-12-16', value: 15 },
  
  // november
  { date: '2023-11-01', value: 10 },
  { date: '2023-11-05', value: 15 },
  { date: '2023-11-06', value: 15 },
  { date: '2023-11-07', value: 15 },
  { date: '2023-11-08', value: 15 },
  { date: '2023-11-09', value: 15 },
  { date: '2023-11-10', value: 15 },
  { date: '2023-11-11', value: 15 },
  { date: '2023-11-12', value: 15 },
  { date: '2023-11-13', value: 15 },
  { date: '2023-11-14', value: 15 },
  { date: '2023-11-15', value: 15 },
  { date: '2023-11-16', value: 15 },
  
];

// Function to convert date to week number (Saturday-Friday week structure)
function getWeekNumber(date) {
  const dayOfWeek = date.getDay();
  const saturdayIndex = 6; // Saturday is the 6th day of the week
  const daysToSaturday = saturdayIndex - dayOfWeek;
  const nextSaturday = new Date(date.getTime() + daysToSaturday * 24 * 60 * 60 * 1000);
  const weekNumber = Math.floor((nextSaturday.getDate() - 1) / 7) + 1;
  return weekNumber;
}

// Function to organize data by both month and week
function organizeDataByMonthAndWeek(data) {
  return data.reduce((result, item) => {
    const date = new Date(item.date);
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const weekNumber = getWeekNumber(date);

    // Initialize the month array if it doesn't exist
    if (!result[month]) {
      result[month] = {};
    }

    // Initialize the week array if it doesn't exist
    if (!result[month][weekNumber]) {
      result[month][weekNumber] = [];
    }

    // Add the item to the corresponding month and week
    result[month][weekNumber].push(item);

    return result;
  }, {});
}

// Organize data by both month and week
const monthlyWeeklyData = organizeDataByMonthAndWeek(monthlyData);

// Function to print organized data
function printOrganizedData(organizedData) {
  for (const month in organizedData) {
    console.log(`Month ${month}:`);
    for (const week in organizedData[month]) {
      console.log(`  Week ${week}:`);
      console.log(organizedData[month][week]);
    }
    console.log('\n');
  }
}

// Print organized data
printOrganizedData(monthlyWeeklyData);
```
## RESULT
```js
Month 1 (January):
Week 1:
[
  { date: '2023-01-01', value: 10 },
  { date: '2023-01-05', value: 15 },
  { date: '2023-01-06', value: 15 },
  { date: '2023-01-07', value: 15 }
]
Week 2:
[
  { date: '2023-01-08', value: 15 },
  { date: '2023-01-09', value: 15 },
  { date: '2023-01-10', value: 15 },
  { date: '2023-01-11', value: 15 },
  { date: '2023-01-12', value: 15 },
  { date: '2023-01-13', value: 15 },
  { date: '2023-01-14', value: 15 }
]
Week 3:
[
  { date: '2023-01-15', value: 15 },
  { date: '2023-01-16', value: 15 }
]
Month 11 (November):
Week 1:
[ { date: '2023-11-01', value: 10 } ]
Week 2:
[
  { date: '2023-11-05', value: 15 },
  { date: '2023-11-06', value: 15 },
  { date: '2023-11-07', value: 15 },
  { date: '2023-11-08', value: 15 },
  { date: '2023-11-09', value: 15 },
  { date: '2023-11-10', value: 15 },
  { date: '2023-11-11', value: 15 }
]
  Week 3:
[
  { date: '2023-11-12', value: 15 },
  { date: '2023-11-13', value: 15 },
  { date: '2023-11-14', value: 15 },
  { date: '2023-11-15', value: 15 },
  { date: '2023-11-16', value: 15 }
]
Month 12 (December):
  Week 1:
[ { date: '2023-12-01', value: 10 } ]
Week 2:
[
  { date: '2023-12-05', value: 15 },
  { date: '2023-12-06', value: 15 },
  { date: '2023-12-07', value: 15 },
  { date: '2023-12-08', value: 15 },
  { date: '2023-12-09', value: 15 }
]
Week 3:
[
  { date: '2023-12-10', value: 15 },
  { date: '2023-12-11', value: 15 },
  { date: '2023-12-12', value: 15 },
  { date: '2023-12-13', value: 15 },
  { date: '2023-12-14', value: 15 },
  { date: '2023-12-15', value: 15 },
  { date: '2023-12-16', value: 15 }
]


```