import { toPng } from 'html-to-image';
import download from 'downloadjs';

const downloadCalendarAsPng = async () => {
  const calendar = document.getElementById('calendar');
  if (calendar) {
    const prevHeight = calendar.offsetHeight;
    console.log(prevHeight);
    calendar.style.height = 'auto';
    toPng(calendar).then((dataUrl) => {
      download(dataUrl, 'myFRScalendar.png');
      calendar.style.height = `${prevHeight}px`;
    });
  }
};

export { downloadCalendarAsPng };
