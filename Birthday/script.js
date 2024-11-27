const members = [
    { Name: "Feni Fitryanti", Birthday: "16/01/1999" },
    { Name: "Shania Gracia Harlan", Birthday: "31/08/1999" },
    { Name: "Gita Sekar Andarini", Birthday: "30/06/2001" },
    { Name: "Angelina Christy", Birthday: "05/12/2005" },
    { Name: "Febriola Sinambela", Birthday: "26/02/2005" },
    { Name: "Freyana Shifa Jayawardana", Birthday: "13/02/2006" },
    { Name: "Helisma Mauludzunia Putri Kurnia", Birthday: "15/06/2000" },
    { Name: "Jessica Chandra", Birthday: "23/09/2005" },
    { Name: "Mutiara Azzahra Umandana", Birthday: "12/07/2004" },
    { Name: "Cornelia Syafa Vanisa", Birthday: "26/07/2002" },
    { Name: "Fiony Alveria Tantri", Birthday: "04/02/2002" },
    { Name: "Flora Shafiqa Riyadi", Birthday: "04/04/2005" },
    { Name: "Lulu Azkiya Salsabila", Birthday: "23/10/2002" },
    { Name: "Indah Cahya Nabila", Birthday: "20/03/2001" },
    { Name: "Kathrina Irene Indarto Putri", Birthday: "26/07/2006" },
    { Name: "Marsha Lenathea Lapian", Birthday: "09/01/2006" },
    { Name: "Amanda Puspita Sukma Mulyadewi", Birthday: "17/12/2004" },
    { Name: "Aurellia", Birthday: "29/10/2002" },
    { Name: "Callista Alifia Wardhana", Birthday: "08/08/2005" },
    { Name: "Gabriela Abigail Mewengkang", Birthday: "07/08/2006" },
    { Name: "Indira Putri Seruni", Birthday: "26/04/2004" },
    { Name: "Jesslyn Elly", Birthday: "13/09/2001" },
    { Name: "Raisha Syifa Wardhana", Birthday: "11/11/2007" },
    { Name: "Alya Amanda", Birthday: "26/08/2006" },
    { Name: "Anindya Ramadhani", Birthday: "18/10/2005" },
    { Name: "Cathleen Nixie", Birthday: "28/05/2009" },
    { Name: "Celline Thefani", Birthday: "09/04/2007" },
    { Name: "Chelsea Davina Norman", Birthday: "23/12/2009" },
    { Name: "Chynthia Yaputera", Birthday: "22/11/2003" },
    { Name: "Dena Natalia", Birthday: "16/12/2005" },
    { Name: "Desy Natalia", Birthday: "16/12/2005" },
    { Name: "Gendis Mayrannisa", Birthday: "23/06/2010" },
    { Name: "Grace Octaviani", Birthday: "18/10/2007" },
    { Name: "Greesella Sophina Adhalia", Birthday: "10/01/2006" },
    { Name: "Michelle Alexandra", Birthday: "22/04/2009" },
    { Name: "Abigail Rachel", Birthday: "06/08/2008" },
    { Name: "Adeline Wijaya", Birthday: "01/09/2007" },
    { Name: "Aurhel Alana", Birthday: "14/09/2006" },
    { Name: "Catherina Vallencia", Birthday: "21/08/2007" },
    { Name: "Fritzy Rosmerian", Birthday: "28/07/2008" },
    { Name: "Hillary Abigail", Birthday: "19/10/2007" },
    { Name: "Jazzlyn Trisha", Birthday: "16/02/2011" },
    { Name: "Letycia Moreen", Birthday: "07/06/2010" },
    { Name: "Michelle Levia", Birthday: "24/01/2009" },
    { Name: "Nayla Suji", Birthday: "18/06/2007" },
    { Name: "Nina Tutachia", Birthday: "16/10/2009" },
    { Name: "Oline Manuel", Birthday: "03/11/2007" },
    { Name: "Ribka Budiman", Birthday: "13/01/2009" },
    { Name: "Regina Wilian", Birthday: "10/12/2009" },
    { Name: "Shabilqis Naila", Birthday: "01/09/2008" },
    { Name: "Victoria Kimberly", Birthday: "08/03/2010" }
  ];
  
  // Helper function to calculate time until next birthday
  function calculateCountdown(birthday) {
    const now = new Date();
    const [day, month, year] = birthday.split("/").map(Number);
    const nextBirthday = new Date(now.getFullYear(), month - 1, day);
  
    if (nextBirthday < now) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
  
    const timeDiff = nextBirthday - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30); // Approximation
    const remainingDaysAfterMonths = days % 30;
    const weeks = Math.floor(remainingDaysAfterMonths / 7);
    const remainingDays = remainingDaysAfterMonths % 7;
  
    return { days: remainingDays, weeks, months, nextBirthday };
  }
  
  // Sort members by nearest birthday
  members.sort((a, b) => {
    const aCountdown = calculateCountdown(a.Birthday).nextBirthday;
    const bCountdown = calculateCountdown(b.Birthday).nextBirthday;
    return aCountdown - bCountdown;
  });
  
  // Display countdown for all members
  function displayCountdowns() {
    const container = document.getElementById("countdownContainer");
    container.innerHTML = ""; // Clear existing content
    container.style.fontFamily = "Arial, sans-serif";
    container.style.lineHeight = "1.6";
    container.style.color = "#333";
    container.style.padding = "10px";
  
    members.forEach((member) => {
      const { months, weeks, days } = calculateCountdown(member.Birthday);
  
      const memberDiv = document.createElement("div");
      memberDiv.style.marginBottom = "10px";
      memberDiv.style.padding = "8px";
      memberDiv.style.border = "1px solid #ddd";
      memberDiv.style.borderRadius = "5px";
      memberDiv.style.backgroundColor = "#f9f9f9";
  
      const nameSpan = document.createElement("span");
      nameSpan.style.fontWeight = "bold";
      nameSpan.textContent = member.Name;
  
      const countdownParts = [];
      if (months > 0) countdownParts.push(`${months} months`);
      if (weeks > 0) countdownParts.push(`${weeks} weeks`);
      if (days > 0) countdownParts.push(`${days} days`);
  
      const countdownSpan = document.createElement("span");
      countdownSpan.style.marginLeft = "10px";
      countdownSpan.textContent = `: ${countdownParts.join(", ")} until next birthday`;
  
      memberDiv.appendChild(nameSpan);
      memberDiv.appendChild(countdownSpan);
      container.appendChild(memberDiv);
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayCountdowns);
  