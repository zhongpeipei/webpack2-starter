import timeStyle from '../html/time/time.scss';
import moment from 'moment';
const showTime = document.getElementById('show-time');
setInterval(function() {
showTime.innerHTML = "<span>"+moment().format("YYYY-MM-DD HH-mm-ss")+"</span>";
}, 10);
console.log('this is time page');
