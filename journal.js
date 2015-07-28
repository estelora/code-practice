var journal = [
  
  { date: 'day1',
    events: ['javascript', 'ice cream', 'gym'],
    amIsquirrel: false
  },

  { date: 'day2',
    events: ['piano', 'pizza', 'flying monkeys'],
    amIsquirrel: false
  },

  { date: 'day3',
    events: ['collect nuts', 'woods', 'jumping'],
    amIsquirrel: true
  },

];
console.log(journal[0].date);
console.log(journal[1].amIsquirrel);
console.log(journal[2].events);

function addEntry(date, events, amIsquirrel) {
  journal.push({
    date: date,
    events: event,
    amIsquirrel: squirrel
  });
};

addEntry('day4', ['interview', 'cough', 'dog', 'brie and crackers'], false);
console.log(journal[3]);