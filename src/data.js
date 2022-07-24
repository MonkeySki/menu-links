let tracker = 3;

export function setTracker(){
  return tracker = tracker +1;
}

export function getTracker(){
  return tracker;
}

let messages = [
  {
    name: "Message from Bex",
    number: 3,
    info: "Hey, I think I met you last night...",
    event: 2
  },
  {
    name: "Message from Olive",
    number: 2,
    info: "Ready for the party tonight???",
    event: 1
  },
  {
    name: "Letter from Paris",
    number: 1,
    info: "Somewhere in here I've got to put in a way for you to get the bracelet",
    event: 0
  }

  ];
  export function getMessages() {
    return messages;
  }

  export function getMessage(number) {
    return messages.find(
      (message) => message.number === number
    );
  }

  let dates = [
    {
      date: "13th February 2021",
      number: [0,2,3,4]
    },
    {
      date: "14th February 2021",
      number: [1]
    }
  ]
  
  export function getDate(tracker){
    return dates.find(
      (date) => date.number.includes(tracker)
    );

  }

  let profile = {
    
      name: "Ethan",
      bracelet: false
    
  }

  export function getProfile(){
    return profile;
  }

  export function setBracelet(){
    profile.bracelet = true;
  }

  