const roles = [
    "Plumber",
    "Carpenter",
    "Painter",
    "Electrician",
    "Mechanic",
    "Technician",
    "Driver",
    "Chef",
    "Gardener",
    "Cleaner"
  ];
  
  function showProfile(id) {
    const memberRole = roles[id - 1];
    alert(`This person is a ${memberRole}.`);
  }
  