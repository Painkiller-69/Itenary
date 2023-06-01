interface DataItem {
    [key: string]: string;
  }
  
  const data: DataItem[] = [
    {"day 1": "Reach the destination"},
    {"day 2": "City Tour in a company tourist bus"},
    {"day 2": "Breakfast & Dinner"},
    {"day 3": "Visit Chang-La"},
    {"day 4": "Back to your home"}
  ];
  
  const days: string[] = [];
  const select = document.getElementById("days") as HTMLSelectElement;
  const content = document.getElementById("content") as HTMLDivElement;
  
  data.forEach((item: DataItem) => {
    const day: string = Object.keys(item)[0];
    if (!days.includes(day)) {
      days.push(day);
      const option = document.createElement("option");
      option.value = day;
      option.text = day;
      select.add(option);
    }
  });
  
  function displayContent(): void {
    content.innerHTML = "";
    const selectedDay: string = select.value;
    data.forEach((item: DataItem) => {
      if (Object.keys(item)[0] === selectedDay) {
        const p = document.createElement("p");
        p.innerHTML = item[Object.keys(item)[0]];
        content.appendChild(p);
      }
    });
  }